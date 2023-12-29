"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useModal } from "@/hooks/use-modal-store";
import Image from "next/image";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";

type Props = {};

const DetailJobPage = (props: Props) => {
  const { onOpen } = useModal();
  return (
    <>
      <div className="bg-slate-100 px-4 lg:px-32 pt-16 pb-14">
        <div className="flex flex-row flex-wrap gap-3 text-sm text-muted-foreground">
          <Link className="hover:underline hover:text-black" href={"/"}>
            Home
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href={"/find-companies"}
          >
            Companies
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href={"/detail/companies/1"}
          >
            Twitter
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href={"/detail/job/1"}
          >
            Social Media Assistant
          </Link>
        </div>
        <div className="bg-white mt-10 shadow p-5 w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <Image
              src="/images/company2.png"
              alt="/images/company2.png"
              width={88}
              height={88}
            />

            <div>
              <div className="text-2xl font-semibold">
                Social Media Assistant
              </div>
              <div className="text-muted-foreground">
                Agency . Paris, France . Full-Time
              </div>
            </div>
          </div>
          <Button
            onClick={() => onOpen("job")}
            size={"lg"}
            className="text-lg px-12 py-6"
          >
            Apply
          </Button>
        </div>
      </div>
      <div className="px-4 lg:px-32 pt-16 pb-14 flex flex-col-reverse md:flex-row items-start gap-10">
        <div className="w-full lg:w-3/4">
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Description</div>
            <div className="text-muted-foreground">
              <p className="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                accusamus consequuntur labore, iste quas velit hic unde ex eius
                iure maxime voluptatem eaque earum accusantium, cumque illo
                eligendi harum exercitationem sunt. Explicabo facilis placeat
                architecto error, quo mollitia atque dolore corporis sequi optio
                expedita amet cupiditate, fugit repellat voluptas perferendis?
                Tempore, velit! Totam officiis laudantium in quae maiores,
                corporis deserunt?
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Responsibilities</div>
            <div className="text-muted-foreground">
              <p className="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                accusamus consequuntur labore, iste quas velit hic unde ex eius
                iure maxime voluptatem eaque earum accusantium, cumque illo
                eligendi harum exercitationem sunt. Explicabo facilis placeat
                architecto error, quo mollitia atque dolore corporis sequi optio
                expedita amet cupiditate, fugit repellat voluptas perferendis?
                Tempore, velit! Totam officiis laudantium in quae maiores,
                corporis deserunt?
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Who You Are</div>
            <div className="text-muted-foreground">
              <p className="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                accusamus consequuntur labore, iste quas velit hic unde ex eius
                iure maxime voluptatem eaque earum accusantium, cumque illo
                eligendi harum exercitationem sunt. Explicabo facilis placeat
                architecto error, quo mollitia atque dolore corporis sequi optio
                expedita amet cupiditate, fugit repellat voluptas perferendis?
                Tempore, velit! Totam officiis laudantium in quae maiores,
                corporis deserunt?
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Nice-To-Haves</div>
            <div className="text-muted-foreground">
              <p className="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                accusamus consequuntur labore, iste quas velit hic unde ex eius
                iure maxime voluptatem eaque earum accusantium, cumque illo
                eligendi harum exercitationem sunt. Explicabo facilis placeat
                architecto error, quo mollitia atque dolore corporis sequi optio
                expedita amet cupiditate, fugit repellat voluptas perferendis?
                Tempore, velit! Totam officiis laudantium in quae maiores,
                corporis deserunt?
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4">
          <div>
            <div className="text-3xl font-semibold">About this role</div>
            <div className="mt-6 p-4 bg-slate-200">
              <div className="mb-2">
                <span className="font-semibold">5 applied</span>
                <span className="text-gray-600"> of 10 capacity</span>
              </div>
              <Progress value={50} />
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Apply before</div>
                <div className="font-semibold">30 December 2023</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job posted on</div>
                <div className="font-semibold">30 Juli 2023</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Type</div>
                <div className="font-semibold">Full-Time</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Salary</div>
                <div className="font-semibold">5.000.000 - 10.000.000</div>
              </div>
            </div>
          </div>

          <Separator className="my-10" />

          <div>
            <div className="text-3xl font-semibold">Category</div>
            <div className="my-2 flex flex-row flex-wrap gap-4">
              <Badge>Marketing</Badge>
            </div>
          </div>

          <Separator className="my-10" />

          <div>
            <div className="text-3xl font-semibold">Required Skills</div>
            <div className="my-2 flex flex-row flex-wrap gap-4">
              {[0, 1, 2, 3].map((row) => {
                return (
                  <Badge variant={"outline"} key={row}>
                    Marketing
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-32 pt-16 pb-14">
        <Separator className="mb-14" />
        <div className="mb-6">
          <div className="text-3xl font-semibold">Perks & Benefits</div>
          <div className="text-muted-foreground">
            This job comes with several perks and benefits
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[0, 1, 2].map((row) => {
            return (
              <div key={row}>
                <BiCategory className="w-12 h-12 text-primary" />
                <div className="font-semibold text-xl mt-6">Full healtcare</div>
                <div className="mt-3 text-sm text-muted-foreground text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  saepe facere nesciunt. Perferendis minima, laborum
                  perspiciatis culpa nemo ducimus quo at obcaecati eius quaerat
                  enim ea recusandae provident? Cumque, rerum.
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DetailJobPage;
