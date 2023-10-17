import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

interface FeaturedJobItemProps {
  image: string;
  jobType: string;
  name: string;
  type: string;
  location: string;
  desc: string;
  categories: string[];
}

const FeaturedJobItem = ({
  image,
  jobType,
  name,
  type,
  location,
  desc,
  categories,
}: FeaturedJobItemProps) => {
  return (
    <div className="border border-boder p-6 cursor-pointer">
      <div className="flex flex-row items-start justify-between">
        <Image src={image} alt={name} width={48} height={48} />
        <span className="px-4 py-1 font-semibold text-primary border-primary">
          {jobType}
        </span>
      </div>
      <div className="my-4">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-muted-foreground mb-3">
          {type} . {location}
        </div>
        <div className="text-muted-foreground h-12 line-clamp-2 text-ellipsis">
          {desc}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((row, key) => {
          return <Badge key={key}>{row}</Badge>;
        })}
      </div>
    </div>
  );
};

export default FeaturedJobItem;
