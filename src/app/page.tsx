import BannerSignUp from "@/components/organism/BannerSignUp";
import Category from "@/components/organism/Category";
import Clients from "@/components/organism/Clients";
import FeaturedJobs from "@/components/organism/FeaturedJobs";
import Hero from "@/components/organism/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="px-4 lg:px-32 mb-10">
      <Hero />
      <Clients />
      <Category />
      <BannerSignUp />
      <FeaturedJobs />
    </div>
  );
}
