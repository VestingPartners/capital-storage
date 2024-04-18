import Link from "next/link";
import ClientButtons from "./client-buttons";

export default function Test({
  searchParams,
}: {
  searchParams: { fecha: number };
}) {
  const suma = (searchParams: { fecha: number }) => {
    const fecha = searchParams.fecha;
    return fecha + 1;
  };
  const resta = (searchParams: { fecha: number }) => {
    const fecha = searchParams.fecha;
    return fecha + 2;
  };
  return (
    <div className="flex gap-4 items-center ml-12 mt-12">
      <Link
        replace
        href={{
          pathname: "/test",
          query: { fecha: `=${suma(searchParams)}` },
        }}
        // href={`/test?fecha=${suma(searchParams)}`}
        className=" px-4 py-2 border rounded-sm"
      >
        +
      </Link>
      <Link
        replace
        href={`?fecha=${resta(searchParams)}`}
        className=" px-4 py-2 border rounded-sm"
      >
        -
      </Link>
      <div>{searchParams.fecha}</div>
      <ClientButtons />
    </div>
  );
}
