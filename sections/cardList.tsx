import { CardComponent } from "@/components/cardComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { magicCard } from "@/lib/magicCards";
import Link from "next/link";
import React, { useState } from "react";

export const CardList = () => {
  const [query, setQuery] = useState("");
  return (
    <div
      className="flex flex-col items-center justify-center pt-14 mb-40"
      id="card-section"
    >
      <div className="grid grid-flow-col gap-4 sm:gap-20 mb-4 sm:mb-24">
        <Link href="#card-section">
          <Button
            className="sm:scale-125 border-2 bg-black text-white hover:bg-white hover:text-black"
            variant="default"
          >
            Get Started
          </Button>
        </Link>
        <Input
          className="bg-slate-50 sm:scale-125 transition"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        ></Input>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 content-center text-center p-4">
        {magicCard
          .filter((card) => {
            if (query === "") {
              return card;
            } else if (card.name.toLowerCase().includes(query.toLowerCase())) {
              return card;
            }
          })
          .map((card, index) => (
            <Link
              key={index}
              className="w-[18rem] hover:invert hover:text-white transition cursor-pointer"
              href={card.url}
              passHref={true}
              target="_blank"
            >
              <CardComponent
                key={card.name.toString()}
                name={card.name}
                type={card.type}
                description={card.description}
                cost={card.cost}
                power={card.power}
                health={card.health}
              ></CardComponent>
            </Link>
          ))}
      </div>
    </div>
  );
};
