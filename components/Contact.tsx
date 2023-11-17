"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

import toast from 'react-hot-toast';

interface FormState {
  name: string;
  email: string;
  phoneNumber: string;
}

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  const isFormValid = () => {
    return formData.name.trim() !== "" && formData.email.trim() !== "" && formData.phoneNumber.trim() !== "";
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error('Please fill out all fields.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Email sent successfully:", data.message);
        setFormData({ name: "", email: "", phoneNumber: "" });
        toast.success('Form Submitted.');
      } else {
        console.log("Error sending email:", data.message);
        toast.error('Error submitting form. Please try again later.');
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('Something went wrong. Check your details and try again.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section id="contactForm" className="w-full">
      <main className="max-w-[80rem] mx-auto px-6">
        <div className="justify-between">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow flex-col w-full mx-auto px-10 py-12 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-[#00D1FF] text-4xl font-bold leading-normal">
                  <span className="text-[#00D1FF]">Contact Us</span>
                </div>
                <div className="text-slate-400 text-[1rem] md:text-[1.25rem] leading-[160%] mt-6">
                  To contact us, fill out the form below and we&apos;ll get back to
                  you within 24 hours.
                </div>
                <form onSubmit={handleSubmit} className="mt-6" >
                  <label className="text-[#02044A] text-[1rem] leading-[150%] font-[400] tracking-[-0.02rem] whitespace-nowrap">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="border border-[color:var(--stroke-little,#C4CEE8)] bg-white w-full h-14  mb-[1.5rem] rounded-lg border-solid px-4"
                  />
                  <label className="text-indigo-950 text-base leading-6 tracking-tight mt-3.5 whitespace-nowrap">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="border border-[color:var(--stroke-little,#C4CEE8)] bg-white w-full h-14 mb-[1.5rem]  rounded-lg border-solid px-4"
                  />
                  <label className="text-indigo-950 text-base leading-6 tracking-tight mt-3.5 whitespace-nowrap">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleChange("phoneNumber", e.target.value)
                    }
                    className="border border-[color:var(--stroke-little,#C4CEE8)] bg-white w-full h-14 mb-[1.5rem]  rounded-lg border-solid px-4"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className='bg-[#00D1FF] rounded-[3rem] text-[1rem] md:text-[1.25rem] text-[#FFF] md:px-[30px] md:py-[30px] px-[15px] py-[20px] ml-2'
                  >
                    {
                        isLoading ? "Sending" : "Contact"
                    }
                  </Button>
                </form>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                <div className="bg-sky-100 z-[1] flex flex-col items-center px-5 py-7 rounded max-md:max-w-full">
                  <div className="justify-center items-stretch flex w-[265px] max-w-full gap-3">
                    <Image
                      alt="d"
                      src="/email.png"
                      className="aspect-[0.96] object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full"
                      width={27}
                      height={27}
                    />
                    <div className="text-black text-center text-xl font-medium leading-8 grow whitespace-nowrap">
                      nmsforce@gmail.com
                    </div>
                  </div>
                </div>
                <Image
                  width={461}
                  height={459}
                  src="/Rectangle 4560.png"
                  className="aspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full"
                  alt="ah"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
