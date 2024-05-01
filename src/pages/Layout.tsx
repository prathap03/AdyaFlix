import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>    
    <div className='bg-[#39071F] p-2 text-white flex justify-between items-center min-h-[5rem]'>
        <div className=' ml-[4rem] w-[50%] flex gap-2   items-center'>
            <h1 className='p-2 font-semibold text-[2rem]'>AdyaFlix</h1>
            <div className='bg-white w-[80%] flex items-center gap-2 p-2 h-[2.7rem]'>
                <div className='flex items-start justify-center text-black'>
                <IoSearchOutline />
                </div>
                <input type='text' className='bg-transparent  border-none focus:outline-none text-black w-[100%]' placeholder='Search for Movies' />
            </div>
        </div>
        <div className='w-[10%] gap-[2rem] flex p-2 justify-center items-center '>
            <div>
                <button className='bg-[#8D1431] w-[110%] font-semibold p-2'>Sign In</button>
            </div>
            <button className='flex justify-center items-center bg-[#8D1431] p-[0.78rem]'>
            <GiHamburgerMenu className='scale-[220%]' />
            </button>
        </div>
       
    </div>
    <Outlet />
    </div>
    
  )
}

export default Layout