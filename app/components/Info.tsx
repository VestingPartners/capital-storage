import { DonutChart } from "@tremor/react";

const inversiones2 = [
  {
    name: "Folsom",
    value: 80000,
    color: "#3d5890", // Color para Folsom
  },
  {
    name: "30 th Street",
    value: 50000,
    color: "#43903d", // Color para 30 th Street
  },
];

export default function Informe() {
  // Suponiendo que estos son los montos de inversión
  const inversiones = {
    folsom: 80000,
    redRocks: 50000,
  };

  // Calculando el total para usar en el cálculo del porcentaje
  const totalInversiones = Object.values(inversiones).reduce(
    (acc, val) => acc + val,
    0
  );

  // Calculando los porcentajes de inversión
  const porcentajeFolsom = (inversiones.folsom / totalInversiones) * 100;
  const porcentajeRedRocks = (inversiones.redRocks / totalInversiones) * 100;

  return (
    <div className="card w-[480px] h-fit rounded-md p-5 shadow-sm border border-black/5 bg-white flex flex-col">
      <p className="text-xl font-bold w-full text-center">
        DV Inversiones y Asesorías S.A.
      </p>
      <h3 className="mt-4 text-lg flex">
        Capital total invertido:
        <p className="ml-2 text-lg font-semibold">USD $130.000</p>
      </h3>
      <h3 className="mt-2 text-lg flex">
        Inversiones vigentes: <p className="ml-2 text-lg font-semibold">2</p>
      </h3>
      {/* Barra de inversión combinada */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-8 relative">
        <div
          className="bg-[#3d5890] h-8 rounded-l-full absolute flex items-center justify-center text-[10px] text-white font-semibold"
          style={{ width: `${porcentajeFolsom}%` }}
        >
          Folsom: $80.000 ({porcentajeFolsom.toFixed(2)}%)
        </div>
        <div
          className="bg-[#43903d] h-8 rounded-r-full absolute right-0 flex items-center justify-center text-[10px] text-white font-semibold"
          style={{ width: `${porcentajeRedRocks}%` }}
        >
          30th Street: $50.000 ({porcentajeRedRocks.toFixed(2)}%)
        </div>
      </div>
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
        // valueFormatter={dataFormatter}
        // onValueChange={(v) => console.log(v)}
      />
    </div>
  );
}
