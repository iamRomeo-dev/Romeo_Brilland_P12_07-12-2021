import { TheBarChart } from "../Charts/TheBarChart";

/**
 * Represents the top block of bar chart.
 * @constructor
 */
export const AbovePanel = () => {
  return (
    <div className="w-full bg-gray-100 p-8">
      <div className="flex justify-between">
        <p className="text-gray-700 text-xl font-medium">
          Activité quotidienne
        </p>
        <div className="flex gap-2">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <p className="text-gray-700 text-base font-sm">Poids (kg)</p>
          </div>
          <div className="flex gap-2 items-center ml-4">
            <div className="w-2 h-2 rounded-full bg-red-700"></div>
            <p className="text-gray-700 text-base font-sm">
              Calories brûlées (kcal)
            </p>
          </div>
        </div>
      </div>
      <TheBarChart />
    </div>
  );
};
