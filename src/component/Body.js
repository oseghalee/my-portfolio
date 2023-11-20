import React from 'react'
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll'

const Body = (props) => {
  return (
    <div>
      <body className='container mx-auto pt-20 '>
        <div className=' flex flex-col-reverse w-full space-x-7 items-center mt-10 md:flex-row md:gap-4 lg:mx-10 lg:gap-20 xl:justify-between'>
          <div className='flex flex-col space-y-4 lg:space-y-8'>
            <h1 className='max-w-xl text-4xl font-bold text-center pt-5 md:text-5xl md:text-left xl:text-7xl'>
              {props.intro} <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-500 '>{props.name}</span>
            </h1>
            <p className='max-w-md text-center font-semibold text-xl text-gray-900 md:text-2xl md:text-left xl:text-4xl'>
                {props.role}
            </p>
            <p className='max-w-md text-center text-lg tracking-wider leading-8 line-clamp-4  text-gray-700 md:text-left md:text-lg xl:text-xl'>
              {props.description}
            </p>
            <div className='flex justify-center  w-full gap-6 md:justify-start md:space-x-[35px] lg:[55px]'>
              <ScrollLink to = "Cta" smooth={true} duration={500}>
                <a href="" className='rounded-full px-5 py-2 mb-2 w-[110px] h-[45px] shadow-2xl text-lg text-center transition duration-300 ease-in-out text-white bg-purple-600 tracking-wider hover:bg-transparent hover:scale-110 hover:text-purple-600 hover:shadow-2xl flex'>Hire me</a>
              </ScrollLink >
              <Link to ="/about" >
                <a href="" className='flex rounded-full px-5 py-2 mb-2 w-[110px] h-[45px] shadow-2xl  text-lg text-center transition duration-300 ease-in-out text-purple-600  bg-transparent  tracking-wider hover:bg-purple-600 hover:shadow-2xl  hover:text-white hover:scale-110 '>Get CV</a>
              </Link>
            </div>
        </div>
          <div className='ml-3 md:pb-5'>
            <img src={`../img/${props.img}`} alt="display-img" />
          </div>
        </div>
      </body>
    </div>
  )
}

export default Body