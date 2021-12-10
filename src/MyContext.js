import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProviderByMe = ({ children }) => {
  const [idUser, setIdUser] = useState(12);

  return (
    <UserContext.Provider value={{ idUser, setIdUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export const useUser = () => {
  return useUserContext().idUser;
};

export const useSetUser = () => {
  return useUserContext().setIdUser;
};
