import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { JobType } from "@/types/clients";
import Image from "next/image";
import React from "react";

interface JobItemInterface extends JobType {}

const JobItem = ({
  categories,
  image,
  jobType,
  location,
  name,
  type,
}: JobItemInterface) => {
  return (
    <div className="border border-border p-4 flex flex-col md:flex-row gap-2 cursor-pointer">
      <Image
        src={image}
        alt={image}
        width={64}
        height={64}
        className="w-14 h-14"
      />
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm text-muted-foreground mb-2">
          {type} . {location}
        </div>
        <div className="flex flex-row flex-wrap gap-2 items-center">
          <Badge variant={"secondary"}>{jobType}</Badge>
          <Separator orientation="vertical" />
          {categories?.map((row, key) => {
            return (
              <Badge
                variant={"outline"}
                className="rounded border-primary bg-primary/5 text-primary"
                key={key}
              >
                {row}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobItem;
