import React from "react";
import { ClientsImage } from "@/constans/clients";
import { ClientTypes } from "@/types/clients";
import Image from "next/image";
type ClientsProps = {};

const Clients = (props: ClientsProps) => {
  return (
    <div className="relative z-10">
      <div className="text-lg text-muted-foreground">
        Companies we helped grow
      </div>
      <div className="mt-8 gap-4 flex flex-row items-center justify-between overflow-y-auto">
        {ClientsImage?.map((row: ClientTypes, key: number) => {
          return (
            <Image
              src={row?.url}
              key={key}
              alt={row.url}
              width={139}
              height={35}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
