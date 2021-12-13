import { useQuery } from "react-query";
import { fetchUser } from "./API";
import { useUser } from "./MyContext";
import { Skeleton } from "./Skeleton";

/**
 * Represents the welcome text.
 * @constructor
 */
export const Welcome = () => {
  const user = useUser();
  const { data, status } = useQuery(["product", user], () => fetchUser(user));

  return (
    <>
      {status === "loading" && (
        <div>
          <h1 className="text-black text-5xl font-medium">
            Bonjour
            <Skeleton />
          </h1>
          <h3 className="text-black text-2xl font-medium mt-4">
            Félicitations ! Vous avez explosé vos objectif hier 👏
          </h3>
        </div>
      )}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
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
