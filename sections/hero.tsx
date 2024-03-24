import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="flex flex-col mt-24 space-y-4 text-center w-[65%] mb-4">
        <h1 className="text-[4rem] font-semibold subpixel-antialiased tracking-[-0.20rem] leading-none text-center hover:scale-[101%] mb-2 transition">
          Introducing the Inn. The home of all things{" "}
          <span className="font-bold text-red-500">Magic: the Gathering</span>
        </h1>
        <h2 className="font-light text-lg pl-24 pr-24 mr-20 ml-20">
          Scroll down or press the{" "}
          <span className="font-semibold">Get Started</span> button to begin
          searching through our collection of Magic the Gathering cards!
        </h2>
      </div>
    </div>
  );
};

export default Hero;
