import React from "react";
import { useQuery } from "react-query";
import { fetchActivity } from "../API";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useUser } from "../MyContext";
import { Skeleton } from "../Skeleton";

export const TheBarChart = () => {
  const user = useUser();
  const { data, status } = useQuery(["activity", user], () =>
    fetchActivity(user)
  );

  const dataTransormed = data?.data.sessions;

  // Pour domain={[kiloMin, kiloMax]} je prends le chiffre min et le chiffre max
  const kiloArray = dataTransormed.map((aaa) => aaa.kilogram);
  const kiloMax = Math.max(...kiloArray);
  const kiloMin = Math.min(...kiloArray);

  const calArray = dataTransormed.map((aaa) => aaa.calories);
  const calMax = Math.max(...calArray);
  const calMin = Math.min(...calArray);

  // Loop on day and keep only the last caracter of the string day. Then i say that dataTransormed[i].day will be now dataTransormed[i].day.substr(-1)
  for (let i = 0; i < dataTransormed?.length; i++) {
    dataTransormed[i].day = dataTransormed[i].day.substr(-1);
  }

  // <Tooltip> est le cadre qui affiche les données au passage de la souris
  // active et payload sont fournis par recharts
  // active affiche true quand on passe sur la donnée sinon affiche false
  // payload est un tableau qui donne les données sélectionnées
  const CustomTooltip = ({ active, payload }) => {
    // condition quand on clique ou survol la donnée donc active = true && alors payload se rempli des données payload=[()] && payload est un tableau avec quelquechose
    if (active && payload && payload.length) {
      return (
        <div className="bg-red-600 p-2">
          <span className="block text-white">{`${payload[0].value} kg`}</span>
          <span className="block text-white">{`${payload[1].value} kcal`}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {status === "loading" && (
        <div className="h-24 w-full">
          <Skeleton />
        </div>
      )}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ResponsiveContainer width="100%" aspect={4}>
          <BarChart
            data={data?.data.sessions}
            margin={{
              top: 50,
              right: 10,
              left: 40,
              bottom: 5,
            }}
            // epaisseur des bars
            barCategoryGap={35}
            // espace entre les bars
            barGap={8}
          >
            {/* vertical={false} remove the vertical lines on the background */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            {/* dy={15} make padding-top of the x legend form the chart */}
            {/* tickLine={false} remove the small vertical lines between legend and chart */}
            <XAxis dataKey="day" dy={15} tickLine={false} />
            {/* Pour selectionner deséchelles pour les bars, on relie chaque  <YAxis> avec sa <Bar> (ex: yAxisId="kilo") */}
            <YAxis
              yAxisId="kilo"
              orientation="right"
              interval="number"
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 14 }}
              domain={[kiloMin, kiloMax]}
            />
            {/* domain permet de définir le min et le max de l'échelle */}
            {/* hide={true} permet de cacher la legende */}
            {/* orientation="right" permet de definir la position de la legende */}
            <YAxis yAxisId="cal" hide={true} domain={[calMin, calMax]} />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              yAxisId="kilo"
              dataKey="kilogram"
              fill="#000"
              radius={[50, 50, 0, 0]}
            />
            <Bar
              yAxisId="cal"
              dataKey="calories"
              fill="#e60000"
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
