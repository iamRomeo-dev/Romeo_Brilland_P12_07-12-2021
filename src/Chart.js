import React from "react";
import { useQuery } from "react-query";
import { fetchActivity, fetchAverageSession, fetchPerformance } from "./API";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useUser } from "./MyContext";

export const Chart = () => {
  const user = useUser();
  const { data, status } = useQuery(["activity", user], () =>
    fetchActivity(user)
  );
  // console.log("activity", data?.data.sessions);

  // const { data: ccc } = useQuery(["session", 12], () =>
  //   fetchAverageSession(12)
  // );
  // console.log(ccc);
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
            <XAxis datakey="day" tickLine={false} />
            <YAxis orientation="right" tick={{ fontSize: 14 }} />
            <Tooltip />
            <Bar dataKey="kilogram" fill="#000" radius={[10, 10, 0, 0]} />
            <Bar dataKey="calories" fill="red" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
