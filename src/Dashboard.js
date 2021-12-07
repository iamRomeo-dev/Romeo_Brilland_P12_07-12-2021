import { Chart } from "./Chart";
import { Welcome } from "./Welcome";

export const Dashboard = () => {
  return (
    <div classname="w-full">
      <Welcome />
      <Chart />
    </div>
  );
};
