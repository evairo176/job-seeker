import Image from "next/image";
import React from "react";
import pattern2 from "../../../../public/images/pattern2.png";
import hero from "../../../../public/images/hero.png";
import FormSearch from "../FormSearch";

type HeroProps = {};

const Hero = (props: HeroProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2">
        <div className="text-4xl text-center lg:text-left lg:text-7xl font-semibold text-slate-600 w-full lg:w-max relative">
          Discover <br /> more than <br />
          <span className="text-primary">5000+ Jobs</span>
        </div>
        <Image
          alt="pattern2"
          width={455}
          height={32}
          src={pattern2}
          className="mb-5"
        />
        <div className="text-muted-foreground text-base">
          Great platform for the job seeker than searching for <br />
          new career heights and passionate about startup.
        </div>
        <FormSearch />
      </div>
      <div className="block mt-2">
        <Image
          alt="hero"
          src={hero}
          width={501}
          height={71}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
