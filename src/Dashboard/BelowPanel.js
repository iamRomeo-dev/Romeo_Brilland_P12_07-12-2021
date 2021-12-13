import { ThelineChart } from "../Charts/TheLineChart";
import { ThePieChart } from "../Charts/ThePieChart";
import { TheRadarChart } from "../Charts/TheRadarChart";

/**
 * Represents bottom block.
 * @constructor
 */
export const BelowPanel = () => {
  return (
    <div className="flex gap-2">
      <div className="relative w-full bg-red-600  flex items-center justify-center">
        <h3 className="absolute left-6 top-4 opacity-50 text-gray-200 text-xs font-semibold">
          Durée moyenne des sessions
        </h3>
        <ThelineChart />
      </div>
      <div className="w-full bg-gray-900  flex items-center justify-center p-2">
        <TheRadarChart />
      </div>
      <div className="relative w-full bg-gray-100 flex items-center justify-center p-2">
        <h3 className="absolute left-6 top-4 text-black text-small text-xs 2xl:text-base font-semibold">
          Score
        </h3>
        <ThePieChart />
      </div>
    </div>
  );
};
