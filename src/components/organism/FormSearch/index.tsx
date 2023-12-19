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

type FormSearchProps = {};

const FormSearch = (props: FormSearchProps) => {
  return (
    <>
      <div className="mt-6 bg-background p-4 shadow-md flex flex-col gap-2 lg:gap-4 md:flex-row md:items-center justify-normal md:justify-center relative w-full lg:w-max z-10">
        <div className="flex gap-3 items-center">
          <BiSearchAlt className="w-6 h-6" />
          <Input
            className="lg:py-8 md:w-[270px] lg:max-w-[300px] border-none"
            placeholder="Job title or keyword"
          />
        </div>
        <div className="flex gap-3 items-center">
          <GrMapLocation className="w-6 h-6" />
          <Select>
            <SelectTrigger className="lg:py-8 md:w-[270px] lg:max-w-[300px] text-gray-500 border-none">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-center">
          <Button className="lg:py-8 lg:px-10 text-sm lg:text-lg">
            Search my job
          </Button>
        </div>
      </div>
      <div>
        <div className="text-muted-foreground mt-3">
          Popular: UI Designer, UX Researcher, Android, IOS, Admin
        </div>
      </div>
    </>
  );
};

export default FormSearch;
