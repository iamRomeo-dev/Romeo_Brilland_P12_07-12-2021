import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useQuery } from "react-query";
import { fetchAverageSession } from "../API";
import { useUser } from "../MyContext";

export const ThelineChart = () => {
  const user = useUser();
  const { data, status } = useQuery(["session", user], () =>
    fetchAverageSession(user)
  );
  return (
    <>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ResponsiveContainer aspect={2}>
          <LineChart
            data={data?.data.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="day" axisLine={false} dy={10} tickLine={false} />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
