/* eslint-disable */
"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Luke's Travel Blog
`;

export function TextGenerate() {
  return <TextGenerateEffect words={words} className="flex justify-center" />;
}
