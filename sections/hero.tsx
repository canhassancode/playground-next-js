import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mt-24 space-y-4 text-center w-[65%]">
        {/* <h1 className="text-[2.5rem]">
          Introducing the <span className="font-bold">Inn</span>
        </h1> */}
        <h1 className="text-[4rem] font-semibold subpixel-antialiased tracking-[-0.20rem] leading-none text-center">
          Introducing the Inn. The home of all things Magic: the Gathering
        </h1>
        <h2 className="font-light text-lg">
          The home of all things{" "}
          <span className="font-semibold">Magic: the Gathering</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
