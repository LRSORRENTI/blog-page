import Image from "next/image";
import { TraceBeam } from "@/components/TraceBeam";
import { MeteorCard } from "@/components/MeteorCard";
export default function Home() {
  return (
    <div className="" >
      <div className="flex justify-center mb-8 mt-8">
      <MeteorCard/>
      </div>
      <TraceBeam/>
    </div>
  );
}
