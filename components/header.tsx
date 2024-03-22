"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const cardMap = [
  {
    card_name: "gandalf",
    type: "creature",
    description: "crazy ass powerful wizard",
    health: 5,
    attack: 7,
    rarity: "legendary",
  },
  {
    card_name: "sauron",
    type: "creature",
    description: "crazy ass powerful evil guy",
    health: 8,
    attack: 8,
    rarity: "legendary",
  },
];

const Header = (props: string[]) => {
  return (
    <header className="bg-red-500 justify-between flex items-center py-2 pr-8 pl-8 gap-4 h-14">
      <div className="flex jutify-start gap-4 items-center">
        <div
          onClick={() => {
            alert("test");
          }}
        >
          <Image
            src={logo}
            width={90}
            height={90}
            className="mr-8 cursor-pointer"
            alt={""}
          />
        </div>
        <Button
          variant="default"
          className="w-18 h-9 hover:bg-white hover:text-black"
        >
          Home
        </Button>
        <Button
          variant="default"
          className="w-18 h-9 hover:bg-white hover:text-black"
        >
          About
        </Button>
      </div>
      <NavigationMenu className="justify-content flex">
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
      </NavigationMenu>
    </header>
  );
};

export default Header;
