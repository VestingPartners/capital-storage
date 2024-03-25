"use client";

import { RiLogoutBoxLine, RiSearch2Line } from "@remixicon/react";
import { Button } from "@tremor/react";

export default function Navbar() {
  return (
    <div className="w-full h-14  border-b border-white/15 shadow-sm  flex items-center">
      <div className="md:px-16 mx-auto flex items-center w-full justify-between">
        <div>
          <h1>Capital Storage</h1>
        </div>
        <Button variant="secondary" icon={RiLogoutBoxLine} color="red">
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}
