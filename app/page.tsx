import Card from "./components/Card";
import { LineChart } from "./components/LineChart";
import Mapa from "./components/Mapa";
import Pdf from "./components/Pdf";

export default function Home() {
  return (
    <div className="px-2 md:px-16">
      <div className=" mt-12 flex justify-between gap-x-12">
        <LineChart />
        <Card />
      </div>

      <div className=" mt-12">{/* <Pdf /> */}</div>

      <div className=" my-12">
        <Mapa />
      </div>
    </div>
  );
}
