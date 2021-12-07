import { useQuery } from "react-query";
import { fetchUser } from "./API";

export const Welcome = () => {
  const { data, status } = useQuery(["product", 12], () => fetchUser(12));
  return (
    <>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <h1 className="text-black text-5xl font-medium">
            Bonjour
            <span className="text-red-500 ml-4">
              {data.data.userInfos.firstName}
            </span>
          </h1>
          <h3 className="text-black text-2xl font-medium">
            Félicitations ! Vous avez explosé vos objectif hier 👏
          </h3>
        </>
      )}
    </>
  );
};
