import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Demo = () => {
  return (
    <section className="w-full bg-[#2A2A32] ">
      <main className="mx-auto max-w-[80rem] px-6 py-12 relative">
        <Image
          src="/arrow.png"
          alt="arrow"
          width={377}
          height={30}
          className="xl:block xl:absolute xl:top-[7rem] xl:left-[42rem] lg:hidden md:hidden hidden"
        />
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <div className="">
            <h1 className="text-[#FFF] text-[1.5rem] md:text-[2.4375rem] font-[700] leading-normal">
              Our next free demo class starts on
              <br className="hidden md:block" />{" "}
              <span className="text-[#06B6DD]">November 27th.</span>
            </h1>
            <p className="text-[#FFF] font-[400] text-[1rem] md:text-[1.25rem]">
              Please, enroll today, and get your free demo classes!
            </p>
          </div>
          <div className="mt-4 md:mt-0">
          <Link
            href='#contactForm'
            >
            <Button className="bg-[#00D1FF] rounded-[3rem] text-[1rem] md:text-[1.25rem] text-[#FFF] md:px-[20px] md:py-[30px] px-[15px] py-[20px] ml-2">
              Enroll Now
            </Button>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Demo;
