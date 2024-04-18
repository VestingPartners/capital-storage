import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    const { data: data2 } = await supabase
      .from("VistaAportantesFinal")
      .select("*")
      .eq("UserId", data.user?.id);

    // @ts-ignore
    if (data2.length > 1) {
      return redirect("/select");
    }

    if (error) {
      return redirect("/login?message=Error al iniciar sesion");
    }

    return redirect("/");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Considera envolver la imagen en un div si necesitas más control */}
      <div className="w-full flex justify-center px-4">
        <Image
          src="/LogoCapitalStorage_Fondo Azul (1).png"
          width={300}
          height={300} // Asegúrate de que estos valores mantienen la relación de aspecto de la imagen original
          alt="Logo de Capital Storage"
          className="mx-auto my-4 max-w-xs sm:max-w-sm md:max-w-md" // Ajusta las clases de tamaño máximo para diferentes pantallas
        />
      </div>
      <div className="flex flex-col w-full px-4 py-8 sm:p-12 sm:max-w-md justify-center gap-2 bg-white shadow-lg rounded-lg">
        <form className="flex flex-col w-full justify-center gap-2">
          <h2 className="text-[16px] text-gray-600  text-center mb-4">
            Sign in with
            <span className="text-[#415792] font-semibold ml-1">
              Capstor Software
            </span>
          </h2>
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="correo@ejemplo.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Contraseña
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton
            formAction={signIn}
            className="bg-[#415792] rounded-md px-4 py-2 text-foreground mb-2 text-white"
            pendingText="Iniciando Sesion..."
          >
            Iniciar Sesion
          </SubmitButton>

          <Link
            href={"/forgot-password"}
            className="text-blue-600 hover:text-blue-800 w-full max-w-md text-center text-sm"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          {/* <SubmitButton
            formAction={signUp}
            className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton> */}
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
      <p className="mt-8 w-full max-w-md text-center text-sm text-gray-600">
        Bienvenido a Capstor Software, el portal de inversionistas de Capital
        Storage. Este sitio web es de uso exclusivo para los actuales y
        potenciales inversionistas. Para más información o para solicitar
        acceso, por favor contacte a{" "}
        <Link
          href="mailto:Capstor@capitalstorage.cl"
          className="text-blue-600 hover:text-blue-800"
        >
          capstor@capitalstorage.cl
        </Link>
      </p>
      <div className="mt-24"></div>
    </main>
  );
}
