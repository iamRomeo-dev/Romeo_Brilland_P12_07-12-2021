import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useQuery } from "react-query";
import { fetchAverageSession } from "../API";
import { useUser } from "../MyContext";

export const ThelineChart = () => {
  const user = useUser();
  const { data, status } = useQuery(["session", user], () =>
    fetchAverageSession(user)
  );

  const dataTransormed = data?.data.sessions;

  const day = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  // Loop Then i say that dataTransormed[i].day will be transformed now by the new array day[i + 1]
  for (let i = 0; i < dataTransormed?.length; i++) {
    dataTransormed[i].day = day[i + 1];
  }
  return (
    <>
      {status === "loading" && <div className="h-20"></div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ResponsiveContainer aspect={2}>
          <LineChart
            data={data?.data.sessions}
            margin={{
              top: 50,
              right: 15,
              left: 15,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              dy={10}
              tickLine={false}
              stroke="rgba(255, 255, 255, 0.5)"
            />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
