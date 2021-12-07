import { CaloriesIcon, CarbsIcon, FatsIcon, ProteinIcon } from "../Icons";
import { useQuery } from "react-query";
import { fetchUser } from "../API";

export const RightPanel = () => {
  const { data, status } = useQuery(["product", 12], () => fetchUser(12));
  console.log("user", data?.data.keyData);
  return (
    <>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div className="flex flex-col gap-2 w-1/6">
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

export const SmallCardWithIcon = ({ title, number, lg, ...props }) => {
  return (
    <div className="flex items-center pl-4 h-full bg-gray-100 rounded-md">
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
