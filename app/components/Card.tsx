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
    <div className="card w-[360px] rounded-md p-5  shadow-sm border border-black/5 bg-white">
      <div className="mx-auto max-w-2xl">
        <p className=" text-xl font-semibold w-full text-center">Dividendos</p>
        <Table>
          <TableHead>
            <TableRow className="">
              <TableHeaderCell>
                <p className=" text-black ">Fecha</p>
              </TableHeaderCell>
              <TableHeaderCell>
                <p className=" text-black">Monto</p>
              </TableHeaderCell>
              <TableHeaderCell>
                <p className=" text-black">Status</p>
              </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Ene 15</TableCell>
              <TableCell>$0</TableCell>
              <TableCell>Pagado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Feb 15</TableCell>
              <TableCell>$0</TableCell>
              <TableCell>Pagado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 15</TableCell>
              <TableCell>$0</TableCell>
              <TableCell>Pagado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>May 15</TableCell>
              <TableCell>$0</TableCell>
              <TableCell>Pagado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Abr 15</TableCell>
              <TableCell>$0</TableCell>
              <TableCell>Pagado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>May 15</TableCell>
              <TableCell>$0</TableCell>
              <TableCell>Pagado</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
