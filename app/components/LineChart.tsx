"use client";

import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Ene 24",
    "Evolución del patrimonio": 2338,
  },
  {
    date: "Feb 24",
    "Evolución del patrimonio": 2103,
  },
  {
    date: "Mar 24",
    "Evolución del patrimonio": 2194,
  },
  {
    date: "Abr 24",
    "Evolución del patrimonio": 2108,
  },
  {
    date: "May 24",
    "Evolución del patrimonio": 1812,
  },
  {
    date: "Jun 24",
    "Evolución del patrimonio": 1726,
  },
  {
    date: "Jul 24",
    "Evolución del patrimonio": 1982,
  },
  {
    date: "Ago 24",
    "Evolución del patrimonio": 2012,
  },
  {
    date: "Sep 24",
    "Evolución del patrimonio": 2342,
  },
  {
    date: "Oct 24",
    "Evolución del patrimonio": 2473,
  },
  {
    date: "Nov 24",
    "Evolución del patrimonio": 3848,
  },
  {
    date: "Dec 24",
    "Evolución del patrimonio": 3736,
  },
];

const valueFormatter = function (number: any) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export function LineChart() {
  return (
    <div className="card w-full rounded-md p-5 bg-white shadow-sm border border-black/5">
      <div className="flex gap-6">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-tremor-default text-tremor-content">
            Capital Total
          </h3>
          <p className="text-tremor-metric text-tremor-content-strong  font-semibold">
            $60.000
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-tremor-default text-tremor-content">
            Inversiones
          </h1>
          <p className="text-tremor-metric text-tremor-content-strong  font-semibold">
            2
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-tremor-default text-tremor-content">
            Invertido
          </h1>
          <p className="text-tremor-metric text-tremor-content-strong  font-semibold">
            $50.000
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-max">
          <h1 className=" text-tremor-default text-tremor-content">
            Sin invertir
          </h1>
          <p className="text-tremor-metric text-tremor-content-strong  font-semibold">
            $10.000
          </p>
        </div>
      </div>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={["Evolución del patrimonio"]}
        colors={["blue", "cyan"]}
        valueFormatter={valueFormatter}
      />

      <div className="mt-6 w-min "></div>
    </div>
  );
}
