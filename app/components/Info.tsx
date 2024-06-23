//@ts-nocheck

import { DonutChart } from "@tremor/react";

export default function Informe({ folsomData, streetData }: any) {
  const totalInvertidoFolsom =
    folsomData?.["Aportes Inversiones Folsom"]?.reduce(
      (acc, aporte) => acc + aporte.Capital_Call_usd,
      0
    ) || 0;

  const totalInvertidoStreet =
    streetData?.["Aportes Inversionistas 30 Street"]?.reduce(
      (acc, aporte) => acc + aporte.Capital_Call_usd,
      0
    ) || 0;

  const inversiones2 = [
    {
      name: "Folsom",
      value: totalInvertidoFolsom,
      color: "#3d5890", // Color para Folsom
    },
    {
      name: "30 th Street",
      value: totalInvertidoStreet,
      color: "#43903d", // Color para 30 th Street
    },
  ].filter((inv) => inv.value > 0);

  const inversiones = {
    folsom: totalInvertidoFolsom,
    thirtiethStreet: totalInvertidoStreet,
  };

  const totalInversiones = Object.values(inversiones).reduce(
    (acc, val) => acc + val,
    0
  );

  const porcentajeFolsom = (inversiones.folsom / totalInversiones) * 100;
  const porcentajeThirtiethStreet =
    (inversiones.thirtiethStreet / totalInversiones) * 100;

  const mostrarDonutChart = inversiones2.length > 1;

  return (
    <div className="card w-full h-fit rounded-md p-5 shadow-sm border border-black/5 bg-white flex flex-col">
      <p className="text-xl font-bold w-full text-center">
        {folsomData?.Inversionista || streetData?.Inversionista}
      </p>
      <h3 className="mt-4 text-lg flex">
        Capital total invertido:
        <p className="ml-2 text-lg font-semibold">
          USD ${totalInversiones.toLocaleString("es-ES")}
        </p>
      </h3>
      <h3 className="mt-2 text-lg flex">
        Inversiones vigentes:{" "}
        <p className="ml-2 text-lg font-semibold">
          {
            Object.keys(inversiones).filter((inv) => inversiones[inv] > 0)
              .length
          }
        </p>
      </h3>
      <div className="mt-4 w-full bg-gray-200 rounded-full h-8 relative">
        <div
          className="h-8 absolute flex items-center justify-center text-[10px] text-white font-semibold"
          style={{ width: "100%" }}
        >
          {inversiones.folsom > 0 && (
            <div
              className={`bg-[#3d5890] h-8 ${
                inversiones.thirtiethStreet === 0
                  ? "rounded-full"
                  : "rounded-l-full"
              } flex items-center justify-center px-2 tooltip`}
              style={{ width: `${porcentajeFolsom}%` }}
              title={`Folsom: $${inversiones.folsom.toLocaleString()} (${porcentajeFolsom.toFixed(
                2
              )}%)`}
            >
              <span className="tooltip-text">Folsom</span>
            </div>
          )}
          {inversiones.thirtiethStreet > 0 && (
            <div
              className={`bg-[#43903d] h-8 ${
                inversiones.folsom === 0 ? "rounded-full" : "rounded-r-full"
              } flex items-center justify-center px-2 tooltip`}
              style={{ width: `${porcentajeThirtiethStreet}%` }}
              title={`30th Street: $${inversiones.thirtiethStreet.toLocaleString()} (${porcentajeThirtiethStreet.toFixed(
                2
              )}%)`}
            >
              <span className="tooltip-text">30th Street</span>
            </div>
          )}
        </div>
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
