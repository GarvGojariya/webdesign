import React from 'react';
import { images } from '../assts/images/index';

const Services = () => {
    return (
        <>
            <div className='bg-servicesbg object-fit w-full flex justify-center place-items-center  bg-cover h-52 mt-10'>
                <p className='text-center text-white text-7xl ' > Services</p>
            </div>
            <div className='w-full h-auto mt-10 place-content-center justify-center items-center space-y-5 flex flex-col'>
                <div className='w-max sm:w-2/3 place-content-center flex ' >
                    <div className='w-1/2 sm:w-full text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-3  ' >
                        <div className='flex flex-col hover:text-[#C76904] text-center h-auto' >
                            <p className='font-medium text-lg'>Project Plan</p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img ></p>
                        </div>
                        <div className='flex hover:text-[#C76904] flex-col text-center  h-auto' >
                            <p className='font-medium text-lg'>Interior Work</p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img></p>
                        </div>
                        <div className='flex hover:text-[#C76904] flex-col text-center  h-auto' >
                            <p className='font-medium text-lg'>Retail Design    </p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img ></p>
                        </div>
                        <div className='flex hover:text-[#C76904] flex-col text-center h-auto' >
                            <p className='font-medium text-lg'>Project Plan</p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img ></p>
                        </div>
                        <div className='flex hover:text-[#C76904] flex-col text-center h-auto' >
                            <p className='font-medium text-lg'>Interior Work</p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img></p>
                        </div>
                        <div className='flex hover:text-[#C76904] flex-col text-center h-auto' >
                            <p className='font-medium text-lg'>Retail Design    </p>
                            <p className='mt-3 '>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                            <p className='mt-1.5 text-sm flex flex-row place-content-center hover:cursor-pointer'>Read More <img className='h-3 w-3 mt-1 ml-1' src={images.Vectorb}></img ></p>
                        </div>
                    </div>

                </div>
                <div className='sm:w-[400px] w-[350px] md:w-[500px] flex flex-col h-44 text-center   ml-[168px] mr-[168px]'>
                    <p className='font-serif font-medium sm:text-3xl text-2xl md:text-5xl'>
                        How We Work
                    </p>
                    <p className='font-[Jost] font-normal text-base sm:text-lg mt-5'>
                        It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
                    </p>
                </div>
                <div className='flex w-3/4 place-content-center justify-center'>
                    <div className='w-full md:w-2/3 place-content-center justify-center items-center flex flex-col sm:space-y-12 space-y-6 md:space-y-20 h-auto'>
                        <div className='flex items-center md:flex-row md:space-x-3 flex-col h-auto'>
                            <img src={images.S4} className='h-auto w-3/4 sm:w-96'></img>
                            <div className=' relative w-4/5  text-center place-content-center'>
                                <div className=' font-semibold font-[DMSerifDisplay] absolute left-0 text-3xl sm:text-4xl md:text-6xl text-[#C76904]'>
                                    01
                                </div>
                                <div className='md:mt-24 md:text-left text-center  justify-center w-3/4 font-[DMSerifDisplay] '>
                                    <p className='font-medium text-3xl'> Concept & Details </p>
                                    <p className='font-light hidden md:block mt-5 text-base'> It is a long established fact  will be distracted.
                                        Lorem Ipsum is simply dummy from text of the
                                        and typesetting indufstry. </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center md:flex-row md:space-x-3 flex-col h-auto'>
                            <div className=' relative w-2/3  text-center place-content-center'>
                                <div className=' font-semibold font-[DMSerifDisplay] absolute md:left-0 text-3xl sm:text-4xl md:text-6xl text-[#C76904]'>
                                    02
                                </div>
                                <div className='md:mt-24 md:text-left text-center justify-center w-3/4 font-[DMSerifDisplay] '>
                                    <p className='font-medium text-3xl'> Idea for Work </p>
                                    <p className='font-light hidden md:block mt-5 text-base'> It is a long established fact  will be distracted.
                                        Lorem Ipsum is simply dummy from text of the
                                        and typesetting indufstry. </p>
                                </div>
                            </div>
                            <img src={images.S2} className='h-auto w-3/4 sm:w-96'></img>
                        </div>
                        <div className='flex items-center md:flex-row md:space-x-3 flex-col h-auto'>
                            <img src={images.S1} className='h-auto w-3/4 sm:w-96'></img>
                            <div className='md:text-left text-center relative w-2/3'>
                                <div className=' font-semibold font-[DMSerifDisplay] absolute left-0 text-3xl sm:text-4xl md:text-6xl text-[#C76904]'>
                                    03
                                </div>
                                <div className='md:mt-24 justify-center w-3/4 font-[DMSerifDisplay] '>
                                    <p className='font-medium text-3xl'> Design </p>
                                    <p className='font-light hidden md:block mt-5 text-base'> It is a long established fact  will be distracted.
                                        Lorem Ipsum is simply dummy from text of the
                                        and typesetting indufstry. </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center md:flex-row md:space-x-3 flex-col space-y-3 h-auto'>
                            <div className=' relative w-2/3'>
                                <div className=' font-semibold font-[DMSerifDisplay] absolute left-0 text-3xl sm:text-4xl md:text-6xl text-[#C76904]'>
                                    04
                                </div>
                                <div className='md:mt-24 md:text-left text-center justify-center w-full font-[DMSerifDisplay] '>
                                    <p className='font-medium text-3xl'> Perfection </p>
                                    <p className='font-light hidden md:block mt-5 text-base'> It is a long established fact  will be distracted.
                                        Lorem Ipsum is simply dummy from text of the
                                        and typesetting indufstry. </p>
                                </div>
                            </div>
                            <img src={images.S3} className='h-auto w-3/4 sm:w-96'></img>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Services