import {
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from "recharts";
import { fetchUser } from "../API";
import { useQuery } from "react-query";
import { useUser } from "../MyContext";

export const ThePieChart = () => {
  const user = useUser();
  const { data, status } = useQuery(["product", user], () => fetchUser(user));

  const dataTransformed = [{ name: "L1", value: data?.data.todayScore }];

  let score = data?.data.todayScore * 100;
  if (status === "success") {
    data.data.todayScore = score;
  }
  const percentage = score / 100;

  const circleSize = 30;

  return (
    <>
      {status === "loading" && (
        <div className="ring-gray-200 text-gray-200 flex-shrink-0 h-16 w-16 flex items-center justify-center ring rounded-full overflow-hidden">
          <span className="bg-gray-200 w-4 h-4 rounded-full"></span>
        </div>
      )}
      {status === "error" && (
        <div className="ring-gray-200 text-gray-200 flex-shrink-0 h-16 w-16 flex items-center justify-center ring rounded-full overflow-hidden">
          <span className="bg-gray-200 w-4 h-4 rounded-full">Error</span>
        </div>
      )}
      {status === "success" && (
        <>
          <text className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-black text-xs 2xl:text-base font-semibold">
            {percentage} %
          </text>
          <div className="flex flex-col absolute left-1/2 transform -translate-x-1/2 top-2/3 -translate-y-1/2 ">
            <text className="text-gray-400 text-xs font-semibold">
              de votre
            </text>
            <text className="text-gray-400 text-xs font-semibold">
              objectif
            </text>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="80%"
              outerRadius="100%"
              barSize={6}
              data={dataTransformed}
              startAngle={-270}
              endAngle={90}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                clockWise
                dataKey="value"
                cornerRadius={circleSize / 2}
                fill="red"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};
