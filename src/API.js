const url = "http://localhost:3000/user/12/performance";
const url2 = "http://localhost:3000/user/12";

export const fetchPerformance = async () => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const fetchUser = async () => {
  const res = await fetch(url2);
  const json = await res.json();
  return json;
};
