import { createClient } from "@/lib/supabase/server";
import Card from "./components/Card";
import Info from "./components/Info";
import Mapa from "./components/Mapa";
import Navbar from "./components/Navbar";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: { inversionista: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  let data;
  let error;

  if (searchParams.inversionista) {
    ({ data, error } = await supabase
      .from("VistaAportantesFinal")
      .select("*")
      .eq("UserId", user.id)
      .eq("Inversionista", searchParams.inversionista));
  } else {
    ({ data, error } = await supabase
      .from("VistaAportantesFinal")
      .select("*")
      .eq("UserId", user.id));
  }

  if (error) {
    console.error("Error fetching data:", error);
    // Manejo de errores, puedes mostrar un mensaje de error o redirigir a una página de error
  }

  return (
    <>
      {searchParams.inversionista && (
        <Link
          href="/select"
          className="absolute left-4 sm:left-8 top-16 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{" "}
          Atras
        </Link>
      )}
      <Navbar />
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6 md:gap-12">
          <div className="flex flex-col gap-6">
            {data && <Info data={data} />}
            {data && <Card data={data} />}
          </div>
          {data && <Mapa data={data} />}
        </div>
      </div>
    </>
  );
}
