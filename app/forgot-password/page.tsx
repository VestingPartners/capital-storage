import Link from "next/link";
import { SubmitButton } from "../login/submit-button";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const reset = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const supabase = createClient();

    let { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      console.log(error);
    }

    return redirect("/forgot-password?message=Se le ha enviado un correo");
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

          <SubmitButton
            formAction={reset}
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
