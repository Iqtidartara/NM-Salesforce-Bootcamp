import React from "react";
import Image from "next/image";

const Acadmey = () => {
  return (
    <section className="w-full bg-[#FFF] ">
      <main className="max-w-[80rem] mx-auto px-6 pt-16 pb-32">
        <div className="text-center">
          <h1 className=" text-[1.5rem] md:text-[3rem] font-[700] text-[#000] leading-normal">
            Benefits of NM{" "}
            <span className="text-[#00D1FF]">Salesforce Academy</span>
          </h1>
          <p className="text-[#646464] text-[1rem] md:text-[1.125rem] leading-normal font-[400]">
            Top-notch instructors have crafted the most inspiring learning
            journeys for you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[1.88rem] mt-[3.75rem]  ">
          <div className=" acadmeyshadow  flex flex-col items-start gap-[0.88rem] py-5 px-9" >
            <Image
              src="/hands.png"
              alt="reo"
              width={52}
              height={52}
              className="w-fit"
            />
            <h1 className="text-[1.25rem] leading-normal font-[600] text-[#000]">Hands-on Projects Guided by Experts </h1>
            <p className="text-[#646464] text-[1.125rem] font-[400] leading-normal">
              Our Salesforce Administration and Developer curricula are crafted
              by industry experts. Throughout your bootcamp experience, you'll
              engage in numerous projects, ensuring you're well-prepared for
              your initial role in Salesforce. These projects simulate
              real-world scenarios, and you'll collaborate in groups with our
              instructors ready to assist you in resolving any challenges
              instantly.
            </p>
          </div>

          <div className="acadmeyshadow  flex flex-col items-start gap-[0.88rem] py-5 px-9">
            <Image
              src="/Badge.png"
              alt="reo"
              width={52}
              height={52}
              className="w-fit"
            />
            <h1 className="text-[1.25rem] leading-normal font-[600] text-[#000]">Achieve Salesforce <br/>
Certification  </h1>
            <p className="text-[#646464] text-[1.125rem] font-[400] leading-normal">
              Our Salesforce Administration and Developer curricula are crafted
              by industry experts. Throughout your bootcamp experience, you'll
              engage in numerous projects, ensuring you're well-prepared for
              your initial role in Salesforce. These projects simulate
              real-world scenarios, and you'll collaborate in groups with our
              instructors ready to assist you in resolving any challenges
              instantly.
            </p>
          </div>

          <div className="acadmeyshadow  flex flex-col items-start gap-[0.88rem] py-5 px-9">
            <Image
              src="/email.png"
              alt="reo"
              width={52}
              height={52}
              className="w-fit"
            />
            <h1 className="text-[1.25rem] leading-normal font-[600] text-[#000]">Elevated Job Fulfillment  <br/>Discovering </h1>
            <p className="text-[#646464] text-[1.125rem] font-[400] leading-normal">
              Our Salesforce Administration and Developer curricula are crafted
              by industry experts. Throughout your bootcamp experience, you'll
              engage in numerous projects, ensuring you're well-prepared for
              your initial role in Salesforce. These projects simulate
              real-world scenarios, and you'll collaborate in groups with our
              instructors ready to assist you in resolving any challenges
              instantly.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Acadmey;