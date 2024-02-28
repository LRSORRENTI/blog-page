import Image from "next/image";
import { TraceBeam } from "@/components/TraceBeam";
import { BackBoxes } from "@/components/BackBoxes";
import { MeteorCard } from "@/components/MeteorCard";
import { TextGenerate } from "@/components/TextGenerate";
export default function Home() {
  return (
    <div className="" >
      <TextGenerate/>
      {/* <BackBoxes/> */}
      <TraceBeam/>
    </div>
  );
}
