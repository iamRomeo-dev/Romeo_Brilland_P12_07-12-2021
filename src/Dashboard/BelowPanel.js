import { useQuery } from "react-query";
import { fetchUser } from "../API";
import { ThelineChart } from "../Charts/TheLineChart";
import { ThePieChart } from "../Charts/ThePieChart";
import { TheRadarChart } from "../Charts/TheRadarChart";
import { useUser } from "../MyContext";

export const BelowPanel = () => {
  const user = useUser();
  const { data, status } = useQuery(["product", user], () => fetchUser(user));
  return (
    <div className="flex gap-2">
      <div className="w-full bg-red-500">
        <ThelineChart />
      </div>
      <div className="w-full bg-gray-900 p-2">
        <TheRadarChart />
      </div>
      <div className="w-full bg-gray-100 flex items-center justify-center">
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
          <ThePieChart />
          // <JobAdMatchingScore score={data.data.todayScore * 100} />
        )}
      </div>
    </div>
  );
};

export const JobAdMatchingScore = ({ score }) => {
  const displayedScore = score || 0;
  return (
    <>
      {displayedScore >= 50 && (
        <div className="relative bg-white flex-shrink-0 h-16 w-16 flex items-center justify-center ring ring-red-500 rounded-full overflow-hidden">
          <span className="text-gray-900 text-sm font-semibold leading-none">
            {score} %
          </span>
          <span className="absolute top-2/3 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs text-center w-full">
            de votre objectif
          </span>
        </div>
      )}

      {score ? (
        displayedScore < 50 && (
          <div className="relative bg-white flex-shrink-0 w-20 h-20 flex items-center justify-center border-l-4 border-red-500 rounded-full overflow-hidden">
            <span className="text-gray-900 text-sm font-semibold leading-none">
              {score} %
            </span>
            <span className="absolute top-2/3 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs text-center w-full">
              de votre objectif
            </span>
          </div>
        )
      ) : (
        <div className="ring-gray-200 text-primary-200 flex-shrink-0 h-16 w-16 flex items-center justify-center ring rounded-full overflow-hidden">
          <span className="bg-gray-200 w-4 h-4 rounded-full"></span>
        </div>
      )}
    </>
  );
};
