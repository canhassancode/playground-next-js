"use client";
import { CardList } from "@/sections/cardList";
import Hero from "@/sections/hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 mb-12">
      <Hero />
      <CardList />
    </main>
  );
}
