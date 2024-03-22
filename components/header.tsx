"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
      {/* <NavigationMenu className="justify-content flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Rules</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] pr-[24rem]">
                <li>
                  <NavigationMenuLink asChild>
                    <div>
                      <h1>Hello</h1>
                      <p>this is some example text</p>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <div>
                      <h1>Hello</h1>
                      <p>this is some example text</p>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <div>
                      <h1>Hello</h1>
                      <p>this is some example text</p>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
    </header>
  );
};

export default Header;
