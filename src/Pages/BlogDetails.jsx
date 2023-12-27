import React from 'react';
import { images } from '../assts/images/index';

const BlogDetails = () => {
    return (
        <>
            <div className='bg-blogdetailbg w-full flex justify-center place-items-center  bg-cover h-52 mt-10'>
                <p className='text-center text-white text-7xl ' > Blog Details</p>
            </div>
            <div className=' w-full h-auto items-center place-content-center mt-10 flex flex-col'>
                <div className='sm:w-2/3 w-3/4 grid-rows-2 sm:grid-rows-1 gap-y-3 grid sm:grid-cols-2 sm:gap-5'>
                    <div className='flex flex-col w-auto'>
                        <div id='searchbox' className='w-max flex flex-row items-center rounded-lg bg-[#ebd7c4] h-7'>
                            <input type='search' placeholder='Search...' className='focus:outline-none focus:ring focus:ring-[#CDA274] placeholder-[#CDA274] cursor-text w-auto h-max rounded-lg  bg-[#ebd7c4]'>
                            </input>
                        </div>
                        <div id='latest-news' className='flex flex-col w-auto'>
                            <p className='mt-3 font-medium text-lg'>Latest News</p>
                            <div className='border-b-[1px] mt-3 cursor-pointer border-[#CDA274]'>
                                <p className='font-medium text-base '>We Focus On Comfort And Gorgeous</p>
                                <p className='font-light text-xs text-end'>06/02/2023</p>
                            </div>
                            <div className='border-b-[1px] mt-3 cursor-pointer border-[#CDA274]'>
                                <p className='font-medium text-base '>We Focus On Comfort And Gorgeous</p>
                                <p className='font-light text-xs text-end'>06/02/2023</p>
                            </div>
                            <div className='border-b-[1px] mt-3 cursor-pointer border-[#CDA274]'>
                                <p className='font-medium text-base '>We Focus On Comfort And Gorgeous</p>
                                <p className='font-light text-xs text-end'>06/02/2023</p>
                            </div>
                        </div>
                        <div id='latest-news' className='flex sm:mt-10 mt-6 md:mt-14 w-3/4 flex-col space-y-5'>
                            <p className='mt-3 font-medium text-lg'>Categories</p>
                            <div className='border-b-[1px] mt-3 text-[#4D5053]  cursor-pointer border-[#CDA274]'>
                                <p className='font-medium text-base '>Decoration
                                </p>
                            </div>
                            <div className='border-b-[1px] mt-3 text-[#4D5053] cursor-pointer border-[#CDA274]'>
                                <p className='font-medium text-base '>Door Windows</p>
                            </div>
                            <div className='border-b-[1px] mt-3 text-[#4D5053] cursor-pointer border-[#CDA274]'>
                                <p className='font-medium text-base '>Home Land
                                </p>
                            </div>
                            <div className='border-b-[1px] mt-3 text-[#4D5053] cursor-pointer border-[#CDA274]'>
                                <p className='font-medium text-base '>Roof Installation
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full items-start flex flex-col'>
                        <p className='font-serif font-medium sm:text-2xl text-xl md:text-4xl text-start'>
                            Let’s Get Solution for Building Construction Work.
                        </p>
                        <img src={images.kitchen} className='mt-5'></img>
                        <p className=''>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                    </div>
                </div>
                <div className='sm:w-2/3 w-3/4 grid grid-rows-2 sm:grid-rows-1 mt-10 sm:grid-cols-2'>
                    <div className='flex flex-col space-y-6 '>
                        <p className='font-serif font-medium sm:text-2xl text-xl md:text-4xl text-start'>
                            Design sprints are great
                        </p>
                        <p>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        <p>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                    <div>
                        <img src={images.kitchen} className='w-max h-auto mt-5'></img>
                    </div>
                </div>
                <div className='w-2/3 flex flex-col items-center place-content-center sm:mt-16 mt-8 md:mt-20 space-y-6 sm:space-y-8 h-auto'>
                    <p className='font-medium text-2xl'>Leave a Reply</p>
                    <div className='w-max grid-rows-4 sm:grid-rows-1 gap-3 sm:gap-3 grid sm:grid-cols-2'>
                        <input placeholder='Name' type="text" className='border-b-[1px] border-black'></input>
                        <input placeholder='Email' type='email' className='border-b-[1px] border-black'></input>
                        <input placeholder='Subject' type="text" className='border-b-[1px] border-black'></input>
                        <input placeholder='Phone No' type='text' className='border-b-[1px] border-black'></input>
                    </div>
                    <textarea placeholder="I'm intrested in...." rows={4} className='w-1/2'></textarea>
                    <button className='bg-[#292F36] w-24 h-8 rounded-lg text-white'>Send now</button>
                </div>
            </div>
        </>
    )
}

export default BlogDetails