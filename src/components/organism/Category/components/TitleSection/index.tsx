import React from "react";
import { BsArrowBarRight } from "react-icons/bs";

type TitleSectionProps = {
  word1: string;
  word2: string;
};

const TitleSection = ({ word1, word2 }: TitleSectionProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="text-2xl md:text-4xl font-semibold">
        {word1} <span className="text-primary">{word2}</span>
      </div>
      <div className="inline-flex gap-3 items-center text-primary font-semibold cursor-pointer">
        <span>Show all jobs</span>
        <BsArrowBarRight className="w-6 h-6" />
      </div>
    </div>
  );
};

export default TitleSection;
