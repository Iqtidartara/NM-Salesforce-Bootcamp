import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  
  return (
    <section className='w-full shadonav'>
      <main className='max-w-[80rem] mx-auto px-6 py-6'>
        <div className='flex flex-col md:flex-row items-center justify-between'>

          <div className='mb-4 md:mb-0'>
            <h1 className='text-[1rem] md:text-[1.25rem] lg:text-[1.25rem] font-[600] leading-normal text-[#000]'>
              NM Salesforce Bootcamp
            </h1>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-2'>
            <div className='flex items-center mb-2 md:mb-0'>
              <Image
                src='/phone.png'
                alt='phone'
                width={30}
                height={30}
                className=''
              />
              <span className='text-[1.25rem] md:text-lg font-[500] leading-normal text-[#000] text-center'>
                +1 813 726 7776
              </span>
            </div>

            <Link
            href='#contactForm'
            >
            
            <Button 
            
            className='bg-[#00D1FF] rounded-[3rem] text-[1rem] md:text-[1.25rem] text-[#FFF] md:px-[20px] md:py-[30px] px-[15px] py-[20px] ml-2'>
              Enroll Now
            </Button>
            </Link>
          </div>

        </div>
      </main>
    </section>
  );
};

export default Navbar;
