import { CardComponent } from "@/components/card";
import { magicCard } from "@/lib/magicCards";
import Link from "next/link";
import React from "react";

export const CardList = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 content-center text-center p-4">
        {magicCard.map((card) => (
          <Link
            key={card.toString()}
            className="w-[18rem] hover:invert transition cursor-pointer"
            href={card.url}
            passHref={true}
            target="_blank"
          >
            <CardComponent
              key={card.toString()}
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
