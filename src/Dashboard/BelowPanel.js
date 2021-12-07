import { ThelineChart } from "../Charts/TheLineChart";

export const BelowPanel = () => {
  return (
    <div className="flex gap-2">
      <div className="w-full h-64 bg-red-500">
        <ThelineChart />
      </div>
      <div className="w-full bg-gray-100"></div>
      <div className="w-full bg-gray-100"></div>
    </div>
  );
};
