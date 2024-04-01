import Card from "./components/Card";
import Info from "./components/Info";
import { LineChart } from "./components/LineChart";
import Mapa from "./components/Mapa";
import Pdf from "./components/Pdf";

export default function Home() {
  return (
    <div className="px-2 md:px-36">
      <div className=" mt-12 flex justify-center gap-x-12">
        {/* <LineChart /> */}
        <div className="flex flex-col gap-6">
          <Info />
          <Card />
        </div>
        <Mapa />
      </div>

      <div className=" mt-12">{/* <Pdf /> */}</div>

      <div className=" my-12"></div>
    </div>
  );
}
