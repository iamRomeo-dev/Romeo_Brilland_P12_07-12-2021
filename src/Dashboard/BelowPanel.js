import { ThelineChart } from "../Charts/TheLineChart";
import { TheRadarChart } from "../Charts/TheRadarChart";

export const BelowPanel = () => {
  return (
    <div className="flex gap-2">
      <div className="w-full bg-red-500">
        <ThelineChart />
      </div>
      <div className="w-full bg-gray-900">
        <TheRadarChart />
      </div>
      <div className="w-full bg-gray-100"></div>
    </div>
  );
};
