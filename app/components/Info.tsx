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
    <div className="card w-[360px] h-fit rounded-md p-5  shadow-sm border border-black/5 bg-white flex flex-col">
      <p className="text-xl font-bold w-full text-center">
        DV Inversiones y Asesorías S.A.
      </p>
      <h3 className="mt-4 text-lg flex">
        Capital Total: <p className="ml-2 text-lg font-semibold">$130.000</p>
      </h3>
      <h3 className="mt-2 text-lg flex">
        Inversiones: <p className="ml-2 text-lg font-semibold">2</p>
      </h3>
      {/* Barras de inversión */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${porcentajeFolsom}%` }}
        ></div>
      </div>
      <p className="mt-1 text-sm text-gray-500">
        Folsom North Limited: $80.000 ({porcentajeFolsom.toFixed(2)}%)
      </p>
      <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-green-600 h-2.5 rounded-full"
          style={{ width: `${porcentajeRedRocks}%` }}
        ></div>
      </div>
      <p className="mt-1 text-sm text-gray-500">
        Red Rocks Limited: $50.000 ({porcentajeRedRocks.toFixed(2)}%)
      </p>
    </div>
  );
}
