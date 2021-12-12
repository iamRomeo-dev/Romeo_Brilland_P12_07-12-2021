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

export const TheBarChart = () => {
  const user = useUser();
  const { data, status } = useQuery(["activity", user], () =>
    fetchActivity(user)
  );
  console.log(data?.data.sessions[1].day.substr(-1));

  const dataTransormed = data?.data.sessions;
  const kindTransformed = data;
  console.log("dataTransormed", dataTransormed);
  console.log("kindTransformed", kindTransformed);

  // Loop on day and keep only the last caracter of the string day. Then i say that dataTransormed[i].day will be now dataTransormed[i].day.substr(-1)
  for (let i = 0; i < dataTransormed?.length; i++) {
    dataTransormed[i].day = dataTransormed[i].day.substr(-1);
  }

  return (
    <>
      {status === "loading" && <div>Loading data</div>}
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
              // type="number"
              // dataKey="kilogram"
              orientation="right"
              tick={{ fontSize: 14 }}
            />

            <Tooltip />
            <Bar dataKey="kilogram" fill="#000" radius={[10, 10, 0, 0]} />
            <Bar dataKey="calories" fill="red" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
