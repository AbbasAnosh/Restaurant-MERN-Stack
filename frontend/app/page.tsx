import AboutUs from "@/components/AboutUs";
import Description from "@/components/Description";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import SepecialMenu from "@/components/SepecialMenu";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slider />
      <AboutUs />
      <Featured />
      <Description />
      {/* <Offer /> */}
      <SepecialMenu />
    </main>
  );
}
