import { Badge } from "@/components/ui/badge";
import { CompanyType } from "@/types/clients";
import Image from "next/image";
import React from "react";

interface CompanyCardInterface extends CompanyType {}

const CompanyCard = ({
  categories,
  image,
  name,
  description,
  totalJobs,
}: CompanyCardInterface) => {
  return (
    <div className="border border-border p-6">
      <div className="flex flex-row items-start justify-between">
        <Image src={image} alt={image} width={66} height={66} />
        <Badge>{totalJobs} Jobs</Badge>
      </div>
      <div className="my-4">
        <div className="text-lg font-semibold mb-2">{name}</div>
        <div className="line-clamp-3 text-sm text-muted-foreground">
          {description}
        </div>
      </div>
      <div className="space-x-2">
        <Badge variant={"outline"}>{categories}</Badge>
      </div>
    </div>
  );
};

export default CompanyCard;
