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
  Legend,
} from "recharts";

const data1 = [
  {
    name: "Page 7",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
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
  // console.log("session", ccc);
  return (
    <>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <BarChart
          width={500}
          height={300}
          data={data?.data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#8884d8" />
          <Bar dataKey="calories" fill="#82ca9d" />
          {/* <Bar dataKey="amt" fill="green" /> */}
        </BarChart>
      )}
    </>
  );
};
