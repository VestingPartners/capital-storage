//@ts-nocheck

import { Button } from "@tremor/react";
import { createClient } from "@/lib/supabase/server";
import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";
import Link from "next/link";

function formatDocumentos(dataFolsom, dataStreet) {
  const documentosFormateados = [];

  const addDocumentos = (docs, inversion) => {
    if (docs) {
      docs.forEach((doc) => {
        documentosFormateados.push({
          nombre: doc.nombre,
          link: doc.link,
          tipo: doc.tipo,
          inversion: inversion,
        });
      });
    }
  };

  if (dataFolsom) {
    addDocumentos(dataFolsom["Update Mensual"], "Folsom");
    addDocumentos(dataFolsom["Term Sheet J"], "Folsom");
    addDocumentos(dataFolsom["Legal J"], "Folsom");
    addDocumentos(dataFolsom["Informe Trimestral J"], "Folsom");
    addDocumentos(dataFolsom["Documentos del Proyecto J"], "Folsom");
  }

  if (dataStreet) {
    addDocumentos(dataStreet["Update Mensual"], "30th Street");
    addDocumentos(dataStreet["Term Sheet J"], "30th Street");
    addDocumentos(dataStreet["Documentos Legal J"], "30th Street");
    addDocumentos(dataStreet["Informe Trimestral J"], "30th Street");
    addDocumentos(dataStreet["Documentos Proyectos J"], "30th Street");
  }

  console.log("documentosFormateados", documentosFormateados);
  return documentosFormateados;
}

export default async function DocumentosPage({
  searchParams,
}: {
  searchParams: { inversionista: string; tipo: string; fondo: string };
}) {
  const supabase = createClient();
  const fondo1 = searchParams.fondo;

  let fondo;
  if (fondo1 === undefined || fondo1 === "undefined") {
    fondo = "Todos";
  } else if (fondo1 === "Folsom") {
    fondo = "Folsom";
  } else if (fondo1 === "30th Street") {
    fondo = "30th Street";
  } else {
    fondo = "Todos";
  }

  let tipo;

  if (searchParams.tipo === undefined || searchParams.tipo === "undefined") {
    tipo = "Todos";
  } else {
    tipo = searchParams.tipo;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  let dataFolsom;
  let dataStreet;
  let error;

  if (
    searchParams.inversionista !== "undefined" &&
    searchParams.inversionista
  ) {
    ({ data: dataFolsom, error } = await supabase
      .from("Aportantes Folsom")
      .select("*")
      .eq("User Id", user?.id)
      .eq("Inversionista", searchParams.inversionista));

    ({ data: dataStreet, error } = await supabase
      .from("Aportantes 30 Street")
      .select("*")
      .eq("User Id", user?.id)
      .eq("Inversionista", searchParams.inversionista));
  } else {
    ({ data: dataFolsom, error } = await supabase
      .from("Aportantes Folsom")
      .select("*")
      .eq("User Id", user?.id)
      .single());

    ({ data: dataStreet, error } = await supabase
      .from("Aportantes 30 Street")
      .select("*")
      .eq("User Id", user?.id)
      .single());
  }

  console.log("folsom", dataFolsom);
  console.log("street", dataStreet);

  const documentosFormateados = formatDocumentos(dataFolsom, dataStreet);

  const tiposDeDocumento = Array.from(
    new Set(documentosFormateados.map((doc) => doc.tipo))
  );

  const filtrarDocumentos = (tipo: string, fondo: string) => {
    let documentosFiltrados = documentosFormateados;

    if (tipo !== "Todos") {
      documentosFiltrados = documentosFiltrados.filter(
        (doc) => doc.tipo === tipo
      );
    }

    if (fondo !== "Todos") {
      documentosFiltrados = documentosFiltrados.filter(
        (doc) => doc.inversion === fondo
      );
    }

    return documentosFiltrados;
  };

  const documentosFiltrados = filtrarDocumentos(tipo, fondo);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">
          Listado de Documentos
          <span className="ml-4">
            <Link
              href={`/documentos?inversionista=${searchParams.inversionista}&tipo=${searchParams.tipo}&fondo=Todos`}
            >
              <Button
                variant={fondo === "Todos" ? "primary" : "secondary"}
                size="xs"
                className="mr-2"
              >
                Todos
              </Button>
            </Link>
            <Link
              href={`/documentos?inversionista=${searchParams.inversionista}&tipo=${searchParams.tipo}&fondo=Folsom`}
            >
              <Button
                variant={fondo == "Folsom" ? "primary" : "secondary"}
                size="xs"
                className="mr-2"
              >
                Folsom
              </Button>
            </Link>
            <Link
              href={`/documentos?inversionista=${searchParams.inversionista}&tipo=${searchParams.tipo}&fondo=30th Street`}
            >
              <Button
                variant={fondo === "30th Street" ? "primary" : "secondary"}
                size="xs"
              >
                30th Street
              </Button>
            </Link>
          </span>
        </h2>
        <div className="mb-4">
          <span className="mr-2">Filtrar por tipo:</span>
          <Link
            href={`/documentos?inversionista=${searchParams.inversionista}&fondo=${searchParams.fondo}`}
          >
            <Button
              variant={
                searchParams.tipo === undefined ? "primary" : "secondary"
              }
              size="xs"
              className="mr-2"
            >
              Todos
            </Button>
          </Link>
          {tiposDeDocumento.map((tipo, index) => (
            <Link
              key={index}
              href={`/documentos?inversionista=${searchParams.inversionista}&tipo=${tipo}&fondo=${searchParams.fondo}`}
            >
              <Button
                key={tipo}
                variant={searchParams.tipo === tipo ? "primary" : "secondary"}
                size="xs"
                className="mr-2 mb-2"
              >
                {tipo}
              </Button>
            </Link>
          ))}
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {documentosFiltrados.map((documento, index) =>
              documento.link ? (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {documento.nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {documento.tipo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {documento.inversion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:text-blue-800">
                    <a
                      href={documento.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver documento
                    </a>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
