import React from "react";
import { Meteors } from "../components/ui/meteors";

export function MeteorCard() {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-700 to-indigo-300 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-slate-900 border border-indigo-900  px-4 py-8 h-full overflow-hidden rounded-lg flex flex-col justify-end items-start">
          {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div> */}

          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-4 relative z-50 mx-auto text-center">
            Luke's Travels
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
          I'm thrilled to share my journey through the lens of my travel blog. Every step, from bustling cities to serene landscapes, is a story waiting to unfold. Join me as I explore the world's wonders, one adventure at a time. Let's embark on this journey together and discover the beauty that lies in every corner of our planet.
          </p>

          {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button> */}

          {/* Meaty part - Meteor effect */}
          <Meteors number={23} />
        </div>
      </div>
    </div>
  );
}
