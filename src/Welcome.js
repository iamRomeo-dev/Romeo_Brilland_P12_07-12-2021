import { useQuery } from "react-query";
import { fetchPerformance } from "./API";

export const Welcome = () => {
  const { data, status } = useQuery("fetchPerformance", fetchPerformance);
  const azaz = data?.data.userId;
  console.log(azaz);
  return (
    <>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && <h1>{data.data.userId}</h1>}
    </>
  );
};
