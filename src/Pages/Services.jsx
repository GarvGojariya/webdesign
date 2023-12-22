import React from 'react';
import { images } from '../assts/images/index';

const Services = () => {
    return (
        <>
            <div className='bg-servicesbg w-full flex justify-center place-items-center  bg-cover h-52 mt-10'>
                <p className='text-center text-white text-7xl ' > Services</p>
            </div>
            <div className=' w-[838px] h-auto mt-10 place-content-center ml-64 flex flex-col'>
                <div className='w-max h-[400px] flex  flex-col' >
                    <div className='w-[838px] h-[350px] text-center flex   flex-row' >

                        <div className='flex flex-col w-1/3 hover:text-[#C76904] place-content-center  h-40' >
                            <p className='font-medium text-lg'>Project Plan</p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img ></p>
                        </div>
                        <div className='flex hover:text-[#C76904] flex-col w-1/3 place-content-center  h-40' >
                            <p className='font-medium text-lg'>Interior Work</p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img></p>
                        </div>
                        <div className='flex hover:text-[#C76904] flex-col w-1/3 place-content-center  h-40' >
                            <p className='font-medium text-lg'>Retail Design    </p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img ></p>
                        </div>
                    </div>
                    <div className='w-[838px] h-[400px] text-center flex  flex-row' >

                        <div className='flex hover:text-[#C76904] flex-col w-1/3 place-content-center  h-40' >
                            <p className='font-medium text-lg'>Project Plan</p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img ></p>
                        </div>
                        <div className='flex hover:text-[#C76904] flex-col w-1/3 place-content-center  h-40' >
                            <p className='font-medium text-lg'>Interior Work</p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img></p>
                        </div>
                        <div className='flex hover:text-[#C76904] flex-col w-1/3 place-content-center  h-40' >
                            <p className='font-medium text-lg'>Retail Design    </p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img ></p>
                        </div>
                    </div>

                </div>
                <div className='w-[500px] flex flex-col h-44 text-center mt-24  ml-[168px] mr-[168px]'>
                    <p className='font-serif font-medium text-4xl'>
                        How We Work
                    </p>
                    <p className='font-[Jost] font-normal text-lg mt-5'>
                        It is a long established fact will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='w-[838px] h-44'>
                    <div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Services