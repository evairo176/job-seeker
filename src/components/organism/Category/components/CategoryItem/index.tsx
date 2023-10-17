import React from "react";
import { MdOutlineCategory } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

type CategoryItemProps = {
  detail: {
    name: string;
    totalJobs: number;
  };
};

const CategoryItem = ({ detail }: CategoryItemProps) => {
  return (
    <div className="group border border-border p-8 cursor-pointer hover:border-primary hover:bg-primary hover:text-white transition-all duration-300">
      <MdOutlineCategory className="w-12 h-12 text-primary group-hover:text-white" />
      <div className="mt-7">
        <div className="text-2xl font-semibold">{detail?.name}</div>
        <div className="text-muted-foreground inline-flex items-center gap-1 mt-1 group-hover:text-white transition-all duration-300">
          <span>{detail?.totalJobs} Jobs available</span>
          <AiOutlineArrowRight className="group-hover:text-white transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
