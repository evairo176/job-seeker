"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { JobType } from "@/types/clients";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface JobCardInterface extends JobType {}

const JobCard = ({
  applicants,
  categories,
  desc,
  image,
  jobType,
  location,
  name,
  needs,
  type,
}: JobCardInterface) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/detail/job/1")}
      className="w-full border mb-5 p-6 border-border flex flex-col md:flex-row justify-between items-center"
    >
      <div className="flex flex-row item-start gap-6">
        <div>
          <Image src={image} alt={image} width={64} height={64} />
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground mb-2">
            {type} . {location}
          </div>
          <div className="lg:h-5 flex flex-wrap flex-row gap-2 items-center">
            <Badge variant={"secondary"}>{jobType}</Badge>
            <Separator orientation="vertical" />
            {categories?.map((row, key) => {
              return <Badge key={key}>{row}</Badge>;
            })}
          </div>
        </div>
      </div>
      <div className="w-full md:w-[200px]">
        <Button className="w-full mt-2">Apply</Button>
        <Progress value={(applicants / needs) * 100} className="mt-2 " />
        <div className="text-gray-500 text-sm mt-2 text-center">
          <span className="text-black font-semibold">{applicants} Applied</span>
          of {needs} capacity
        </div>
      </div>
    </div>
  );
};

export default JobCard;
