import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll'
import '../App.css'


const Nav = () => {
    const [toggle,setToggle]= useState(false)
    const handleClick = () => setToggle(!toggle)
    const handleMenuItemClick = () => {
      setToggle(false);
;    }
    const [active,setActive] = useState('menu1');
    const activeClick =  (menu) => {setActive(menu)};
 
  return (
    <div className='w-full bg-blue-100 shadow fixed top-0 '>
      <nav className='container mx-auto border-b border-slate-300 w-full  '>
        <div className='flex items-center justify-between py-2 mx-4 md:mx-auto lg:mx-10  '>
          <div className=''>
            <a href=" ">
              <Link to = "/home">
                <img src="../img/logo1.png" alt="logo" className=' w-[105px]'/>
              </Link>
            </a>           
          </div>
          <div className='hidden font-semibold md:flex space-x-9 text-sm  lg:text-lg '>
            <div onClick={()=>activeClick('menu1')} >
              <Link to = "/home">
                <a href="" className={active=='menu1'  ?'text-purple-600 underline underline-offset-8 transition duration-300  ':'hover:text-purple-600 hover:underline underline-offset-8'} >Home</a>
              </Link>
            </div>
            <div onClick={()=>activeClick('menu2')} >
              <Link to = "/project">
                <a href="" className={active=='menu2'?'text-purple-600 underline underline-offset-8 transition duration-300  ':'hover:text-purple-600 hover:underline underline-offset-8'}>Projects</a>
              </Link>
            </div>
            <div onClick={()=>activeClick('menu3')}>
              <Link to = "/about">
                <a href="" className={active=='menu3'?'text-purple-600 underline underline-offset-8 transition duration-300  ':'hover:text-purple-600 hover:underline underline-offset-8'}>About</a>
              </Link>
            </div>
            <div>
              <ScrollLink to = "Cta" smooth={true} duration={500} onClick={()=>activeClick('menu4')}>
                <a href="" className={active=='menu4'?'text-purple-600 underline underline-offset-8 transition duration-300  ':'hover:text-purple-600 hover:underline underline-offset-8'}>Contact</a>
              </ScrollLink>
            </div>
          </div>
          <div className='flex justify-center items-center gap-4  '>
            <div className='md:hidden ' onClick={handleClick}>
              <img src={toggle?"../img/close.svg":"../img/hamburgerMenu.svg"} alt="" />
            </div>
            <div className=' justify-between items-end md:space-x-[35px]  md:flex'>
             <ScrollLink to = "Cta" smooth={true} duration={500}>
                <a href="" className='rounded-full px-5 py-2 mb-2 w-[110px] h-[45px] shadow-lg  text-lg text-center transition duration-300 ease-in-out text-white bg-purple-600 tracking-wider hover:bg-transparent hover:scale-110 hover:text-purple-600 hover:shadow-2xl hidden md:flex'>Hire me</a>
              </ScrollLink >

              <img src="../img/profile-pic1.jpg" alt=" profile img"  className='w-[65px] h-[65px] rounded-full object-cover items-center'/>
            </div>
 
          </div>

        </div>
      </nav>
      {/* dropdown-menu */}
        <div className={toggle?'absolute z-10 p-4 bg-gray-100 w-full px-6 transition ease-in-out delay-150  md:hidden ':'hidden'}>
          <div className='flex flex-col' onClick={handleMenuItemClick}>
            <div className='flex py-1 px-2 border-b-2 hover:rounded-sm' onClick={()=>activeClick('menu1')}>
              <Link to = "/home">
                <a href="" className={active =='menu1'?'text-purple-600':'hover:text-purple-600 hover:bg-gray-100'} >Home</a>
              </Link>
            </div>
            <div className='flex py-1 px-2 border-b-2  hover:rounded-sm ' onClick={()=>activeClick('menu2')}>
              <Link to = "/project">
                <a href="" className={active=='menu2'?'text-purple-600':'hover:text-purple-600 hover:bg-gray-100' }>Projects</a>
              </Link>
            </div>
            <div className='flex py-1 px-2 border-b-2  hover:rounded-sm' onClick={()=>activeClick('menu3')}>
              <Link to = "/about">
                <a href="" className={active=='menu3'?'text-purple-600':'hover:text-purple-600 hover:bg-gray-100' }>About</a>
              </Link>
            </div>
            <div className='flex py-2 px-2  hover:rounded-sm' onClick={()=>activeClick('menu4')}>
              <ScrollLink to = "Cta" smooth={true} duration={500}>
                <a href="" className={active=='menu4'?'text-purple-600':'hover:text-purple-600 hover:bg-gray-100' } >Contact</a>
              </ScrollLink>
            </div>
          <div>
          <ScrollLink to = "Cta" smooth={true} duration={500}>
            <a href="" className='block bg-purple-600 rounded-full text-white text-center text-lg  p-3 px-6 pt-2 mt-2 mx-5 transition duration-300 ease-in-out  hover:scale-110 hover:bg-transparent hover:text-purple-600 hover:text-xl hover:border hover:border-purple-600 '>Hire me</a>
          </ScrollLink>
          </div>
          </div>
        </div>
 
    </div>
  )
}

export default Nav