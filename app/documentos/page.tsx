import { Button, Select, SelectItem } from "@tremor/react";
import { createClient } from "@/lib/supabase/server";
import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";
import Link from "next/link";

function formatDocumentos(data: any) {
  const documentosFormateados = [
    {
      nombre: "Correccion Subs Legal 30 Street",
      link: data[0]["Correccion Subs Legal 30 Street"],
      tipo: "Legal",
      inversion: "30th Street",
    },
    {
      nombre: "Doc Subs Legal 30 Street",
      link: data[0]["Doc Subs Legal 30 Street"],
      tipo: "Legal",
      inversion: "30th Street",
    },
    {
      nombre: "Documentos Proyecto 30 Street",
      link: data[0]["Documentos Proyecto 30 Street"],
      tipo: "Proyecto",
      inversion: "30th Street",
    },
    {
      nombre: "Doc Legal 2 Folsom",
      link: data[0]["Doc Legal 2 Folsom"],
      tipo: "Legal",
      inversion: "Folsom",
    },
    {
      nombre: "Doc Legal Folsom",
      link: data[0]["Doc Legal Folsom"],
      tipo: "Legal",
      inversion: "Folsom",
    },
    {
      nombre: "Term Sheet 30th Street",
      link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/30%20Street/Term%20Sheet/Copia%20de%20CS%20FUND%20IV%20-%2030%20_%20BLUFF%20REDEVELOPMENT%20%20V1.1.pptx.pdf?t=2024-04-19T15%3A41%3A58.046Z",
      tipo: "Term Sheet",
      inversion: "30th Street",
    },
    {
      nombre: "Term Sheet 1",
      link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Documento%20Proyecto/CAPITAL%20STORAGE%20FUND%20III%20-%20FOLSOM%20VF.pdf?t=2024-04-16T01%3A28%3A24.295Z",
      tipo: "Term Sheet",
      inversion: "Folsom",
    },
    {
      nombre: "Term Sheet 2",
      link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Documento%20Proyecto/CS%20Term%20Sheet%20Folsom%20House.pdf?t=2024-04-16T01%3A28%3A52.919Z",
      tipo: "Term Sheet",
      inversion: "Folsom",
    },
  ];

  if (data[0]["Documentos Proyecto Folsom"]) {
    documentosFormateados.push(
      {
        nombre: "Reporte 1",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Documento%20Proyecto/CAPITAL%20STORAGE%20FUND%20III%20-%20FOLSOM%20VF.pdf?t=2024-04-16T01%3A28%3A24.295Z",
        tipo: "Proyecto",
        inversion: "Folsom",
      },
      {
        nombre: "Reporte 2",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Documento%20Proyecto/CS%20Term%20Sheet%20Folsom%20House.pdf?t=2024-04-16T01%3A28%3A52.919Z",
        tipo: "Proyecto",
        inversion: "Folsom",
      }
    );
  }

  if (data[0]["Informes Mensuales 30 Street"]) {
    documentosFormateados.push(
      {
        nombre: "Update Mayo 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/30%20Street/Informes/Mensual/Update%20Mensual%20Mayo%202022.pdf?t=2024-04-15T16%3A42%3A26.922Z",
        tipo: "Informe",
        inversion: "30th Street",
      },
      {
        nombre: "Update Abril 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/30%20Street/Informes/Mensual/Update%20Mensual-%20Abril%202022.pdf?t=2024-04-15T16%3A46%3A08.176Z",
        tipo: "Informe",
        inversion: "30th Street",
      },
      {
        nombre: "Update Julio 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/30%20Street/Informes/Mensual/Update%20Mensual_%20Julio%202022.pdf?t=2024-04-15T16%3A46%3A47.667Z",
        tipo: "Informe",
        inversion: "30th Street",
      },
      {
        nombre: "Update Noviembre 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/30%20Street/Informes/Mensual/Update%20Mensual%20Noviembre%202022.pdf?t=2024-04-15T16%3A47%3A25.865Z",
        tipo: "Informe",
        inversion: "30th Street",
      },
      {
        nombre: "Update Enero 2024",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/30%20Street/Informes/Mensual/Update%20Mensual%20Noviembre%202022.pdf?t=2024-04-15T16%3A47%3A25.865Z",
        tipo: "Informe",
        inversion: "30th Street",
      },
      {
        nombre: "Update Marzo 2024",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/30%20Street/Informes/Mensual/Update%20mensual%20_%20Marzo%202024%20.pdf?t=2024-04-15T16%3A49%3A08.941Z",
        tipo: "Informe",
        inversion: "30th Street",
      },
      {
        nombre: "Informe trimestral Agosto 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/30%20Street/Informes/Trimestral/30th%20Street%20-%20Agosto%202022.pdf?t=2024-04-15T16%3A52%3A11.828Z",
        tipo: "Informe",
        inversion: "30th Street",
      },
      {
        nombre: "Informe trimestral Diciembre 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/30%20Street/Informes/Trimestral/30th%20Street%20-%20Diciembre%202022.pdf?t=2024-04-15T16%3A52%3A16.294Z",
        tipo: "Informe",
        inversion: "30th Street",
      }
    );
  }

  if (data[0]["Informes Mensuales Folsom"]) {
    documentosFormateados.push(
      {
        nombre: "Bienvenida",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Informes/Mensual/Bienvenida%20-%201844%20Folsom%20Street%20.pdf?t=2024-04-16T01%3A45%3A47.993Z",
        tipo: "Informe",
        inversion: "Folsom",
      },
      {
        nombre: "Hecho Relevante",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Informes/Mensual/HECHO%20RELEVANTE%20-%201844%20FOLSOM.pdf?t=2024-04-16T01%3A46%3A53.112Z",
        tipo: "Informe",
        inversion: "Folsom",
      },
      {
        nombre: "Update Mayo 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Informes/Mensual/Update%20Mensual%20Mayo%202022.pdf?t=2024-04-16T01%3A47%3A35.423Z",
        tipo: "Informe",
        inversion: "Folsom",
      },
      {
        nombre: "Update Noviembre 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/30%20Street/Informes/Mensual/Update%20Mensual%20Noviembre%202022.pdf?t=2024-04-15T16%3A47%3A25.865Z",
        tipo: "Informe",
        inversion: "Folsom",
      },
      {
        nombre: "Update Enero 2024",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Informes/Mensual/Update%20Mensual%20_%20Enero%202024.pdf?t=2024-04-16T01%3A48%3A12.989Z",
        tipo: "Informe",
        inversion: "Folsom",
      },
      {
        nombre: "Update Marzo 2024",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Informes/Mensual/Update%20Mensual%20_%20Marzo%202024.pdf?t=2024-04-16T01%3A49%3A55.822Z",
        tipo: "Informe",
        inversion: "Folsom",
      },
      {
        nombre: "Update Julio 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Informes/Mensual/Update%20Mensual%20_%20Julio%202022.pdf?t=2024-04-16T01%3A48%3A38.225Z",
        tipo: "Informe",
        inversion: "Folsom",
      }
    );
  }

  if (data[0]["Informes Trimestrales Folsom"]) {
    documentosFormateados.push(
      {
        nombre: "Informe trimestral Abril 2023",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Informes/Trimestral/1844%20FOLSOM%20REPORTE%20TRIMESTRAL%20ABRIL%202023%20.pdf?t=2024-04-16T01%3A56%3A49.089Z",
        tipo: "Informe",
        inversion: "Folsom",
      },
      {
        nombre: "Informe trimestral Agosto 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Informes/Trimestral/1844%20FOLSOM%20REPORTE%20TRIMESTRAL%20AGOSTO%202022%20.pdf?t=2024-04-16T01%3A57%3A17.568Z",
        tipo: "Informe",
        inversion: "Folsom",
      },
      {
        nombre: "Informe trimestral Diciembre 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Informes/Trimestral/1844%20FOLSOM%20REPORTE%20TRIMESTRAL%20DICIEMBRE%202022%20.pdf?t=2024-04-16T01%3A57%3A31.311Z",
        tipo: "Informe",
        inversion: "Folsom",
      },
      {
        nombre: "Informe trimestral Marzo 2022",
        link: "https://bykoetjilbiepykdxnir.supabase.co/storage/v1/object/public/Documentos/Folsom/Informes/Trimestral/1844%20FOLSOM%20REPORTE%20TRIMESTRAL%20MARZO%202022.pdf?t=2024-04-16T01%3A57%3A38.613Z",
        tipo: "Informe",
        inversion: "Folsom",
      }
    );
  }

  return documentosFormateados;
}
export default async function DocumentosPage({
  searchParams,
}: {
  searchParams: { inversionista: string; tipo: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  let data;
  let error;

  if (
    searchParams.inversionista !== "undefined" &&
    searchParams.inversionista
  ) {
    ({ data, error } = await supabase
      .from("VistaDocumentosFinal")
      .select("*")
      .eq("UserId", user?.id)
      .eq("Inversionista", searchParams.inversionista));
  } else {
    ({ data, error } = await supabase
      .from("VistaDocumentosFinal")
      .select("*")
      .eq("UserId", user?.id));
  }

  const documentosFormateados = data ? formatDocumentos(data) : [];

  const tiposDeDocumento = Array.from(
    new Set(documentosFormateados.map((doc) => doc.tipo))
  );

  const filtrarDocumentos = (tipo: string) => {
    if (tipo === "Todos") {
      return documentosFormateados;
    } else {
      return documentosFormateados.filter((doc) => doc.tipo === tipo);
    }
  };

  const documentosFiltrados = searchParams.tipo
    ? filtrarDocumentos(searchParams.tipo)
    : documentosFormateados;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Listado de Documentos</h2>
        <div className="mb-4">
          <span className="mr-2">Filtrar por tipo:</span>
          <Link
            href={`/documentos?inversionista=${searchParams.inversionista}`}
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
              href={`/documentos?inversionista=${searchParams.inversionista}&tipo=${tipo}`}
            >
              <Button
                key={tipo}
                variant={searchParams.tipo === tipo ? "primary" : "secondary"}
                size="xs"
                className="mr-2"
              >
                {tipo}
              </Button>
            </Link>
          ))}
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          {/* ... */}
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
