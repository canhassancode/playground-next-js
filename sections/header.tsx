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
            className="mr-8 cursor-pointer hover:invert transition"
            alt={""}
          />
        </Link>
        <Link href="/">
          <Button
            variant="default"
            className="w-18 h-9 hover:bg-white hover:text-black"
          >
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button
            variant="default"
            className="w-18 h-9 hover:bg-white hover:text-black"
          >
            About
          </Button>
        </Link>
      </div>
      <Link href="/login">
        <Button
          variant="default"
          className="w-18 h-9 bg-white text-black hover:bg-black hover:text-white"
        >
          Login
        </Button>
      </Link>
    </header>
  );
};

export default Header;
