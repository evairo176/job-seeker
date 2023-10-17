import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import dashboard from "../../../../public/images/dashboard.png";

type BannerSignUpProps = {};

const BannerSignUp = (props: BannerSignUpProps) => {
  return (
    <div className="group transition-all duration-300 mt-20 md:mt-32 mb-8 bg-primary text-primary-foreground px-6 pt-6 lg:px-16 lg:pt-16 flex flex-col md:flex-row justify-between ">
      <div className="mb-10 md:mb-0">
        <div className="text-2xl md:text-5xl font-semibold text-center md:text-left">
          Start posting <br /> jobs today
        </div>
        <div className="my-3 md:my-6 text-center md:text-left">
          Start posting job for only $10
        </div>
        <div className="text-center md:text-left">
          <Button
            size={"lg"}
            variant={"secondary"}
            className="hover:text-primary text-primary "
          >
            Sign Up for free
          </Button>
        </div>
      </div>
      <div>
        <Image
          className="group-hover:-rotate-3 transition-all duration-300"
          src={dashboard}
          alt="dashboard"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default BannerSignUp;
