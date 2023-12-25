import React from 'react';
import { images } from '../assts/images/index';

const Projects = () => {
    return (
        <>
            <div className='bg-projectbg w-full flex justify-center place-items-center  bg-cover h-52 mt-10'>
                <p className='text-center text-5xl  ' > Our Project</p>
            </div>
            <div className='flex flex-col  w-[838px] ml-64 mt-12 place-content-center'>
                <div className='w-7/12 h-10  flex flex-row space-x-12 font-medium text-lg  text-center border-[#CDA274] border-[1px] self-center '>
                    <button className='rounded-md hover:bg-[#CDA274] hover:text-white'>Bathroom</button>
                    <button className='rounded-md hover:bg-[#CDA274] hover:text-white'>Bed Room</button>
                    <button className='rounded-md hover:bg-[#CDA274] hover:text-white'>Kitchan</button>
                    <button className='rounded-md hover:bg-[#CDA274] hover:text-white'>Living Area</button>
                </div>
                <div id="projects" className='flex mt-16 w-[838px] space-y-20 h-auto flex-col'>
                    <div className='flex flow-row h-[480px]  space-x-[58px] '>
                        <div className='flex-col w-[390px]  flex'>
                            <img src={images.Bedroom1}></img>
                            <div className='items-center flex h-14 mt-5 flex-row'>
                                <div>
                                    <p className='font-medium text-xl '>Minimal Bedroom</p>
                                    <p>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto h-14 '></img>
                            </div>

                        </div>
                        <div className='flex-col w-[390px]  flex'>
                            <img src={images.Bedroom2}></img>
                            <div className='items-center flex h-14 mt-5 flex-row'>
                                <div>
                                    <p className='font-medium text-xl '>Minimal Bedroom</p>
                                    <p>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto h-14 '></img>
                            </div>
                        </div>
                    </div>
                    <div className='flex flow-row h-[480px]  space-x-[58px] '>
                        <div className='flex-col w-[390px]  flex'>
                            <img src={images.Bedroom3}></img>
                            <div className='items-center flex h-14 mt-5 flex-row'>
                                <div>
                                    <p className='font-medium text-xl '>Minimal Bedroom</p>
                                    <p>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto h-14 '></img>
                            </div>

                        </div>
                        <div className='flex-col w-[390px]  flex'>
                            <img src={images.Bedroom4}></img>
                            <div className='items-center flex h-14 mt-5 flex-row'>
                                <div>
                                    <p className='font-medium text-xl '>Minimal Bedroom</p>
                                    <p>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto h-14 '></img>
                            </div>
                        </div>
                    </div>
                    <div className='flex flow-row h-[480px]  space-x-[58px] '>
                        <div className='flex-col w-[390px]  flex'>
                            <img src={images.Bedroom5}></img>
                            <div className='items-center flex h-14 mt-5 flex-row'>
                                <div>
                                    <p className='font-medium text-xl '>Minimal Bedroom</p>
                                    <p>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto h-14 '></img>
                            </div>

                        </div>
                        <div className='flex-col w-[390px]  flex'>
                            <img src={images.Bedroom6}></img>
                            <div className='items-center flex h-14 mt-5 flex-row'>
                                <div>
                                    <p className='font-medium text-xl '>Minimal Bedroom</p>
                                    <p>Decor / Artchitecture</p>
                                </div>
                                <img src={images.SideV} className='mr-0 hover:cursor-pointer ml-auto h-14 '></img>
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