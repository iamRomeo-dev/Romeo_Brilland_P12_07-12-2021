import React from "react";
import { useQuery } from "react-query";
import {
  fetchActivity,
  fetchAverageSession,
  fetchPerformance,
  fetchUser,
} from "./API";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Chart = () => {
  // const { data, status } = useQuery(["product", 12], () => fetchUser(12));
  // console.log("user", data);
  // const { data: aaa } = useQuery(["performance", 12], () =>
  //   fetchPerformance(12)
  // );
  // console.log("perfo", aaa);
  const { data, status } = useQuery(["activity", 12], () => fetchActivity(12));
  console.log("activity", data?.data.sessions);
  // const { data: ccc } = useQuery(["session", 12], () =>
  //   fetchAverageSession(12)
  // );

  return (
    <>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <BarChart
            width={830}
            height={350}
            aspect={4.0 / 3.0}
            data={data?.data.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap={30}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={`efzegze`} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="kilogram" fill="#000" radius={[10, 10, 0, 0]} />
            <Bar dataKey="calories" fill="red" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
