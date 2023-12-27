import React from 'react';
import { images } from '../assts/images/index';
import { useNavigate } from 'react-router-dom';

const Articales = () => {
    const navigate = useNavigate()
    const Details = () => {
        navigate("/bloagdetail")
    }
    return (
        <>
            <div className='bg-articlesbg w-full flex justify-center place-items-center  bg-cover h-52 mt-10'>
                <p className='text-center text-5xl text-white font-[DMSerifDisplay] ' > Articles& News</p>
            </div>
            <div className=' w-full h-auto mt-10 place-content-center items-center flex flex-col'>
                <div id='searchbox' className='self-center flex flex-row items-center w-3/4 sm:w-auto rounded-lg bg-[#ebd7c4] sm:h-8  md:h-10'>
                    <input type='search' placeholder=' Search...' className='focus:outline-none focus:ring focus:ring-[#CDA274]  place-items-center placeholder-[#CDA274] cursor-text  w-[500px] h-max rounded-lg  bg-[#ebd7c4]'>
                    </input>
                    <svg className='ml-3 mr-3 hover:cursor-pointer' width="18" height="18" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.5881 24.2898L20.4826 18.1691C21.9525 16.2073 22.746 13.8195 22.7434 11.3659C22.7434 5.09879 17.6573 0 11.4059 0C5.1544 0 0.0683594 5.09879 0.0683594 11.3659C0.0683594 17.633 5.1544 22.7318 11.4059 22.7318C13.8533 22.7345 16.2352 21.939 18.192 20.4654L24.2975 26.5862C24.6065 26.8631 25.0096 27.011 25.424 26.9994C25.8384 26.9877 26.2326 26.8175 26.5257 26.5237C26.8188 26.2298 26.9886 25.8346 27.0002 25.4192C27.0118 25.0038 26.8643 24.5997 26.5881 24.2898ZM3.30765 11.3659C3.30765 9.76023 3.7826 8.1906 4.67244 6.85552C5.56229 5.52043 6.82705 4.47986 8.30681 3.86539C9.78657 3.25092 11.4148 3.09015 12.9857 3.4034C14.5566 3.71666 15.9996 4.48987 17.1322 5.62526C18.2647 6.76066 19.036 8.20724 19.3485 9.78208C19.6609 11.3569 19.5006 12.9893 18.8876 14.4727C18.2747 15.9562 17.2367 17.2241 15.905 18.1162C14.5732 19.0083 13.0075 19.4844 11.4059 19.4844C9.25887 19.4818 7.20056 18.6257 5.6824 17.1037C4.16425 15.5818 3.31022 13.5183 3.30765 11.3659Z" fill="#CDA274" />
                    </svg>
                </div>
                <div id='latest-post' className='mt-12 w-2/3'>
                    <p className='font-[DMSerifDisplay] font-normal text-4xl'>Latest Post</p>
                    <div className='flex flex-col md:space-x-3 md:flex-row mt-10 h-auto '>
                        <img src={images.article} className='w-[450px]'>
                        </img>
                        <div className='text-left  font-[DMSerifDisplay]  flex flex-col'>
                            <p className='mt-5 font-semibold text-xl'>Low Cost Latest Invented Interior Designing Ideas</p>
                            <p className='mt-3 sm:mt-8 md:mt-12 w-auto text-left font-light text-base'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                            <div className='flex flex-row mt-2 items-center '>
                                <p className='font-light text-sm'>26 December,2022</p>
                                <img src={images.SideV} className='mr-4 hover:cursor-pointer ml-auto h-6 sm:h-10 w-8'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='articles-news' className='w-5/6 md:w-2/3 '>
                    <p className='font-[DMSerifDisplay] text-center font-normal mt-10 text-4xl'>Articles & News</p>
                    <div className='h-auto grid grid-cols-3 gap-3'>
                    <div onClick={Details} className='bg-white hover:bg-[#E7E7E7]  cursor-pointer h-full flex flex-col w-auto rounded-t-3xl'>
                            <img src={images.A1} className='mt-4 ml-4 mr-4 w-auto rounded-t-3xl'></img>
                            <p className='ml-4 mt-4 text-xs sm:text-lg md:text-2xl'>Let’s Get Solution For Building Construction Work.</p>
                            <div className='flex flex-row items-center ml-4 mt-4'>
                                <p className='font-light text-[9px] md:text-sm'>26 December,2022</p>
                                <img src={images.Vectorb} className='mr-4 hover:cursor-pointer ml-auto h-4 w-2 md:w-4'></img>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-[#E7E7E7] cursor-pointer h-full flex flex-col w-auto rounded-t-3xl'>
                            <img src={images.A2} className='mt-4 ml-4 mr-4 w-auto rounded-t-3xl'></img>
                            <p className='ml-4 mt-4 text-xs sm:text-lg md:text-2xl'>Low Cost Latest Invented Interior Designing Ideas.</p>
                            <div className='flex flex-row items-center ml-4 mt-4'>
                                <p className='font-light text-[9px] md:text-sm'>22 November,2023</p>
                                <img src={images.Vectorb} className='mr-4 hover:cursor-pointer ml-auto h-4 w-2 md:w-4'></img>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-[#E7E7E7] cursor-pointer h-full flex flex-col w-auto rounded-t-3xl'>
                            <img src={images.A3} className='mt-4 ml-4 mr-4 w-auto rounded-t-3xl'></img>
                            <p className='ml-4 mt-4 text-xs sm:text-lg md:text-2xl'>Best For Any Office & Business Interior Solution.</p>
                            <div className='flex flex-row items-center ml-4 mt-4'>
                                <p className='font-light text-[9px] md:text-sm'>4 December,2023</p>
                                <img src={images.Vectorb} className='mr-4 hover:cursor-pointer ml-auto h-4 w-2 md:w-4'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articales