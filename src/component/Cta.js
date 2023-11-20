import React from 'react'
import {FaFacebookF, FaInstagram, FaWhatsapp, } from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className='px-6 '>
      <div className='container mx-auto flex justify-center items-center pb-[5rem] pt-4 md:p-[5rem] w-full '>
        <div className='bg- items-center rounded-lg shadow-xl shadow-white p-4 py-7 md:p-8 md:px-16 md:flex md:gap-10 md:justify-start'>
          <div className=''>
            <h2 className='py-2 px-6 text-2xl font-semibold  text-purple-700 md:text-4xl md:max-w-sm md:text-left md:font-bold '>Bring to realization  your ideas...</h2>
          </div>
          <div>
            <h1 className='text-xl md:text-2xl font-bold text-center leading-6 tracking-wider text-black '>Contact</h1>
            <h3 className='py-2 text-lg text-gray-700 text-center'>Call : +234 902 6898 778</h3>
            <div className='flex justify-center items-center gap-4'>
              <a href="https://www.facebook.com/oseghale.osemudiamwen">
                <div className='p-2 bg-purple-100 text-purple-900 rounded-md transition duration-300 ease-in-out hover:scale-110 ' ><FaFacebookF size = {20} /> </div>
              </a>
              <a href="https://instagram.com/osespecial1?igshid=c3E1emU4ZmYyczV2">
                <div className='p-2 bg-purple-100 text-purple-900 rounded-md transition duration-300 ease-in-out hover:scale-110 ' ><FaInstagram size = {20} /> </div>
              </a>
              <a href="https://wa.me/<09026898778>">
                <div className='p-2 bg-purple-100 text-purple-900 rounded-md transition duration-300 ease-in-out hover:scale-110 ' ><FaWhatsapp size = {20} /> </div>
              </a>


              <a href="mailto:https://mail.google.com/mail/u/0/#inbox">
                <div className='p-2 bg-purple-100 text-purple-900 rounded-md transition duration-300 ease-in-out hover:scale-110 ' ><BiLogoGmail size = {20} /> </div>
              </a>

            </div>
          </div>     
        </div>
        
     
      </div>
    </div>
  )
}

export default Cta