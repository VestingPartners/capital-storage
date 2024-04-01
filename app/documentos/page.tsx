// @ts-nocheck

"use client";

import { useState } from "react";
import { Button, Dialog, DialogPanel, Select, SelectItem } from "@tremor/react";

export default function DocumentosPage() {
  const [documentoActivo, setDocumentoActivo] = useState(null);
  const [filtroActivo, setFiltroActivo] = useState("Todos"); // Ajuste para inicializar con "Todos"

  // Documentos de prueba
  const documentos = [
    {
      nombre:
        "DV INVERSIONES Y ASESORIAS- Correction (Subscription Agreement).doc.pdf",
      tipo: "Legal",
      inversion: "Folsom North Limited",
      fecha: "2022-01-01",
      link: "https://ttxvolraillgucvjjsen.supabase.co/storage/v1/object/public/pdfs/DV%20INVERSIONES%20Y%20ASESORIAS-%20Correction%20(Subscription%20Agreement).doc.pdf",
    },
    {
      nombre: "WrtnStmnt-2024-03-01-G1_v1 (informe).pdf",
      tipo: "Informe",
      inversion: "Red Rocks Limited",
      fecha: "2022-02-01",
      link: "https://ttxvolraillgucvjjsen.supabase.co/storage/v1/object/public/pdfs/Subscription%20Agreement%20-%20DV%20INVERSIONES%20Y%20ASESORIAS%20SA%20-%20Red%20Rocks%20LP.docx.pdf",
    },
    {
      nombre:
        "Subscription Agreement - DV INVERSIONES Y ASESORIAS SA - Red Rocks LP.docx.pdf",
      tipo: "Informe",
      inversion: "Red Rocks Limited",
      fecha: "2022-02-01",
      link: "https://ttxvolraillgucvjjsen.supabase.co/storage/v1/object/public/pdfs/Subscription%20Agreement%20-%20DV%20INVERSIONES%20Y%20ASESORIAS%20SA%20-%20Red%20Rocks%20LP.docx.pdf",
    },
  ];

  const tipos = ["Todos", ...new Set(documentos.map((doc) => doc.tipo))]; // Asegúrate de incluir "Todos"

  const handleSelectChange = (value) => {
    setFiltroActivo(value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Listado de Documentos</h2>

      {/* Selector de tipos de documentos ajustado para usar onValueChange */}
      <div className="mb-4 w-44">
        <Select
          value={filtroActivo}
          onValueChange={handleSelectChange} // Ajuste aquí
          placeholder="Seleccione un tipo"
          className="bg-white"
        >
          {tipos.map((tipo) => (
            <SelectItem key={tipo} value={tipo}>
              {tipo}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Tipo</th>
              <th className="px-4 py-2 text-left">Inversión</th>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2"></th>
              {/* Añadido encabezado para botones */}
            </tr>
          </thead>
          <tbody>
            {documentos
              .filter(
                (doc) => filtroActivo === "Todos" || doc.tipo === filtroActivo
              )
              .map((documento, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <td className="border px-4 py-2">{documento.nombre}</td>
                  <td className="border px-4 py-2">{documento.tipo}</td>
                  <td className="border px-4 py-2">{documento.inversion}</td>
                  <td className="border px-4 py-2">{documento.fecha}</td>
                  <td className="border px-4 py-2 flex justify-center">
                    <button
                      className="px-4 py-2 rounded hover:bg-blue-500 transition duration-150 ease-in-out underline"
                      onClick={() => setDocumentoActivo(documento)}
                    >
                      Ver Pdf
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {documentoActivo && (
        <Dialog
          open={!!documentoActivo}
          onClose={() => setDocumentoActivo(null)}
          static={true}
        >
          <DialogPanel>
            <iframe
              src={documentoActivo.link}
              width="100%"
              height="700px"
              style={{ border: "none" }}
              allowFullScreen
              className="rounded-md"
            ></iframe>
            <Button
              className="mt-8 w-full"
              onClick={() => setDocumentoActivo(null)}
            >
              Cerrar
            </Button>
          </DialogPanel>
        </Dialog>
      )}
    </div>
  );
}
