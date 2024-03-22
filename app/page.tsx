"use client";
import { CardComponent } from "@/components/card";
import Hero from "@/components/hero";
import { magicCard } from "@/lib/magicCards";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 mb-24">
      <Hero />
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
    </main>
  );
}
