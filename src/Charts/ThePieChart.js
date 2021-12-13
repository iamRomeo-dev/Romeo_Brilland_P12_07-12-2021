import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { fetchUser } from "../API";
import { useQuery } from "react-query";
import { useUser } from "../MyContext";

export const ThePieChart = () => {
  const user = useUser();
  const { data, status } = useQuery(["product", user], () => fetchUser(user));
  const dataa = [
    { id: "1", name: "L1", value: 100 },
    { id: "2", name: "L2", value: data?.data.todayScore },
  ];
  let score = data?.data.todayScore * 100;
  if (status === "success") {
    data.data.todayScore = score;
  }
  const percentage = score / 100;

  return (
    <>
      {status === "loading" && (
        <div className="ring-gray-200 text-primary-200 flex-shrink-0 h-16 w-16 flex items-center justify-center ring rounded-full overflow-hidden">
          <span className="bg-gray-200 w-4 h-4 rounded-full"></span>
        </div>
      )}
      {status === "error" && (
        <div className="ring-gray-200 text-primary-200 flex-shrink-0 h-16 w-16 flex items-center justify-center ring rounded-full overflow-hidden">
          <span className="bg-gray-200 w-4 h-4 rounded-full">Error</span>
        </div>
      )}
      {status === "success" && (
        <>
          <text className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-small md:text-3xl font-semibold">
            {percentage} %
          </text>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={50} height={50}>
              <Pie
                data={dataa}
                dataKey="value"
                innerRadius="80%"
                outerRadius="100%"
                fill="red"
                startAngle={90}
                endAngle={-270}
                paddingAngle={0}
                blendStroke
              >
                <Cell fill="white" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};
