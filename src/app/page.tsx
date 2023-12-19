import BannerSignUp from "@/components/organism/BannerSignUp";
import Category from "@/components/organism/Category";
import Clients from "@/components/organism/Clients";
import FeaturedJobs from "@/components/organism/FeaturedJobs";
import Hero from "@/components/organism/Hero";
import LatesJobs from "@/components/organism/LatesJobs";
import Image from "next/image";
import pattern from "../../public/images/pattern.png";

export default function Home() {
  return (
    <>
      <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
        <Image alt="pattern" src={pattern} fill />
      </div>
      <div className="px-4 lg:px-32 mb-10">
        <Hero />
        <Clients />
        <Category />
        <BannerSignUp />
        <FeaturedJobs />
        <LatesJobs />
      </div>
    </>
  );
}
