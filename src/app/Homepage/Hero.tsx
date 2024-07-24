import React from 'react';
import Image from 'next/image';


const Hero = () => {
  return (
    <div className='relative h-[500px] mx-[1rem] border-b-[2px] border-black flex'>
      <div className='flex-1 pr-8'>
        <h1 className='text-[50px] font-black leading-tight'>Delicious food is waiting for you.</h1>
        <p className='text-slate-400 mt-4'>
          We, at Breakfast to Breakfast are committed to delivering fresh, high-quality food products <br/>to satisfy your cravings. Your trust and satisfaction
          are our top priorities. Enjoy every bite!
        </p>
        <p className='mt-[20px]'>
          <a href="#" className="inline-block px-4 py-[0.7rem] text-white text-[13px] bg-slate-500 rounded-[8px] hover:bg-slate-600">
            View Menu
          </a>
          <Image src="/preview 1.png" alt="hero image2" width={300} height={300}/>
        </p>
      </div>
      <div className='flex-1 relative'>
        <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
          <Image 
            src="/preview_3.png" 
            alt="Breakfast dishes" 
            width={400} 
            height={400} 
            objectFit="contain"
          />

          {/* <Image src="/preview_2" alt='little image1'/>
          <Image src="/preview_4" alt='little image1'/>
          <Image src="/preview_5" alt='little image1'/>
          <Image src="/preview_6" alt='little image1'/> */}

        </div>
      </div>
    </div>
  )
}

export default Hero;