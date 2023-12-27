import React from 'react';
import { images } from '../assts/images/index';

const Projects = () => {
    return (
        <>
            <div className='bg-projectbg w-full flex justify-center place-items-center  bg-cover h-52 mt-10'>
                <p className='text-center text-5xl  ' > Our Project</p>
            </div>
            <div className='flex flex-col  w-full items-center mt-12 place-content-center'>
                <div className='sm:w-auto w-3/4 h-10  flex flex-row rounded-md space-x-[2px] sm:space-x-4 font-medium text-sm sm:text-lg  text-center border-[#CDA274] border-[1px] self-center '>
                    <button className='rounded-md hover:bg-[#CDA274] active:bg-[#CDA274] w-24 hover:text-white'>Bathroom</button>
                    <button className='rounded-md hover:bg-[#CDA274] active:bg-[#CDA274] w-24 hover:text-white'>Bed Room</button>
                    <button className='rounded-md hover:bg-[#CDA274] active:bg-[#CDA274] w-24 hover:text-white'>Kitchan</button>
                    <button className='rounded-md hover:bg-[#CDA274] active:bg-[#CDA274] w-28 hover:text-white'>Living Area</button>
                </div>
                <div id="projects" className='flex mt-16 w-full place-content-center justify-center items-center space-y-20 h-auto flex-col'>
                    <div className='grid grid-cols-2 md:gap-16 gap-8 w-2/3  '>
                        <div className='flex-col w-auto  flex'>
                            <img src={images.Bedroom1}></img>
                            <div className='items-center flex h-auto mt-5 flex-row'>
                                <div>
                                    <p className='font-medium sm:text-lg text-base md:text-xl '>Minimal Bedroom</p>
                                    <p className='sm:text-base hidden sm:block text-sm md:text-lg'>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto sm:h-10 h-6 md:h-14 '></img>
                            </div>
                        </div>
                        <div className='flex-col w-auto  flex'>
                            <img src={images.Bedroom2}></img>
                            <div className='items-center flex h-auto mt-5 flex-row'>
                                <div>
                                    <p className='font-medium sm:text-lg text-base md:text-xl '>Minimal Bedroom</p>
                                    <p className='sm:text-base hidden sm:block text-sm md:text-lg'>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto sm:h-10 h-6 md:h-14 '></img>
                            </div>
                        </div>
                        <div className='flex-col w-auto  flex'>
                            <img src={images.Bedroom3}></img>
                            <div className='items-center flex h-auto mt-5 flex-row'>
                                <div>
                                    <p className='font-medium sm:text-lg text-base md:text-xl '>Minimal Bedroom</p>
                                    <p className='sm:text-base hidden sm:block text-sm md:text-lg'>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto sm:h-10 h-6 md:h-14 '></img>
                            </div>
                        </div>
                        <div className='flex-col w-auto  flex'>
                            <img src={images.Bedroom4}></img>
                            <div className='items-center flex h-auto mt-5 flex-row'>
                                <div>
                                    <p className='font-medium sm:text-lg text-base md:text-xl '>Minimal Bedroom</p>
                                    <p className='sm:text-base hidden sm:block text-sm md:text-lg'>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto sm:h-10 h-6 md:h-14 '></img>
                            </div>
                        </div>
                        <div className='flex-col w-auto  flex'>
                            <img src={images.Bedroom5}></img>
                            <div className='items-center flex h-auto mt-5 flex-row'>
                                <div>
                                    <p className='font-medium sm:text-lg text-base md:text-xl '>Minimal Bedroom</p>
                                    <p className='sm:text-base hidden sm:block text-sm md:text-lg'>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto sm:h-10 h-6 md:h-14 '></img>
                            </div>
                        </div>
                        <div className='flex-col w-auto  flex'>
                            <img src={images.Bedroom6}></img>
                            <div className='items-center flex h-auto mt-5 flex-row'>
                                <div>
                                    <p className='font-medium sm:text-lg text-base md:text-xl '>Minimal Bedroom</p>
                                    <p className='sm:text-base hidden sm:block text-sm md:text-lg'>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto sm:h-10 h-6 md:h-14 '></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Projects