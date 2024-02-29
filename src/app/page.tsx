import Image from "next/image";
import { TraceBeam } from "@/components/TraceBeam";
import { BackBoxes } from "@/components/BackBoxes";
import { GlowStarCard } from "@/components/GlowStarCard"
import { MeteorCard } from "@/components/MeteorCard";
import { TextGenerate } from "@/components/TextGenerate";
export default function Home() {
  return (
    <div className="" >
      <GlowStarCard/>
      {/* <BackBoxes/> */}
      <TraceBeam/>
    </div>
  );
}
