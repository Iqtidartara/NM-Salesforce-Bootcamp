import React from 'react';
import { Button } from "./ui/button";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full bg-[#FFF]">
      <main className="max-w-[80rem] mx-auto px-6 py-[100px]">
        <div className="flex items-center flex-col md:flex-row gap-[8.12rem] justify-between">
        <div>
            <Image
            src='/about.png' alt="/about.png" width={446} height={474} className=""/>
          </div>
          <div className="flex flex-col items-start gap-[1.25rem]">
            <h1 className="text-[2rem] md:text-[3rem] font-[700] text-[#000] leading-normal mt-4 md:mt-0">
            About   <span className="text-[#00D1FF]">Us</span>
            </h1>
            <p className="text-[#646464] text-[1rem] md:text-[1.25rem] font-[400] leading-normal">
            We run this bootcamp, combining our expertise to provide participants <b className="hidden md:block" /> with a well-rounded and enriching learning experience in Salesforce 
            <b className="hidden md:block" /> administration. Our trainers have around 8 years experience on different <b className="hidden md:block" /> cloud. Ie. Sales Cloud, Service Cloud, Marketing Cloud. Omnistudio, <b className="hidden md:block" /> Experience Clouds etc.
            </p>
            <Button
              className="bg-[#00D1FF] rounded-[3rem] text-[1.25rem] text-[#FFF] px-[20px] py-[30px]" >
              Enroll Now
            </Button>
          </div>
         
        </div>
      </main>
    </section>
  )
}

export default About