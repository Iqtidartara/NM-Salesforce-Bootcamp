import React from "react";
import { Separator } from "./ui/separator";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="w-full bg-[#121117]">
      <main className="max-w-[80rem] mx-auto px-6 py-10">
        <div className="flex flex-col gap-[1.5rem]">
          <h1 className="text-[1.92119rem] text-[#00D1FF] leading-[130%] tracking-[-0.03844rem] font-[700]">
            NM Salesforce Bootcamp
          </h1>
          <p className="text-[#818A9C] text-[1rem] font-[400] leading-[1.75rem] tracking-[-0.01125rem] foterp">
            Elevate your future with our educational resources and support,
            making success a reality
          </p>
          <Separator className="bg-[#F0F0F0] py-[0.0625rem] my-0 md:my-[3.6rem]" />

          <div className="flex md:items-center md:justify-between flex-col md:flex-row justify-center text-center">
            <p className="text-[#818A9C] text-[1rem] leading-[1.75rem] tracking-[-0.01125rem]">
              © 2023 Copyright Company.com
            </p>

            <div className="flex flex-row gap-[1rem] items-center justify-center mt-4 md:mt-0  ">
              <div className="text-[#00D1FF] bg-[#333] rounded-full p-2 cursor-pointer">
               <Link href='https://www.facebook.com/'><Facebook  className="w-[1.5rem]" /></Link> 
              </div>
              <div className="text-[#00D1FF] bg-[#333] rounded-full p-2 cursor-pointer">
                <Link href='https://www.instagram.com/'>
                <Instagram className="w-[1.5rem]" />
                </Link>
              </div>
              <div className="text-[#00D1FF] bg-[#333] rounded-full p-2 cursor-pointer">
               <Link href='https://twitter.com/'> <Twitter className="w-[1.5rem] " />
               </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
