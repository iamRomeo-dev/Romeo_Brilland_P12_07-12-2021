import { CaloriesIcon, CarbsIcon, FatsIcon, ProteinIcon } from "../Icons";
import { useQuery } from "react-query";
import { fetchUser } from "../API";
import { useUser } from "../MyContext";

/**
 * Represents right block.
 * @constructor
 */
export const RightPanel = () => {
  const user = useUser();
  const { data, status } = useQuery(["product", user], () => fetchUser(user));
  return (
    <>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div className="flex flex-row lg:flex-col gap-2">
          <SmallCardWithIcon
            title={"Calories"}
            number={data?.data.keyData.calorieCount}
            lg={"kCal"}
          >
            <CaloriesIcon />
          </SmallCardWithIcon>
          <SmallCardWithIcon
            title={"Proteines"}
            number={data?.data.keyData.proteinCount}
            lg={"g"}
          >
            <ProteinIcon />
          </SmallCardWithIcon>
          <SmallCardWithIcon
            title={"Glucides"}
            number={data?.data.keyData.carbohydrateCount}
            lg={"g"}
          >
            <CarbsIcon />
          </SmallCardWithIcon>
          <SmallCardWithIcon
            title={"Lipides"}
            number={data?.data.keyData.lipidCount}
            lg={"g"}
          >
            <FatsIcon />
          </SmallCardWithIcon>
        </div>
      )}
    </>
  );
};

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} number - The author of the book.
 *  * @param {string} lg - The title of the book.
 */
export const SmallCardWithIcon = ({ title, number, lg, ...props }) => {
  return (
    <div className="flex items-center p-4 h-full w-full bg-gray-100 rounded-md">
      {props.children}
      <div className="flex flex-col pl-4">
        <p className="text-black text-xl font-bold">
          {number} {lg}
        </p>
        <p className="text-black text-base font-base">{title}</p>
      </div>
    </div>
  );
};
