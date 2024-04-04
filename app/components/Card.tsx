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
    <div className="card w-full rounded-md p-5  shadow-sm border border-black/5 bg-white">
      <div className="">
        <p className=" text-xl font-semibold w-full text-center">Aportes</p>
        <Table>
          <TableHead>
            <TableRow className="">
              <TableHeaderCell>
                <p className=" text-black ">Proyecto</p>
              </TableHeaderCell>
              <TableHeaderCell>
                <p className=" text-black ">Fecha</p>
              </TableHeaderCell>
              <TableHeaderCell>
                <p className=" text-black">Monto</p>
              </TableHeaderCell>
              <TableHeaderCell>
                <p className=" text-black">Dividendos</p>
              </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Folson</TableCell>
              <TableCell>05-12-2023</TableCell>
              <TableCell>80.000</TableCell>
              <TableCell className=" text-center">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>30 th Street</TableCell>
              <TableCell>28-02-2022</TableCell>
              <TableCell>50.000</TableCell>
              <TableCell className=" text-center">0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
