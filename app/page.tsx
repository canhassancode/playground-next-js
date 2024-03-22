import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 mb-24">
      <Hero />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 content-center text-center p-4">
          <div className="w-24 h-24">01</div>
          <div className="w-24 h-24">01</div>
          <div className="w-24 h-24">01</div>
        </div>
      </div>
    </main>
  );
}
