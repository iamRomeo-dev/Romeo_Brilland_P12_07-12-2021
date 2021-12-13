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

  const dataTransormed = data?.data.data;
  const kindTest = data?.data.kind;

  for (let i = 0; i < dataTransormed?.length; i++) {
    dataTransormed[i].kind = kindTest[i + 1];
  }

  return (
    <>
      {status === "loading" && <div className="h-20"></div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ResponsiveContainer aspect={2}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataTransormed}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              stroke="#fff"
              tick={{ fontSize: 10 }}
              tickLine={false}
            />

            <Radar dataKey="value" fill="red" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
