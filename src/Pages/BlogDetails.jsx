import React from 'react';
import { images } from '../assts/images/index';

const BlogDetails = () => {
    return (
        <>
            <div className='bg-blogdetailbg w-full flex justify-center place-items-center  bg-cover h-52 mt-10'>
                <p className='text-center text-white text-7xl ' > Blog Details</p>
            </div>
            <div className=' w-[838px] h-auto mt-10  ml-64 flex flex-col'>
                <div className='flex space-x-24 flex-row'>
                    <div className='flex flex-col place-content-center w-[250px]'>
                        <div id='searchbox' className='self-center flex flex-row items-center w-[250px] rounded-lg bg-[#ebd7c4] h-10'>
                            <input type='search' placeholder='Search...' className='focus:outline-none focus:ring focus:ring-[#CDA274] placeholder-[#CDA274] cursor-text  w-[500px] h-10 rounded-lg  bg-[#ebd7c4]'>
                            </input>
                        </div>
                        <div id='latest-news' className='flex flex-col w-[250px]'>
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
                        <div id='latest-news' className='flex mt-14 w-3/4 flex-col space-y-5 self-center '>
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
                    <div className='w-[500px] flex flex-col ml-[168px] mr-[168px]'>
                        <p className='font-serif font-medium text-4xl text-start'>
                            Let’s Get Solution for Building Construction Work.
                        </p>
                        <img src={images.kitchen} className='mt-5'></img>
                        <p className='mt-10 '>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                    </div>

                </div>
                <div className='flex flex-row space-x-5 mt-16'>
                    <div className='w-[450px] flex flex-col space-y-6 '>
                        <p className='font-serif font-medium text-4xl text-start'>
                            Design sprints are great
                        </p>
                        <p>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        <p>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                    <div>
                        <img src={images.kitchen} className='w-[350px] h-[350px]'></img>
                    </div>
                </div>
                <div className='w-2/3 flex flex-col mt-20 self-center space-y-10 h-[400px]'>
                    <p className='font-medium text-2xl'>Leave a Reply</p>
                        <div className='w-1/2  flex flex-row space-x-8'>
                            <input placeholder='Name' type="text" className='border-b-[1px] border-black'></input>
                            <input placeholder='Email' type='email' className='border-b-[1px] border-black'></input>
                        </div>
                        <div className='w-1/2  flex flex-row space-x-8'>
                            <input placeholder='Subject' type="text" className='border-b-[1px] border-black'></input>
                            <input placeholder='Phone No' type='text' className='border-b-[1px] border-black'></input>
                        </div>
                        <textarea placeholder="I'm intrested in...." rows={4} className='w-[400px]'></textarea>
                        <button className='bg-[#292F36] bottom-0 ml-0 mr-auto w-24 h-8 rounded-lg text-white'>Send now</button>
                    </div>
            </div>
        </>
    )
}

export default BlogDetails