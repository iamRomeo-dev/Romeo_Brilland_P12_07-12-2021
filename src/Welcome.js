import { useQuery } from "react-query";
import { fetchUser } from "./API";
import { useSetUser, useUser } from "./MyContext";

export const Welcome = () => {
  const user = useUser();
  const setUser = useSetUser();
  const { data, status } = useQuery(["product", user], () => fetchUser(user));
  return (
    <>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <button onClick={() => setUser(12)}>Karl</button>
          <button onClick={() => setUser(18)}>Cecilia</button>
          <h1 className="text-black text-5xl font-medium">
            Bonjour
            <span className="text-red-500 ml-4">
              {data.data.userInfos.firstName}
            </span>
          </h1>
          <h3 className="text-black text-2xl font-medium mt-4">
            Félicitations ! Vous avez explosé vos objectif hier 👏
          </h3>
        </>
      )}
    </>
  );
};
