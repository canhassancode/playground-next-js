"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="justify-center md:justify-between flex items-center py-2 pr-8 pl-8 gap-4 h-20 mb-20 sm:mb-0">
      <div className="flex gap-4 items-center">
        <Link className="cursor-pointer" href="/">
          <Image
            src="/logo.png"
            width={90}
            height={90}
            className="invisible sm:visible mr-2 cursor-pointer hover:box-shadow-md hover:scale-110 transition"
            alt={"Magic the Gathering Logo"}
          />
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center gap-6">
        <Link href="/">
          <Button
            variant="default"
            className="w-15 h-8 border bg-black text-white hover:bg-white hover:text-black"
          >
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button
            variant="default"
            className="w-15 h-8 border bg-black text-white hover:bg-white hover:text-black"
          >
            About
          </Button>
        </Link>
        <Link href="/login">
          <Button
            variant="default"
            className="w-15 h-8 border bg-black text-white hover:bg-white hover:text-black"
          >
            Login
          </Button>
        </Link>
        <div className="cursor-default invisible sm:visible">|</div>
        <Link
          href="https://github.com/canhassancode/playground-next-js"
          target="_blank"
        >
          <Image
            src="/github-mark-white.svg"
            width={25}
            height={10}
            className={`cursor-pointer transition invert hover:box-shadow-md hover:scale-110 invisible sm:visible`}
            alt={"Github Repository"}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
