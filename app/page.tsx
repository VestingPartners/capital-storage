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
  let folsomData;
  let streetData;
  let error;

  if (
    searchParams.inversionista !== "undefined" &&
    searchParams.inversionista
  ) {
    ({ data, error } = await supabase
      .from("VistaAportantesFinal")
      .select("*")
      .eq("UserId", user.id)
      .eq("Inversionista", searchParams.inversionista));

    ({ data: folsomData, error } = await supabase
      .from("Aportantes Folsom")
      .select("*")
      .eq("User Id", user.id)
      .eq("Inversionista", searchParams.inversionista)
      .single());

    ({ data: streetData, error } = await supabase
      .from("Aportantes 30 Street")
      .select("*")
      .eq("User Id", user.id)
      .eq("Inversionista", searchParams.inversionista)
      .single());
  } else {
    ({ data, error } = await supabase
      .from("VistaAportantesFinal")
      .select("*")
      .eq("UserId", user.id));

    ({ data: folsomData, error } = await supabase
      .from("Aportantes Folsom")
      .select("*")
      .eq("User Id", user.id)
      .single());

    ({ data: streetData, error } = await supabase
      .from("Aportantes 30 Street")
      .select("*")
      .eq("User Id", user.id)
      .single());
  }

  if (error) {
    console.error("Error fetching data:", error);
    // Manejo de errores, puedes mostrar un mensaje de error o redirigir a una página de error
  }

  return (
    <>
      <div className="">
        {searchParams.inversionista &&
          searchParams.inversionista !== "undefined" && (
            <Link
              href="/select"
              className="hidden lg:absolute lg:left-4 sm:left-8 lg:top-[60px] lg:py-2 lg:px-4 lg:rounded-md lg:no-underline lg:text-foreground lg:bg-btn-background lg:hover:bg-btn-background-hover lg:flex lg:items-center lg:group lg:text-sm"
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

        <div className="flex flex-col p-2 gap-2 lg:p-6 2xl:px-48">
          <div className="lg:flex lg:gap-6">
            <div className="lg:w-4/10 lg:flex lg:flex-col lg:gap-6">
              {data && (
                <Info
                  data={data}
                  folsomData={folsomData}
                  streetData={streetData}
                />
              )}
              {data && (
                <Card
                  data={data}
                  folsomData={folsomData}
                  streetData={streetData}
                />
              )}
            </div>
            <div className="lg:w-full">{data && <Mapa data={data} />}</div>
          </div>
        </div>
      </div>
    </>
  );
}
