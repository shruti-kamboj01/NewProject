import React from 'react'
import {MdOutlineHome} from "react-icons/md";
import {BiNotepad} from "react-icons/bi";
import {FaDropbox} from "react-icons/fa";
import {TbTruckDelivery} from "react-icons/tb";
import {HiSpeakerphone} from "react-icons/hi";
import {TbBrandGoogleAnalytics} from "react-icons/tb";
import {MdPayment} from "react-icons/md";
import {FaLocationArrow} from "react-icons/fa";
import {CiPercent} from "react-icons/ci";
import {MdOutlinePeople} from "react-icons/md";
import {IoIosColorPalette} from "react-icons/io";
import {BsFillLightningChargeFill} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import icon from './icon.jpg'


const SideBar = () => {



  return (
    <div className="flex relative h-[140vh] w-[220px] flex-col border-r-[1px]  bg-slate-900 py-10"> 
    <div>
    <div className='flex gap-x-2'>
        <img src={icon} alt='nishyan' className='ml-3 rounded-full'/>
        <div className='mr-10'>
        <h1 className='text-white text-base font-medium'>Nishyan</h1>
        <p className='text-white text-sm font-normal underline'>Visit store</p>
       </div>
       <div className='text-white '><IoIosArrowDown size={25}/></div>
       
    </div>
     
        <div className='text-white mt-10  text-2xl flex flex-col ml-6 gap-y-3'>
          <div className='flex gap-x-3 items-center'>
          <MdOutlineHome/>
            <p>Home</p>
          </div>

          <div className='flex gap-x-3 items-center'>
          <BiNotepad/>
            <p>Order</p>
          </div>
          <div className='flex gap-x-3 items-center'>
          <FaDropbox/>
            <p> Products</p>
          </div>
          <div className='flex gap-x-3 items-center'>
          <TbTruckDelivery/>
            <p> Delivery</p>
          </div>
           <div className='flex gap-x-3 items-center'>
           <HiSpeakerphone/>
            <p> Marketing</p>
          </div>
          <div className='flex gap-x-3 items-center'>
          <TbBrandGoogleAnalytics/>
            <p> Analytics</p>
          </div>
          <div className='flex gap-x-3 items-center'>
          <MdPayment/>
            <p> Payments</p>
          </div>
          <div className='flex gap-x-3 items-center'>
          <FaLocationArrow/>
            <p>Tools</p>
          </div>
          <div className='flex gap-x-3 items-center'>
          <CiPercent/>
            <p>Discounts</p>
          </div>
          <div className='flex gap-x-3 items-center'>
          <MdOutlinePeople/>
            <p>Audience
            </p>
          </div>
          <div className='flex gap-x-3 items-center'>
          <IoIosColorPalette/>
            <p>Appearance</p>
          </div>
          <div className='flex gap-x-3 items-center'>
          <BsFillLightningChargeFill/>
            <p>Plugins</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar