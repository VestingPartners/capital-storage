// @ts-nocheck

"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

export default function Card({ data }) {
  const formatCurrency = (amount) => {
    // Si el monto es nulo o 0, no se muestra
    if (!amount) return "-";
    // Convertir a número y formatear a string con separadores de miles
    return `$${Number(amount).toLocaleString("es-ES")}`;
  };

  const formatDate = (dateString) => {
    // Verificar que la fecha no esté vacía
    if (!dateString) return "-";

    // Retornar la fecha como viene de la base de datos
    return dateString;
  };

  const aportes = [];

  if (data[0]["Total Invertido 30 Street"]) {
    aportes.push({
      proyecto: "30th Street",
      fecha: data[0]["Fecha Aporte 30 Street"],
      monto: data[0]["Monto Aporte 30 Street"],
      dividendos: "-", // Asumiendo que no hay datos de dividendos por ahora
    });
  }

  // Comprobamos si hay un aporte Folsom válido para incluir
  if (
    data[0]["Total Invertido Folsom"] &&
    data[0]["Monto 1 Aporte Folsom"] !== null
  ) {
    aportes.push({
      proyecto: "Folsom",
      fecha: data[0]["Fecha 1 Aporte Folsom"],
      monto: data[0]["Monto 1 Aporte Folsom"],
      dividendos: "-", // Asumiendo que no hay datos de dividendos por ahora
    });
  }

  if (data[0]["Monto 2 Aporte Folsom"]) {
    aportes.push({
      proyecto: "Folsom",
      fecha: data[0]["Fecha 2 Aporte Folsom"],
      monto: data[0]["Monto 2 Aporte Folsom"],
      dividendos: "-", // Asumiendo que no hay datos de dividendos por ahora
    });
  }

  return (
    <div className="card w-full text-xs rounded-md shadow-sm border border-black/5 bg-white">
      <p className="text-xl font-semibold w-full text-center relative">
        Aportes
        {data[0]["Monto 1 Aporte Folsom"] !== null && (
          <>
            <span
              className="text-xs text-gray-500 cursor-pointer"
              onMouseEnter={(e) =>
                e.currentTarget.setAttribute(
                  "data-title",
                  "Aportes realizados en folsom 2021, se encuentran valorizados a diciembre 2023."
                )
              }
              onMouseLeave={(e) =>
                e.currentTarget.removeAttribute("data-title")
              }
            >
              *
            </span>
            <style jsx>{`
              span {
                vertical-align: super;
              }
              span:hover::after {
                content: attr(data-title);
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                background-color: #000;
                color: #fff;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 1;
              }
            `}</style>
          </>
        )}
      </p>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Proyecto</TableHeaderCell>
            <TableHeaderCell>Fecha</TableHeaderCell>
            <TableHeaderCell>Monto</TableHeaderCell>
            <TableHeaderCell>Dividendos</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {aportes.map((aporte, index) => (
            <TableRow key={index}>
              <TableCell>{aporte.proyecto}</TableCell>
              <TableCell>{formatDate(aporte.fecha)}</TableCell>
              <TableCell>USD {formatCurrency(aporte.monto)}</TableCell>
              <TableCell className=" text-center">
                {aporte.dividendos}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
