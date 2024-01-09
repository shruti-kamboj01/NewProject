import React from 'react'
import NavBar from './NavBar'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuDownload } from "react-icons/lu";
import { LuArrowUpDown } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const DashBoard = () => {

const orders = [
  {
    id:"#281209",
    
  },
  {
    date:"7 July, 2023",
  },
  {
    amount:"₹1,278.23",
  },
  {
    fees:"₹22",
  },
]

  return (
    <div className=' h-[100vh]'>
       <NavBar/>
       {/* overview */}
      <div className='flex flex-col p-4 bg-gray-100'>
      <div className='flex justify-between  mb-10 '>
        <h1 className='text-black text-[20px] font-medium'>Overview</h1>
        <div className='flex border-l-2 border-gray-300 '>
          <p>Last Month</p>
          <MdOutlineKeyboardArrowDown size={25} />
        </div>
       </div>
        
        {/* order and amount */}
        <div className='flex justify-evenly gap-x-3 rounded-md mb-10'>
          <div className='flex flex-col gap-y-2 w-[50%] rounded-md p-2 px-3 bg-white'>
            <p className='text-gray-500 text-[16px] font-normal'>Online orders</p>
            <p className='text-black text-[32px] font-medium'>231</p>
          </div>
          <div className='flex flex-col gap-y-2 bg-white w-[50%] rounded-md p-2 px-3'>
            <p className='text-gray-500 text-[16px] '>Amount received</p>
            <p className='text-black text-[32px]'>₹23,92,312.19</p>
          </div>
        </div>

        {/* transactions */}

        <div className='flex flex-col mt-4 '>
         <div className='flex gap-x-3 mb-6'>
         <p>Transactions</p>
         <div className='border-2 border-gray-400 h-[25px]'></div>
          <p>This Month</p>
         </div>

         <div className='bg-white rounded-md'>
         <div className=' flex   justify-between p-3'>
        <div className='flex text-sm text-gray-400 items-center gap-x-2 border-gray-300 rounded-md py-3 px-7 border-2'>
        <CiSearch />
         <p>Search by order ID...</p>
        </div>
        <div className='flex items-center gap-x-3'>
          <div className='flex text-gray-500 rounded-md p-0.5 items-center gap-x-1 border-2 border-gray-200'>
            <p>Sort</p>
            <LuArrowUpDown />
          </div>
          <div className='text-gray-500 border-2 p-1 rounded-md border-gray-200'>
          <LuDownload />
          </div> 
        </div>
         </div>

         <div className='flex flex-col'>
         <div className='flex justify-evenly bg-gray-100 p-2 mt-2'>
          <p>Order ID</p>
          <div className='flex'>
          <p>Order date</p>
          <TiArrowSortedDown size={22} className='mt-0.5'/>
          </div>
         
          <p>Order amount</p>
          <div className='flex gap-x-1'>
          <p>Transaction fees</p>
          <IoIosInformationCircleOutline className='mt-1'/>
          </div>
        </div>

        {/* list */}
        <div className='flex justify-evenly gap-y-2 '>
          {
           orders.map((ele, i) => {
            return (
              <div className='flex flex-col'>
              <div className='mr-10 text-blue-600'> 
             {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
             
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
             
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
              
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
             
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
             
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
              
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
              
              <div className='mr-10 text-blue-600'> 
              {ele.id}
</div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
              
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
              
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
              
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
             

              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
              
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
              
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
             
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
              
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
            
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
            
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
             
              <div className='mr-10 text-blue-600'> 
              {ele.id}
              </div>
               <div >{ele.date}</div>
             <div className='mr-12'>{ele.amount}</div>
              <div> {ele.fees}</div>
              

            

              </div>
              
              
              
            )
           })
          }
          
        </div>
         {/* footer */}

         <div className='flex  justify-evenly p-2 mt-5 text-gray-500 text-base font-medium'>
          <div className='flex gapx-2 border-2 px-1 '>
          <IoIosArrowBack className='mt-1 ' />
           <p>Previous</p>
          
          </div>
          <div className='flex gap-x-2'>
            <p>1</p>
            <p>...</p>
            <p className='bg-blue-500 px-1 rounded-md text-white'>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
          </div>
           <div className='flex gap-x-1 border-2 px-1'>
            <p>Next</p>
            <IoIosArrowForward className='mt-1'/>
           </div>
         </div>
         </div>

        </div>

         
          </div>
      </div>

    </div>
  )
}

export default DashBoard