import Link from "next/link";
import { SubmitButton } from "../login/submit-button";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default function NewPassword({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  const code = searchParams.code;
  console.log(code);
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (password.length < 6) {
      return redirect(
        "/new-password?message=La contraseña debe tener al menos 6 caracteres"
      );
    }
    const supabase = createClient();
    const { error: dfs } = await supabase.auth.exchangeCodeForSession(
      searchParams.code
    );

    console.log("dfs", dfs);

    const { data: updateData, error: updateError } =
      await supabase.auth.updateUser({ password: password });

    console.log("data", updateData);
    console.log("error", updateError);

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
    <main className="h-screen flex flex-col items-center justify-center">
      <Image
        src="/LogoCapitalStorage_Fondo Azul (1).png"
        width={300}
        height={500}
        alt=""
        className="mb-4"
      />
      <div className="flex flex-col w-full p-12 sm:max-w-md justify-center gap-2 bg-white shadow-lg rounded-lg">
        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          <h2 className="text-[16px] text-gray-600  text-center mb-4">
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
            Nueva Contraseña
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            minLength={6}
            required
          />

          <SubmitButton
            formAction={signIn}
            className="bg-[#415792] rounded-md px-4 py-2 text-foreground mb-2 text-white"
            pendingText="Recuperando..."
          >
            Recuperar
          </SubmitButton>

          <Link
            href={"/login"}
            className="text-blue-600 hover:text-blue-800 w-full max-w-md text-center text-sm"
          >
            Iniciar sesión
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
    </main>
  );
}
