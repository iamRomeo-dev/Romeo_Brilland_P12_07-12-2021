import { BikerIcon, DumbellIcon, SwimmerIcon, YogaIcon } from "../Icons";

export const LeftNavBar = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center gap-4 w-32 h-screen">
      <YogaIcon />
      <SwimmerIcon />
      <BikerIcon />
      <DumbellIcon />
    </div>
  );
};
