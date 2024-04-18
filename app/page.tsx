import { createClient } from "@/lib/supabase/server";
import Card from "./components/Card";
import Info from "./components/Info";
import Mapa from "./components/Mapa";
import Navbar from "./components/Navbar";
import { redirect } from "next/navigation";

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
      <Navbar />
      <div className="px-2 md:px-36">
        <div className="mt-12 flex justify-center gap-x-12">
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
