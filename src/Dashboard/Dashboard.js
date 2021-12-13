import { AbovePanel } from "./AbovePanel";
import { BelowPanel } from "./BelowPanel";
import { RightPanel } from "./RightPanel";
import { Welcome } from "../Welcome";

export const Dashboard = () => {
  return (
    <div className="flex-grow p-16">
      <Welcome />
      {/* Blocks */}
      <div className="flex flex-wrap gap-8 mt-8">
        {/* Block de gauche */}
        <div className="flex flex-col flex-wrap gap-2 h-full min-w-800 lg:w-4/6">
          <AbovePanel />
          <BelowPanel />
        </div>
        <RightPanel />
      </div>
    </div>
  );
};
