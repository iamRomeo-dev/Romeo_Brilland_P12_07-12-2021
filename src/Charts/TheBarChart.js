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

/**
 * Represents the bar chart.
 * @constructor
 */
export const TheBarChart = () => {
  const user = useUser();
  const { data, status } = useQuery(["activity", user], () =>
    fetchActivity(user)
  );

  const dataTransormed = data?.data.sessions;

  const kiloMax = [];
  const kiloMin = [];
  const calMax = [];
  const calMin = [];
  if (status === "success") {
    let kiloArray = data?.data.sessions.map((aaa) => aaa.kilogram);
    kiloMax.push(Math.max(...kiloArray));
    kiloMin.push(Math.min(...kiloArray));

    const calArray = dataTransormed.map((aaa) => aaa.calories);
    calMax.push(Math.max(...calArray));
    calMin.push(Math.min(...calArray));
  }

  for (let i = 0; i < dataTransormed?.length; i++) {
    dataTransormed[i].day = dataTransormed[i].day.substr(-1);
  }

  /**
   * Represents tooltip.
   * @constructor
   * @param {boolean} active
   * @param {array} payload
   */
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
              top: 50,
              right: 10,
              left: 40,
              bottom: 5,
            }}
            barCategoryGap={35}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" dy={15} tickLine={false} />
            <YAxis
              yAxisId="kilo"
              orientation="right"
              interval="number"
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 14 }}
              domain={[kiloMin, kiloMax]}
            />
            <YAxis yAxisId="cal" hide={true} domain={[0, 10]} />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              yAxisId="kilo"
              dataKey="kilogram"
              fill="#000"
              radius={[50, 50, 0, 0]}
            />
            <Bar
              yAxisId="cal"
              dataKey="calories"
              fill="#e60000"
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
