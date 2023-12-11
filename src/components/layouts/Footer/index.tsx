import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};
const aboutLink = ["Companies", "Pricing", "Term", "Advice", "Privacy Policy"];
const resourceLink = ["Help Docs", "Guide", "Updates", "Contact Us"];
const socialMediaTag = [
  "/images/soc-Facebook.png",
  "/images/soc-Instagram.png",
  "/images/soc-Twitter.png",
  "/images/soc-LinkedIn.png",
  "/images/soc-Dribble.png",
];

const Footer = (props: Props) => {
  return (
    <div className="bg-slate-900 text-foreground pt-16 pb-11 px-4 lg:px-32 ">
      <div className="flex flex-col md:flex-row items-start md:justify-between gap-4">
        <div>
          <Image src="/images/logo.png" alt="logo" width={160} height={36} />
          <div className="text-muted mt-8 text-justify">
            Great platform for the job seeker that passionate about startups.{" "}
            Find your dream job easier.
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            About
          </div>
          <div className="space-y-4">
            {aboutLink.map((row, key) => {
              return (
                <Link key={key} className="block text-muted" href="/">
                  {row}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Resource
          </div>
          <div className="space-y-4">
            {resourceLink.map((row, key) => {
              return (
                <Link key={key} className="block text-muted" href="/">
                  {row}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Get notification
          </div>
          <div className="text-muted">
            The lates jobs news, articles, send to <br /> your inbox weekly
          </div>
          <div className="mt-10 inline-flex items-center gap-3">
            <Input placeholder="Email address" className="py-5" />
            <Button className="py-5">Subscribe</Button>
          </div>
        </div>
      </div>
      <Separator className="mt-20 mb-11 bg-gray-300" />
      <div className="flex flex-row items-center justify-between">
        <div className="text-slate-600">
          {new Date().getFullYear()} @ JobHuntly. All rights reserved.
        </div>
        <div className="space-x-3">
          {socialMediaTag.map((row, key) => {
            return (
              <Image
                className="inline hover:scale-110 transition duration-300"
                src={row}
                alt={row}
                key={key}
                width={32}
                height={32}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
