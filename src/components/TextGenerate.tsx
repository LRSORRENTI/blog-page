"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Luke Sorrenti's Blog
`;

export function TextGenerate() {
  return <TextGenerateEffect words={words} className="flex justify-center" />;
}
