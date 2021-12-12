import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { fetchUser } from "../API";
import { useQuery } from "react-query";
import { useUser } from "../MyContext";

export const ThePieChart = () => {
  const user = useUser();
  const { data, status } = useQuery(["product", user], () => fetchUser(user));
  console.log(data.data.todayScore * 100);
  console.log(data.data);
  const dataa = [
    { id: "1", name: "L1", value: 100 },
    { id: "2", name: "L2", value: data?.data.todayScore },
  ];
  let score = data?.data.todayScore * 100;
  data.data.todayScore = score;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={50} height={50}>
        {/* <text x={25} y={25} textAnchor="middle" dominantBaseline="middle">
          25
        </text> */}
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
    // <ResponsiveContainer width="100%" height="100%">
    //   <PieChart width={400} height={400}>
    //     <Pie
    //       data={dataaa}
    //       dataKey="value"
    //       cx="50%"
    //       cy="50%"
    //       innerRadius={70}
    //       outerRadius={80}
    //       startAngle={90}
    //       cornerRadius={40}
    //       fill="#82ca9d"
    //       label
    //     >
    //       {dataaa.map((entry, index) => {
    //         if (index === 1) {
    //           return <Cell key={`cell-${index}`} fill="#fbfbfb" />;
    //         }
    //         return <Cell key={`cell-${index}`} fill="#ff0000" />;
    //       })}
    //     </Pie>
    //   </PieChart>
    // </ResponsiveContainer>
  );
};
