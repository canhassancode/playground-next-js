// "use client";
import React, { useState } from "react";

export const BackgroundComponent = () => {
  const [backgroundImage, setBackgroundImage] = useState("bg-white");
  return (
    <div
      className={`absolute z-[-2] w-screen h-screen ${backgroundImage} transition`}
      onMouseOver={() => {
        if (backgroundImage == "bg-white") {
          setBackgroundImage("bg-black");
        } else {
          setBackgroundImage("bg-white");
        }
      }}
    >
      {" "}
    </div>
  );
};
