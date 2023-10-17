import Clients from "@/components/organism/Clients";
import Hero from "@/components/organism/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="px-4 lg:px-32 mb-10">
      <Hero />
      <Clients />
    </div>
  );
}
