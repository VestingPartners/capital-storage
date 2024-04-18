"use client";

import { useRouter } from "next/navigation";

export default function ClientButtons() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.replace("/test?fecha=2022-01-01")}
        className=" px-4 py-2 border rounded-sm"
      >
        +
      </button>
      <button
        onClick={() => router.replace("/test?fecha=2024-01-01")}
        className=" px-4 py-2 border rounded-sm"
      >
        -
      </button>
    </div>
  );
}
