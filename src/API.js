export const fetchUser = async (userId) => {
  const urlUser = `http://localhost:3000/user/${userId}`;
  const res = await fetch(urlUser);
  const json = await res.json();
  return json;
};

export const fetchPerformance = async (userId) => {
  const urlPerf = `http://localhost:3000/user/${userId}/performance`;
  const res = await fetch(urlPerf);
  const json = await res.json();
  return json;
};

export const fetchActivity = async (userId) => {
  const urlActi = `http://localhost:3000/user/${userId}/activity`;
  const res = await fetch(urlActi);
  const json = await res.json();
  return json;
};

export const fetchAverageSession = async (userId) => {
  const urlAverSesh = `http://localhost:3000/user/${userId}/average-sessions`;
  const res = await fetch(urlAverSesh);
  const json = await res.json();
  return json;
};
