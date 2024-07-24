import React from 'react'
import Minicard from './Minicard';
import Image from 'next/image';
import { CiTimer } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";

const SecondSec = () => {
  return (
    <div className='ml-[1rem] '>
        <div className='ml-[15rem] mt-[4rem] flex flex-row gap-[10rem]'>
            <Minicard icon={<IoLocation className="h-[3em] w-[3em]"/>} text="Osu Oxford Street 6th ST, Accra"/>
            <Minicard icon={<CiTimer className="h-[3em] w-[3em]"/>} text="Open 24/7"/>
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-col gap-[0.5rem] mt-[1rem] w-[70%]'>
                <div className=''>
                    <Image src="/secondsecImg1.png" alt="breakfast to breakfast image" width={300} height={200}/>
                </div>
                <div className='ml-[10rem]'>
                    <Image src="/secondsecImg2.png" alt="inner picture" width={300} height={200}/>
                </div>
            </div>

            <div className='w-[30%]'>
                <h1 className='text-[3rem] font-semibold'>About <span className='text-sky-500'>us</span></h1>
                <p className='text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <a href="#" className="inline-block mt-[3rem] px-4 py-[0.7rem] text-white text-[13px] bg-sky-500 rounded-[8px] hover:bg-slate-600">
                    See more
                </a>
            </div>
        </div>
    </div>
  )
}

export default SecondSec
