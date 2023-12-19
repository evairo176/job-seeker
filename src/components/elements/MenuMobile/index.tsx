import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

type MenuMobileProps = {
  isOpen: boolean;
};

const MenuMobile = ({ isOpen }: MenuMobileProps) => {
  const router = useRouter();
  return (
    <div
      className={`bg-background absolute right-0 w-[320px] h-full z-[1000] p-4 transition-all duration-300 ${
        isOpen ? "top-0" : "-top-[100%]"
      }`}
    >
      <div className="flex flex-col items-start justify-between mt-20 gap-4 ">
        <span
          onClick={() => router.push("/find-jobs")}
          className="w-full font-medium text-gray-400 mr-4 cursor-pointer"
        >
          Find Jobs
        </span>
        <span
          onClick={() => router.push("/find-companies")}
          className="w-full font-medium text-gray-400 cursor-pointer"
        >
          Browse Companies
        </span>
        <Button className="w-full" variant={"secondary"}>
          Login
        </Button>
        <Button className="w-full">Sign Up</Button>
      </div>
    </div>
  );
};

export default MenuMobile;
