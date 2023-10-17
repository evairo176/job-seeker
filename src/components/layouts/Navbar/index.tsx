"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo2 from "../../../../public/images/logo2.png";
import { Button } from "@/components/ui/button";
import MenuOpen from "@/components/elements/MenuOpen";
import MenuMobile from "@/components/elements/MenuMobile";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="px-4 lg:px-32 py-5 flex flex-row items-center lg:items-start justify-between relative">
        <div className="inline-flex items-center gap-12">
          <div>
            <Image
              alt="logo2"
              src={logo2}
              width={160}
              height={36}
              className="w-[150px] lg:w-[160px] h-[36px]"
            />
          </div>

          <div className="hidden lg:flex flex-row items-center justify-between">
            <span className="font-medium text-gray-400 mr-4 cursor-pointer">
              Find Jobs
            </span>
            <span className="font-medium text-gray-400 cursor-pointer">
              Browse Companies
            </span>
          </div>
        </div>
        <MenuOpen expandMenu={isOpen} setExpandMenu={(e) => setIsOpen(e)} />
        <div className="hidden md:inline-flex  items-center gap-4 h-8">
          <Button variant={"link"}>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
      <MenuMobile isOpen={isOpen} />
    </>
  );
};

export default Navbar;
