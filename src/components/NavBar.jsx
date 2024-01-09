import React from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { HiSpeakerphone } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";
const NavBar = () => {
  return (
    <div className='flex flex-row border-b-2 border-b-gray-300 py-3 justify-evenly'>
    
    <div className='flex gap-x-4'>
        <h1 className='text-gray-600 font-normal text-[15px]'>Payments</h1>
        <div className='text-gray-500 flex gap-x-1 font-normal text-[12px] mt-0.5'>
        <CiCircleQuestion className='mt-1'/>
        <p>How to use</p>
        </div>
       
    </div>
    <div className='text-gray-500 gap-x-2 bg-gray-300 items-center flex rounded-md  p-1'>
    <CiSearch />
    <p>Search features, tutorials, etc.</p>
    </div>
    
    <div className='flex gap-x-3'>
         <div className='rounded-full bg-gray-300 p-2'> <HiSpeakerphone size={25}/></div>
         <div className='rounded-full bg-gray-300 p-1.5'><TiArrowSortedDown size={30}/></div>
    </div>
    </div>
  )
}

export default NavBar