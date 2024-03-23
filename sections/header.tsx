"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-red-500 justify-between flex items-center py-2 pr-8 pl-8 gap-4 h-14">
      <div className="flex jutify-start gap-4 items-center">
        <Link className="cursor-pointer" href="/">
          <Image
            src="/logo.png"
            width={90}
            height={90}
            className="mr-2 cursor-pointer hover:invert transition"
            alt={"Magic the Gathering Logo"}
          />
        </Link>
        <div className="cursor-default mr-2">|</div>
        <Link href="/">
          <Button
            variant="default"
            className="w-15 h-8 hover:bg-white hover:text-black"
          >
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button
            variant="default"
            className="w-15 h-8 hover:bg-white hover:text-black"
          >
            About
          </Button>
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center gap-6">
        <Link href="/login">
          <Button
            variant="default"
            className="w-15 h-8 bg-black text-white hover:bg-white hover:text-black"
          >
            Login
          </Button>
        </Link>
        <div className="cursor-default">|</div>
        <Link
          href="https://github.com/canhassancode/playground-next-js"
          target="_blank"
        >
          <Image
            src="/github-mark-white.svg"
            width={25}
            height={10}
            className={`cursor-pointer transition invert hover:invert-0`}
            alt={"Github Repository"}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
