import React from 'react'

const Body = () => {
  return (
    <div>
      <body className='container mx-auto'>
        <div className='container mx-auto flex flex-col-reverse w-full space-x-7 items-center my-10 md:flex-row md:gap-4 lg:mx-10 lg:gap-20 xl:justify-between'>
          <div className='flex flex-col space-y-4 mx-4  lg:space-y-8'>
            <h1 className='max-w-xl text-4xl font-bold text-center pt-5 md:text-5xl md:text-left xl:text-7xl'>
              Hi There  I'm <span className='text-purple-600'>Ose</span>
            </h1>
            <p className='max-w-md text-center font-semibold text-xl text-gray-900 md:text-2xl md:text-left xl:text-4xl'>
                FRONTEND DEVELOPER
            </p>
            <p className='max-w-md text-center text-lg  text-gray-700 md:text-left md:text-lg lg:text-xl xl:text-2xl'>
              I'm a professsional Front End Developer with graphics design and UI/UX skills based in Lagos.
            </p>
            <div className='flex justify-center my-6 w-full gap-6 pb-5 md:justify-start md:gap-5 lg:gap-8'>
              <a href="" className='rounded-full p-3 px-6 pt-2  bg-purple-600 text-lg text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-purple-600 hover:scale-110  hover:border hover:border-purple-600  '>Hire me</a>
              <a href="" className='rounded-full p-3 px-6 pt-2 border border-purple-600 text-purple-600 text-lg bg-transparent transition duration-300 ease-in-out hover:bg-purple-600  hover:text-white hover:scale-110   '>Get CV</a>
            </div>
        </div>
          <div className='ml-3 md:pb-5'>
            <img src="../img/banner-image (1).png" alt="display-img" />
          </div>
        </div>
        {/* <div>
          <div className='flex flex-col md:flex-row'>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p>
                Let me Introduce my self
              </p>
            </div>
          </div>
        </div> */}
      </body>
    </div>
  )
}

export default Body