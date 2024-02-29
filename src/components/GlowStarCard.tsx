"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../components/ui/glowing-stars";
import { TextGenerate } from "@/components/TextGenerate";

export function GlowStarCard() {
  return (
    <div className="flex py-10 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
      <div className="opacity-70">
        <TextGenerate/>
        <div className="">
          <GlowingStarsDescription className="opacity-80">
           Thanks for checking out my travel blog, these are
           some of the places where I've traveled, and some details about each
           destination. Hopefully I can
           be fortunate enough to travel more often and add to the list
          </GlowingStarsDescription>
          
        </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
