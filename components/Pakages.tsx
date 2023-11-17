
import Image from 'next/image'
import React from 'react'

const Pakages = () => {
  const pakages = [
    {
      imgUrl:'/teacher.png',
      title:'3 days free demo lessons'
    },
    {
      imgUrl:'/microphone.png',
      title:'Class Recording Access'
    },
    {
      imgUrl:'/book.png',
      title:'Assignment After Completion of Each Topic'
    },
    {
      imgUrl:'/music-play.png',
      title:'One to one Assistance'
    },
    {
      imgUrl:'/smsquestion.png',
      title:'Interview Preparations Question'
    },
    {
      imgUrl:'/microphone-2.png',
      title:'Mock Interviews (up to 3)'
    },
    {
      imgUrl:'/profiletick.png',
      title:'Real interview Support (up to 3)'
    },
    {
      imgUrl:'/bookmark.png',
      title:'Resume Building'
    },
    {
      imgUrl:'/award.jpg',
      title:'Certification Support'
    },
    {
      imgUrl:'/people.png',
      title:'Resume Building'
    },
    {
      imgUrl:'/note-2.png',
      title:'Certification Support'
    },
      
  ]
  return (
    <section className="w-full bg-[#F9F9F9] ">
    <main className="max-w-[80rem] mx-auto px-6 py-[100px]">
      <div className='text-center'>
      <h1 className=" text-[2rem] md:text-[3rem] font-[700] text-[#000] leading-normal">
      You&apos;ll get below things in the  <span className="text-[#00D1FF]">package:</span>
            </h1>
      </div>
    <div className='justify-center items-center content-center flex flex-wrap gap-10 mt-[3.5rem]'>
      {
        pakages.map((items ,index)=>(
          <div key={index} className='flex items-center gap-[1.25rem]  rounded-[16px]  bg-[#FFF] px-[1.375rem] py-[1.125rem] w-[333px] h-[5.875rem] '>
        <Image src={items.imgUrl}  alt='as' width={34} height={34}/>
        <h2 className='text-[18px] font-[500] leading-[160%]'>{items.title}</h2>
      </div>
        ))
      }
      {/*  */}
     
       
    </div>
   
   

    </main>
    </section>
  )
}

export default Pakages