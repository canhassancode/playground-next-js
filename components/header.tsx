"use client";
import React from "react";
import { links } from "@/lib/links";
import Link from "next/link";

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
    <header className="bg-slate-100 justify-end flex items-center py-2">
      <NavigationMenu className="justify-content flex ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Rules</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] pr-[24rem]">
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
