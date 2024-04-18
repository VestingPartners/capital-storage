import { createClient } from "@/lib/supabase/server";
import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SelectPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data } = await supabase
    .from("VistaAportantesFinal")
    .select("*")
    .eq("UserId", user?.id);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">
          Seleccione a un Inversionista
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((item) => (
            <Link
              key={item.Inversionista}
              className="bg-white rounded-lg shadow-md p-6"
              href={`/?inversionista=${item.Inversionista}`}
            >
              <h2 className="text-xl font-bold mb-2">{item.Inversionista}</h2>
              <p className="text-gray-600 mb-4">
                Total Inversiones: ${item["Total Inversiones"]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
