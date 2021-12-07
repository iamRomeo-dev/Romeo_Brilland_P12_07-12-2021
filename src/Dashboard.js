import { AbovePanel } from "./Dashboard/AbovePanel";
import { BelowPanel } from "./Dashboard/BelowPanel";
import { RightPanel } from "./Dashboard/RightPanel";
import { Welcome } from "./Welcome";

export const Dashboard = () => {
  return (
    <div className="flex-grow p-16">
      <Welcome />
      {/* Blocks */}
      <div className="flex gap-8">
        {/* Block de gauche */}
        <div className="flex flex-col gap-2 h-full w-5/6">
          <AbovePanel />
          <BelowPanel />
        </div>
        <RightPanel />
      </div>
    </div>
  );
};
