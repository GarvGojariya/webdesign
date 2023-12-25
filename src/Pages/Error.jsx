import React from 'react';
import { images } from '../assts/images/index';
import Navbar from '../Layout/Navbar';

const Error = () => {
  return (
    <>
      <Navbar />
      <div className=' w-[838px] h-[550px] mt-10 place-content-center ml-64 flex flex-row '>
        <img src={images.Error} className='w-1/2 h-72'></img>
        <div className='mr-0 ml-auto mb-20 mt-auto '>
          <p className='text-[#CDA274] font-semibold text-9xl font-[DMSerifDisplay]'>404</p>
          <p className='font-[DMSerifDisplay] font-medium text-3xl'>We are sorry, but the page you requested was not found</p>
          <button className='bg-[#292F36] text-[#CDA274] h-10 rounded-xl mt-5 text-center w-40'>Back to home</button>
        </div>


      </div>
    </>
  )
}

export default Error