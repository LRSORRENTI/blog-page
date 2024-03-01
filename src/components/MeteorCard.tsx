import React from "react";
import { Meteors } from "../components/ui/meteors";

export function MeteorCard() {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-700 to-indigo-300 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-slate-900 border border-indigo-900  px-4 py-8 h-full overflow-hidden rounded-lg flex flex-col justify-end items-start">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-4 relative z-50 mx-auto text-center">
            Luke&apos;s Travels
          </h1>
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
            I&apos;m thrilled to share my journey through the lens of my travel blog. Every step, from bustling cities to serene landscapes, is a story waiting to unfold. Join me as I explore the world&apos;s wonders, one adventure at a time. Let&apos;s embark on this journey together and discover the beauty that lies in every corner of our planet.
          </p>
          <Meteors number={23} />
        </div>
      </div>
    </div>
  );
}
