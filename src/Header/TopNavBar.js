import { useState } from "react";
import { LogoIcon } from "../Icons";
import { Modal } from "../Modal";

export const TopNavBar = () => {
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <nav className="bg-black py-4">
        <div className="flex mx-auto px-2 sm:px-6 lg:px-8">
          <LogoIcon />
          <div className="flex-1 flex items-center justify-center justify-around">
            <h1 className="text-white text-2xl font-medium">Accueil</h1>
            <h1
              className="text-white text-2xl font-medium"
              onClick={() => setShowResults(!showResults)}
            >
              Profil
            </h1>
            <h1 className="text-white text-2xl font-medium">Réglage</h1>
            <h1 className="text-white text-2xl font-medium">Communauté</h1>
          </div>
        </div>
      </nav>
      <>
        <div>
          {showResults ? (
            <Modal showResults={showResults} setShowResults={setShowResults} />
          ) : null}
        </div>
      </>
    </>
  );
};
