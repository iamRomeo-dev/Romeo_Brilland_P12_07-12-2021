import { CaloriesIcon, CarbsIcon, FatsIcon, ProteinIcon } from "../Icons";

export const RightPanel = () => {
  return (
    <div className="flex flex-col gap-2 w-1/6">
      <SmallCardWithIcon title={"Calories"}>
        <CaloriesIcon />
      </SmallCardWithIcon>
      <SmallCardWithIcon title={"Proteines"}>
        <ProteinIcon />
      </SmallCardWithIcon>
      <SmallCardWithIcon title={"Glucides"}>
        <CarbsIcon />
      </SmallCardWithIcon>
      <SmallCardWithIcon title={"Lipides"}>
        <FatsIcon />
      </SmallCardWithIcon>
    </div>
  );
};

export const SmallCardWithIcon = ({ title, ...props }) => {
  return (
    <div className="flex items-center pl-4 h-full bg-gray-100 rounded-md">
      {props.children}
      <div className="flex flex-col pl-4">
        <p className="text-black text-xl font-bold">1990 cal</p>
        <p className="text-black text-base font-base">{title}</p>
      </div>
    </div>
  );
};
