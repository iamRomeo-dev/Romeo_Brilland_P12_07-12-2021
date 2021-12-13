import { ThelineChart } from "../Charts/TheLineChart";
import { ThePieChart } from "../Charts/ThePieChart";
import { TheRadarChart } from "../Charts/TheRadarChart";

export const BelowPanel = () => {
  return (
    <div className="flex gap-2">
      <div className="w-full bg-red-600">
        <ThelineChart />
      </div>
      <div className="w-full bg-gray-900 p-2">
        <TheRadarChart />
      </div>
      <div className="relative w-full bg-gray-100 flex items-center justify-center">
        <ThePieChart />
      </div>
    </div>
  );
};
