import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "react-query";
import { fetchAverageSession } from "../API";

const data1 = [
  {
    name: "Page A",
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

export const ThelineChart = () => {
  const { data, status } = useQuery(["session", 12], () =>
    fetchAverageSession(12)
  );
  console.log("ccc", data?.data.sessions);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
  );
};
