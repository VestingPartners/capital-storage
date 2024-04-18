"use client";

import { createClient } from "@/lib/supabase/client";
import { RiLogoutBoxLine } from "@remixicon/react";
import { Button } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  console.log("params", searchParams.get("inversionista"));
  const logout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    router.refresh();
  };

  return (
    <div className="w-full h-14  border-b border-white/15 shadow-sm  flex items-center bg-white">
      <div className="md:px-36 mx-auto flex items-center w-full justify-between">
        <div>
          <Image
            src="/LogoCapitalStorage_Fondo Azul.png"
            width={80}
            height={80}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center gap-6">
          {searchParams.get("inversionista") ? (
            <Link href={`/?inversionista=${searchParams.get("inversionista")}`}>
              Inversiones
            </Link>
          ) : (
            <Link href="/">Inversiones</Link>
          )}
          {searchParams.get("inversionista") ? (
            <Link
              href={`/documentos?inversionista=${searchParams.get(
                "inversionista"
              )}`}
            >
              Documentos
            </Link>
          ) : (
            <Link href="/documentos">Documentos</Link>
          )}
          <Button
            variant="secondary"
            icon={RiLogoutBoxLine}
            color="red"
            size="xs"
            onClick={() => logout()}
          >
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </div>
  );
}
