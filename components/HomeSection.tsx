import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section className="w-full bg-[#F9F9F9] ">
      <main className="max-w-[80rem] mx-auto px-6 py-[100px]">
        <div className="flex items-center flex-col md:flex-row justify-between">
          <div className="flex flex-col items-start gap-[1.25rem]">
            <h1 className=" text-[2rem] md:text-[3rem] font-[700] text-[#000] leading-normal">
              NM Salesforce Developer <b className="hidden md:block" /> <span className="text-[#00D1FF]">Bootcamp</span>{" "}
            </h1>
            <p className="text-[#646464] text-[1rem] md:text-[1.25rem] font-[400] leading-normal">
              Elevate your future with our educational resources and <b className="hidden md:block" /> support,
              making success a reality.
            </p>
            <Link
            href='#contactForm'
            >
            <Button className='bg-[#00D1FF] rounded-[3rem] text-[1rem] md:text-[1.25rem] text-[#FFF] md:px-[20px] md:py-[30px] px-[15px] py-[20px] ml-2'>
              Enroll Now
            </Button>
            </Link>
          </div>
          <div>
            <Image
            src='/hero.png' alt="hero" width={507} height={460} className=""/>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomeSection;
