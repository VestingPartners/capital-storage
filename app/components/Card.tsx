import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

export default function Card() {
  return (
    <div className="card w-[500px] border border-white/25 rounded-md p-5">
      <div className="mx-auto max-w-2xl">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Fecha</TableHeaderCell>
              <TableHeaderCell>Monto</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Ene 15</TableCell>
              <TableCell>$1200</TableCell>
              <TableCell>Pagado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Feb 15</TableCell>
              <TableCell>$1200</TableCell>
              <TableCell>Pendiente</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 15</TableCell>
              <TableCell>$1200</TableCell>
              <TableCell>Pagado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>May 15</TableCell>
              <TableCell>$1200</TableCell>
              <TableCell>Pagado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Abr 15</TableCell>
              <TableCell>$1200</TableCell>
              <TableCell>Pendiente</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>May 15</TableCell>
              <TableCell>$1200</TableCell>
              <TableCell>Pendiente</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
