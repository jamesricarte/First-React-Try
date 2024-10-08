import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

const Header = () => {
  return (
    
    <div className='mx-[12%]'>
        <div className='flex justify-between items-center h-[125px] bg-white'>
        <div>
            <h1 className='font-bold text-[30px]'>E-commerce</h1>
        </div>

        <div className='flex gap-4 font-medium items-center'>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>Contact</li>
                <li>Company</li>
                <li>Blog</li>
            </ul>
            <button className='bg-primary-500 py-2 px-6 rounded-[999px] text-white'>Shop</button>

            <div className='flex gap-3'>
            <FaRegUser size={22} />
            <GrCart size={22} />
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Header
