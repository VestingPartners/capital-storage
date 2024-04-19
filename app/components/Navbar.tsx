"use client";
import { createClient } from "@/lib/supabase/client";
import { RiLogoutBoxLine, RiMenu3Line } from "@remixicon/react";
import { Button } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    router.refresh();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-6 2xl:px-48">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/LogoCapitalStorage_Fondo Azul.png"
                width={80}
                height={80}
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href={
                    searchParams.get("inversionista")
                      ? `/?inversionista=${searchParams.get("inversionista")}`
                      : "/"
                  }
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inversiones
                </Link>
                <Link
                  href={
                    searchParams.get("inversionista")
                      ? `/documentos?inversionista=${searchParams.get(
                          "inversionista"
                        )}`
                      : "/documentos"
                  }
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Documentos
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
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
          <div className="-mr-2 flex md:hidden">
            <Button
              variant="secondary"
              icon={RiMenu3Line}
              color="gray"
              size="xs"
              onClick={toggleMenu}
            >
              Menú
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href={
                searchParams.get("inversionista")
                  ? `/?inversionista=${searchParams.get("inversionista")}`
                  : "/"
              }
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Inversiones
            </Link>
            <Link
              href={
                searchParams.get("inversionista")
                  ? `/documentos?inversionista=${searchParams.get(
                      "inversionista"
                    )}`
                  : "/documentos"
              }
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Documentos
            </Link>
            <Button
              variant="secondary"
              icon={RiLogoutBoxLine}
              color="red"
              size="xs"
              onClick={() => logout()}
              className="w-full mt-2"
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
