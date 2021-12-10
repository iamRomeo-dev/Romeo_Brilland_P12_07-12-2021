import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "react-query";
import { fetchPerformance } from "../API";
import { useUser } from "../MyContext";

export const TheRadarChart = () => {
  const user = useUser();
  const { status, data } = useQuery(["performance", user], () =>
    fetchPerformance(user)
  );
  return (
    <>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ResponsiveContainer aspect={2}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data.data}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              stroke="#fff"
              tick={{ fontSize: 10 }}
            />

            <Radar name="Mike" dataKey="value" fill="red" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
