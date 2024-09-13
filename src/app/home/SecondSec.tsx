import React from 'react'
import Minicard from './Minicard';
import Image from 'next/image';
import MealCard from './MealCard';
import { CiTimer } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GiCampCookingPot } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import { PiBicycle } from "react-icons/pi";




const SecondSec = () => {
  return (
    <div className='ml-[1rem] '>
        <div className='ml-[15rem] mt-[4rem] flex flex-row gap-[10rem]'>
            <Minicard icon={<IoLocation className="h-[3em] w-[3em]"/>} text="Osu Oxford Street 6th ST, Accra"/>
            <Minicard icon={<CiTimer className="h-[3em] w-[3em]"/>} text="Open 24/7"/>
            <Minicard icon={<BiSolidPhoneCall className="h-[3em] w-[3em]"/>} text="Open 24/7"/>

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

            <div className='w-[30%] mt-[2rem]'>
                <h1 className='text-[3rem] font-semibold'>About <span className='text-sky-500'>us</span></h1>
                <p className='text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <a href="#" className="inline-block mt-[3rem] px-4 py-[0.7rem] text-white text-[13px] bg-sky-500 rounded-[8px] hover:bg-slate-600">
                    See more 
                </a>
            </div>

        </div>
        <div className=' mt-[2rem]'>
            <h1 className=' text-center mt-[2rem] font-bold text-[2rem]'>How it <span className='text-sky-500'>works</span></h1>
            <div className='ml-[15rem] mt-[4rem] flex flex-row gap-[10rem]'>
            <MealCard heading='Pick out your meals' text='Scroll through your menu, and select your preferred meal.' image={<GiCampCookingPot/>}/>
            <MealCard heading='Place your order' text='Open the cart, Check your Order, then checkout.' image={<BsCart3/>}/>
            <MealCard heading='Get quick delivery.' text='Your meal would be delivered to your doorstep as soon as possible.' image={<PiBicycle/>}/>
            </div>
        </div>
        <div className='mt-[4rem] flex justify-center'>
            <Image src='/exploreimg.png' alt='' width={200} height={200}/>
        </div>

        <div className='mt-[4rem] flex justify-center'>
            <p className='text-bold text-[2rem] font-bold '>Explore <span className='border-b-[3.5px] border-current'>our</span> best <span className='text-sky-500'>Menu</span></p>
        </div >
        <div className='flex justify-center mx-[30%] my-[0.5%]'>
            <p className='text-center '>
                Indulge in our mouth-watering selection of best-selling dishes, crafted with the finest ingredients and utmost care. From savory appetizers to decadent desserts, our menu offers something for every palate.
            </p>
        </div>
        <div className="text-center">
            <a href="#" className="inline-block px-[6rem] py-[0.7rem] text-white text-[13px] bg-slate-500 rounded-[8px] hover:bg-slate-600">
                View Menu
            </a>
        </div>

        <div className="text-center my-[3rem]">
           <p className='font-bold text-[1.7rem]'>Customer <span className='text-sky-500'>Review</span></p>
        </div>
        <div className='border border-gray-300 p-4 mx-[35%] rounded-md'>
            <p className='text-center text-[0.8rem] mb-4 font-bold'>Have any feedback?<br/>Tell us.</p>
            <div className='relative flex justify-center'>
                <input
                    type="text"
                    placeholder="Yourname@gmail.com"
                    className="border border-gray-300 rounded-md px-6 py-2 w-80 pr-20"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 -translate-x-14 bg-gray-500 text-white text-[0.6rem] px-5 py-[0.5rem] rounded-md hover:bg-gray-600">Send</button>
            </div>
        </div>



    </div>
  )
}

export default SecondSec;
