import { DonutChart } from "@tremor/react";

export default function Informe({ data }: any) {
  const inversiones2 = [
    {
      name: "Folsom",
      value: data[0]["Total Invertido Folsom"],
      color: "#3d5890", // Color para Folsom
    },
    {
      name: "30 th Street",
      value: data[0]["Total Invertido 30 Street"],
      color: "#43903d", // Color para 30 th Street
    },
  ].filter((inv) => inv.value > 0);
  // Suponiendo que estos son los montos de inversión
  const inversiones = {
    folsom: data[0]["Total Invertido Folsom"],
    thirtiethStreet: data[0]["Total Invertido 30 Street"],
  };

  // Calculando el total para usar en el cálculo del porcentaje
  const totalInversiones = Object.values(inversiones).reduce(
    (acc, val) => acc + val,
    0
  );

  // Calculando los porcentajes de inversión
  const porcentajeFolsom = (inversiones.folsom / totalInversiones) * 100;
  const porcentajeThirtiethStreet =
    (inversiones.thirtiethStreet / totalInversiones) * 100;

  const mostrarDonutChart = inversiones2.length > 1;
  return (
    <div className="card w-[480px] h-fit rounded-md p-5 shadow-sm border border-black/5 bg-white flex flex-col">
      <p className="text-xl font-bold w-full text-center">
        {data[0].Inversionista}
      </p>
      <h3 className="mt-4 text-lg flex">
        Capital total invertido:
        <p className="ml-2 text-lg font-semibold">
          USD ${data[0]["Total Inversiones"].toLocaleString("es-ES")}
        </p>
      </h3>
      <h3 className="mt-2 text-lg flex">
        Inversiones vigentes:{" "}
        <p className="ml-2 text-lg font-semibold">{data[0].Inversiones}</p>
      </h3>
      {/* Barra de inversión combinada */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-8 relative">
        {inversiones.folsom > 0 && (
          <div
            className={`bg-[#3d5890] h-8 ${
              inversiones.thirtiethStreet > 0
                ? "rounded-l-full"
                : "rounded-full"
            } absolute flex items-center justify-center text-[10px] text-white font-semibold`}
            style={{ width: `${porcentajeFolsom}%` }}
          >
            Folsom: ${inversiones.folsom.toLocaleString()} (
            {porcentajeFolsom.toFixed(2)}%)
          </div>
        )}
        {inversiones.thirtiethStreet > 0 && (
          <div
            className={`bg-[#43903d] h-8 ${
              inversiones.folsom > 0 ? "rounded-r-full" : "rounded-full"
            } absolute right-0 flex items-center justify-center text-[10px] text-white font-semibold`}
            style={{ width: `${porcentajeThirtiethStreet}%` }}
          >
            30th Street: ${inversiones.thirtiethStreet.toLocaleString()} (
            {porcentajeThirtiethStreet.toFixed(2)}%)
          </div>
        )}
      </div>
      {mostrarDonutChart && (
        <DonutChart
          data={inversiones2}
          variant="pie"
          className=" mt-4"
          colors={[
            "blue-900",
            "green-700",
            "blue-700",
            "blue-600",
            "blue-500",
            "blue-400",
          ]}
        />
      )}
    </div>
  );
}
