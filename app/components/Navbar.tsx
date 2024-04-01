"use client";

import { RiLogoutBoxLine, RiSearch2Line } from "@remixicon/react";
import { Button } from "@tremor/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-14  border-b border-white/15 shadow-sm  flex items-center bg-white">
      <div className="md:px-36 mx-auto flex items-center w-full justify-between">
        <div>
          <h1 className=" font-bold text-xl ">Capital Storage</h1>
        </div>
        <div className="flex justify-center items-center gap-6">
          <Link href="/">Inversiones</Link>
          <Link href="/documentos">Documentos</Link>

          <Button
            variant="secondary"
            icon={RiLogoutBoxLine}
            color="red"
            size="xs"
          >
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </div>
  );
}
