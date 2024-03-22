import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col mt-24 space-y-2 text-center">
      <h1 className="text-4xl">
        Introducing the <span className="font-bold">Inn</span>
      </h1>
      <h2 className="font-light text-sm">
        The home of all things{" "}
        <span className="font-semibold">Magic: the Gathering</span>
      </h2>
    </div>
  );
};

export default Hero;
