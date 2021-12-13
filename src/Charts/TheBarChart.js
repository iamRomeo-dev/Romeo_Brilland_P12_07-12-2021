import React from "react";
import { useQuery } from "react-query";
import { fetchActivity } from "../API";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useUser } from "../MyContext";
import { Skeleton } from "../Skeleton";

export const TheBarChart = () => {
  const user = useUser();
  const { data, status } = useQuery(["activity", user], () =>
    fetchActivity(user)
  );

  const dataTransormed = data?.data.sessions;

  // Loop on day and keep only the last caracter of the string day. Then i say that dataTransormed[i].day will be now dataTransormed[i].day.substr(-1)
  for (let i = 0; i < dataTransormed?.length; i++) {
    dataTransormed[i].day = dataTransormed[i].day.substr(-1);
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-red-600 p-2">
          <span className="block text-white">{`${payload[0].value} kg`}</span>
          <span className="block text-white">{`${payload[1].value} kcal`}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {status === "loading" && (
        <div className="h-24 w-full">
          <Skeleton />
        </div>
      )}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ResponsiveContainer width="100%" aspect={4}>
          <BarChart
            data={data?.data.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap={30}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" dy={15} tickLine={false} />
            <YAxis
              type="number"
              yAxisId="kilogram"
              orientation="right"
              tick={{ fontSize: 14 }}
              domain={[70, 89]}
            />
            <YAxis yAxisId="calories" domain={[220, 390]} />
            <Tooltip content={<CustomTooltip />} />
            <Bar yAxisId="kilogram" fill="#000" radius={[10, 10, 0, 0]} />
            <Bar yAxisId="calories" fill="red" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
