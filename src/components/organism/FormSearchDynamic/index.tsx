import React from "react";
import { Input } from "@/components/ui/input";
import { BiSearchAlt } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LOCATION_OPTION } from "@/constans/clients";

interface FormSearchDynamicInterface {}

const FormSearchDynamic = (props: FormSearchDynamicInterface) => {
  return (
    <div className="mx-auto w-full">
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti
      esse optio obcaecati delectus maiores dolor assumenda temporibus explicabo
      nobis fugiat dolorum omnis aut sit blanditiis quod voluptatum, nemo totam.
      Vel sed tempore amet, adipisci facere eum laborum suscipit incidunt nam
      molestias quas itaque harum ex, alias perspiciatis dolorum doloremque
      explicabo perferendis accusantium officia minus. Tempora repellat
      blanditiis, odit veniam distinctio iste. Ad incidunt nobis, cupiditate in
      rem inventore necessitatibus veritatis quis doloribus quas quos
      repudiandae amet perspiciatis quo explicabo voluptate tempora nihil
      consequatur sunt? Dolorum distinctio non reiciendis natus facere quis,
      doloremque nesciunt quo atque ratione corporis iure fugiat. */}
      {/* <div className="text-center bg-background p-4 shadow-md flex flex-col gap-2 lg:gap-4 md:flex-row md:items-center justify-normal md:justify-center relative w-full lg:w-max z-10">
        <div className="flex gap-3 items-center">
          <BiSearchAlt className="w-6 h-6" />
          <Input
            className="lg:py-5 md:w-[270px] lg:max-w-[350px] border-none"
            placeholder="Job title or keyword"
          />
        </div>
        <div className="flex gap-3 items-center">
          <GrMapLocation className="w-6 h-6" />
          <Select>
            <SelectTrigger className="lg:py-5 md:w-[270px] lg:max-w-[350px] text-gray-500 border-none">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_OPTION.map((row, key) => {
                return (
                  <SelectItem key={key} value={row.id}>
                    {row.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-center">
          <Button className="lg:py-5 lg:px-10 rounded-none">Search</Button>
        </div>
      </div>
      <div>
        <div className="text-muted-foreground mt-3">
          Popular: UI Designer, UX Researcher, Android, IOS, Admin
        </div>
      </div> */}
    </div>
  );
};

export default FormSearchDynamic;
