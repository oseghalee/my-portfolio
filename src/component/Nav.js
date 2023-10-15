import React from 'react'
import { useState } from 'react'
const Nav = () => {

    const [toggle,setToggle]= useState(false)
    const handleClick = () => setToggle(!toggle)
  return (
    <div className=''>
      <nav className='container mx-auto border-b w-full h-[62px] '>
        <div className='flex items-center justify-between  mx-6 mb-4'>
          <div className='pt-2 '>
            <img src="../img/logo1.png" alt="logo" className=' w-[155px]'/>
          </div>
          <div className='hidden md:flex space-x-4 lg:space-x-6 lg:text-lg '>
            <a href="" className='text-purple-600 hover:text-purple-600'>Home</a>
            <a href="" className='hover:text-purple-600'>Services</a>
            <a href="" className='hover:text-purple-600'>Pricing</a>
            <a href="" className='hover:text-purple-600'>Product</a>
            <a href="" className='hover:text-purple-600'>Career</a>
            <a href="" className='hover:text-purple-600'>Contact</a>
          </div>
          <div className='flex baseline gap-4 justify-between '>
            <div className='md:hidden mt-3' onClick={handleClick}>
              <img src={toggle?"../img/close.svg":"../img/hamburgerMenu.svg"} alt="" />
            </div>
            <div className=''>
              <a href="" className='bg-purple-600 relative rounded-full text-white  transition duration-300 ease-in-out tracking-wider hover:bg-transparent hover:scale-110 hover:text-purple-600 hover:border hover:border-purple-600 p-3 px-6 pt-2 mt-2 hidden md:block'>Hire me</a>
            </div>
 
          </div>

        </div>
      </nav>
      <div className={toggle?'absolute z-10 p-4 bg-white w-full px-6 md:hidden':'hidden'}>
        <div className='flex flex-col gap-2'>
          <a href="" className='text-purple-600 hover:text-purple-600 hover:bg-gray-100'>Home</a>
          <a href="" className='hover:text-purple-600 hover:bg-gray-100'>Services</a>
          <a href="" className='hover:text-purple-600 hover:bg-gray-100'>Pricing</a>
          <a href="" className='hover:text-purple-600 hover:bg-gray-100'>Product</a>
          <a href="" className='hover:text-purple-600 hover:bg-gray-100'>Career</a>
          <a href="" className='hover:text-purple-600 hover:bg-gray-100'>Contact</a>
        </div>
        <div>
        <a href="" className='block bg-purple-600 rounded-full text-white text-center text-lg  p-3 px-6 pt-2 mt-2 transition duration-300 ease-in-out  hover:scale-110 hover:bg-transparent hover:text-purple-600 hover:text-xl hover:border hover:border-purple-600   '>Hire me</a>
        </div>
      </div>
    </div>
  )
}

export default Nav