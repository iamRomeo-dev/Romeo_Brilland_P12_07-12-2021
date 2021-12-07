import { LogoIcon } from "../Icons";

export const TopNavBar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="flex mx-auto px-2 sm:px-6 lg:px-8">
        <LogoIcon />
        <div className="flex-1 flex items-center justify-center justify-around">
          <h1 className="text-white text-2xl font-medium">Accueil</h1>
          <h1 className="text-white text-2xl font-medium">Profil</h1>
          <h1 className="text-white text-2xl font-medium">Réglage</h1>
          <h1 className="text-white text-2xl font-medium">Communauté</h1>
        </div>
      </div>
    </nav>
  );
};
