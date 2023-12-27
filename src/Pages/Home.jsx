import React from 'react';
import { images } from '../assts/images/index';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()
    const goArticle = () => {
        navigate("/articales")
    }
    return (
        <>
            <div id="peoplethiks" className="w-full justify-center h-auto " >
                <div id="home" className=" place-content-center flex flex-row w-full ">
                    <div className="bg-home  bg-no-repeat h-[250px] relative sm:h-[350px] md:h-[550px] w-4/6  bg-cover mt-[20px] rounded-br-[80px] bg-blend-normal flex flex-col gap-6 font-['Inter'] items-start pl-6 py-20">
                        <div className="flex-col  text-left absolute top-8  sm:top-14 md:top-20 lg:top-24 left-6 sm:left-10 md:left-16 lg:left-20 ">
                            <div className="w-5/6  font-[DM Serif Display] text-white ml-4 text-3xl md:text-5xl font-semibold ">
                                Let's make your
                                <br />
                                home beautiful together

                            </div>
                            <div className="text-white hidden sm:block font-[Inter] w-7/12 ml-4 mt-5 font-medium text-base md:text-xl">
                                There are many variations of the passages of lorem Ipsum fromavailable, majority.
                            </div>
                            <button className="bg-[#CDA274] hover:bg-[#a77e52] text-white w-28 sm:w-36 ml-4 mt-3 h-10 items-center flex flex-row justify-center rounded-lg gap-2">
                                <div className="text-center text-sm sm:text-lg font-medium sm:font-semibold  leading-[22.5px] text-white">
                                    Get Started
                                </div>
                                <img src={images.Vector}
                                    className="w-3 sm:w-4 mt-0.75"
                                ></img>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='place-content-center flex flex-row w-full'>
                    <div id='work' className="text-center space-x-0 place-content-center flex-wrap flex flex-row w-4/6  mt-10 ">
                        <div className="flex-col w-1/3 ">
                            <div className='w-11/12'>
                                <div className="font-[DM Serif Display] font-medium sm:text-lg text-base md:text-xl text-[#292F36]">
                                    Project Plan
                                </div>
                                <div className="md:text-base sm:text-sm hidden sm:block text-xs font-normal text-[#4D5053] mt-2.5">
                                    There are many variations of the passages of lorem Ipsum from
                                    available, majority.
                                </div>
                                <div className="flex  flex-row justify-center text-xs md:text-base sm:text-sm  mt-1 text-center hover:cursor-pointer">
                                    Read more
                                    <img className="w-2.5 ml-0.5 mt-1"
                                        src={images.Vectorb}>
                                    </img>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col w-1/3 ">
                            <div className='w-11/12'>
                                <div className="font-[DM Serif Display] font-medium sm:text-lg text-base md:text-xl text-[#292F36]">
                                    Interior Work
                                </div>
                                <div className="md:text-base sm:text-sm hidden sm:block text-xs font-normal text-[#4D5053] mt-2.5">
                                    There are many variations of the passages of lorem Ipsum from
                                    available, majority.
                                </div>
                                <div className="flex  flex-row justify-center text-xs md:text-base sm:text-sm  mt-1 text-center hover:cursor-pointer">
                                    Read more
                                    <img className="w-2.5 ml-0.5 mt-1"
                                        src={images.Vectorb}>
                                    </img>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col w-1/3 ">
                            <div className='w-11/12'>
                                <div className="font-[DM Serif Display] font-medium sm:text-lg text-base md:text-xl text-[#292F36]">
                                    Realization Interiar
                                </div>
                                <div className="md:text-base sm:text-sm hidden sm:block text-xs font-normal text-[#4D5053] mt-2.5">
                                    There are many variations of the passages of lorem Ipsum from
                                    available, majority.
                                </div>
                                <div className="flex  flex-row justify-center text-xs md:text-base sm:text-sm  mt-1 text-center hover:cursor-pointer">
                                    Read more
                                    <img className="w-2.5 ml-0.5 mt-1"
                                        src={images.Vectorb}>
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Frame-2" className="justify-center text-center  flex flex-row w-full  mt-10 ">
                    <div className="bg-right hidden sm:block bg-substract w-4/6 h-[550px] ">
                        <div className="bg-white w-[525px] h-full rounded-tl-[250px] rounded-tr-[300px]" >
                            <div className="bg-left bg-fram2 w-[452px] flex mr-10 ml-0 h-full rounded-tr-[300px] ">
                                <div className="flex flex-col mt-4 justify-start ml-14  w-3/5 ">
                                    <div className="text-4xl w-[300px] text-left items-start font-['DM_Serif_Display']  font-semibold mt-10  text-white">
                                        We create art
                                        <br />
                                        for modern life
                                    </div>
                                    <div className="text-lg w-[300] text-left  items-start font-['Jost'] justify-center font-medium mt-3  text-white">
                                        There are many variations of the passages of lorem Ipsum from
                                        available, majority.
                                    </div>
                                    <div className="flex-col">
                                        <div className="w-56 h-[60px] flex justify-center text-left items-center text-white font-['Jost']  mt-5">
                                            <img className="h-[60px] w-[60px] text-left" src={images.CallIcon}></img>
                                            <div className="w-2/3 ml-3 ">
                                                <p className="font-bold text-[20px]">012345678</p>
                                                <p className="font-medium text-[18px]">Call Us Anytime</p>
                                            </div>
                                        </div>
                                        <div className="w-[170px] h-14 hover:bg-[#a77e52] bg-[#CDA274] rounded-2xl justify-center text-center items-center text-white font-['Jost']  mt-8">
                                            <button className="flex items-center font-medium text-lg justify-center p-3">
                                                Get Free Estimate
                                                <img src={images.Vector}
                                                    className="w-3 ml-1"
                                                ></img>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row place-content-center sm:mt-20 md:mt-28'>
                    <div id="peoplethiks" className="w-2/3 flex-col space-y-4 flex justify-center text-center p-3 h-auto rounded-3xl sm:rounded-[65px] bg-[#D8A876] " >
                        <div className="w-auto  sm:leading-[50px] sm:h-24 text-white place-content-center text-center font-[DM Serif Display] font-medium sm:text-3xl text-xl md:text-4xl justify-center">
                            What the People Thinks<br /> About Us
                        </div>
                        <div className="grid grid-rows-3 md:grid-cols-3 sm:grid-rows-1 ml-5 gap-y-3 sm:gap-3 mr-5">
                            <div className="w-full flex-col h-auto  min-h-60 bg-white rounded-3xl mt-5">
                                <div className="ml-5  items-center mt-6 mr-5 flex flex-col">
                                    <div className="flex-col lg:flex-row w-max flex items-center  ">
                                        <img src={images.Photo} className="rounded-full md:h-10 h-14 lg:h-14"></img>
                                        <div className="font-[DM Serif Display] md:text-lg lg:text-xl leading-6 md:ml-1 lg:ml-4 font-normal">
                                            Natasha
                                            <br />
                                            <span className="text-left font-[Jost] md:text-sm lg:text-base font-normal">Moscow, Russia</span>
                                        </div>
                                    </div>
                                    <div className='font-normal text-center lg:text-start font-sans text-base mt-1'>
                                        Lorem Ipsum is simply dummy
                                        text of the typesetting industry.
                                        Ipsum has been.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex-col h-auto  min-h-60 bg-white rounded-3xl mt-5">
                                <div className="ml-5 mt-6 mr-5 items-center flex flex-col">
                                    <div className="flex-col lg:flex-row w-max flex items-center  ">
                                        <img src={images.Photo} className="rounded-full md:h-10 h-14 lg:h-14"></img>
                                        <div className="font-[DM Serif Display] md:text-lg lg:text-xl leading-6 md:ml-1 lg:ml-4 font-normal">
                                            Natasha
                                            <br />
                                            <span className="text-left font-[Jost] md:text-sm lg:text-base font-normal">Moscow, Russia</span>
                                        </div>
                                    </div>
                                    <div className='font-normal text-center lg:text-start font-sans text-base mt-1'>
                                        Lorem Ipsum is simply dummy
                                        text of the typesetting industry.
                                        Ipsum has been.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex-col h-auto min-h-60 bg-white rounded-3xl mt-5">
                                <div className="ml-5 mt-6 items-center mr-5 flex flex-col">
                                    <div className="flex-col lg:flex-row flex w-max items-center  ">
                                        <img src={images.Photo} className="rounded-full md:h-10 h-14 lg:h-14"></img>
                                        <div className="font-[DM Serif Display] md:text-lg lg:text-xl leading-6 md:ml-1 lg:ml-4 font-normal">
                                            Natasha
                                            <br />
                                            <span className="text-left font-[Jost] md:text-sm lg:text-base font-normal">Moscow, Russia</span>
                                        </div>
                                    </div>
                                    <div className='font-normal text-center lg:text-start font-sans text-base mt-1'>
                                        Lorem Ipsum is simply dummy
                                        text of the typesetting industry.
                                        Ipsum has been.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row place-content-center'>
                    <div id='Follow Projects' className='flex flex-col place-content-center items-center mt-16 sm:mt-24 md:mt-32 space-y-10 md:space-y-32'>
                        <div className='sm:w-[400px] w-[350px] md:w-[500px] flex flex-col h-44 text-center   ml-[168px] mr-[168px]'>
                            <p className='font-serif font-medium sm:text-3xl text-2xl md:text-5xl'>
                                Follow Our Projects
                            </p>
                            <p className='font-[Jost] font-normal text-base sm:text-lg mt-5'>
                                It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
                            </p>
                        </div>
                        <div className='flex flex-col place-content-center justify-center items-center w-full md:flex-row md:space-x-[102px]'>
                            <div className='w-4/12 h-[358px]'>
                                <img src={images.P4}>
                                </img>
                                <div className='flex flex-row h-16 mt-3  content-center'>
                                    <div>
                                        <p className='font-serif font-normal text-2xl'>Modern bedroom</p>
                                        <p className='font-[Jost] font-light text-lg'>Decor / Artchitecture</p>
                                    </div>
                                    <img src={images.Arrow} className='hover:cursor-pointer h-14 w-14 mr-0 ml-auto'></img>
                                </div>
                            </div>
                            <div className='  w-4/12 h-[358px]'>
                                <img src={images.P2}>
                                </img>
                                <div className='flex flex-row h-16 mt-3  content-center'>
                                    <div>
                                        <p className='font-serif font-normal text-2xl'>Modern bedroom</p>
                                        <p className='font-[Jost] font-light text-lg'>Decor / Artchitecture</p>
                                    </div>
                                    <img src={images.Arrow} className='h-14 hover:cursor-pointer w-14 mr-0 ml-auto'></img>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col place-content-center justify-center items-center w-full md:flex-row md:space-x-[102px]'>
                            <div className='w-4/12 h-[358px]'>
                                <img src={images.P1}>
                                </img>
                                <div className='flex flex-row h-16 mt-3  content-center'>
                                    <div>
                                        <p className='font-serif font-normal text-2xl'>Modern bedroom</p>
                                        <p className='font-[Jost] font-light text-lg'>Decor / Artchitecture</p>
                                    </div>
                                    <img src={images.Arrow} className='h-14 hover:cursor-pointer w-14 mr-0 ml-auto'></img>
                                </div>
                            </div>
                            <div className='w-4/12 h-[358px]'>
                                <img src={images.P3}>
                                </img>
                                <div className='flex flex-row h-16 mt-3  content-center'>
                                    <div>
                                        <p className='font-serif font-normal text-2xl'>Modern bedroom</p>
                                        <p className='font-[Jost] font-light text-lg'>Decor / Artchitecture</p>
                                    </div>
                                    <img src={images.Arrow} className='h-14 hover:cursor-pointer w-14 mr-0 ml-auto'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row place-content-center'>
                    <div id="States" className='w-2/3 h-30 space-x-5 justify-center text-cente flex flex-row mt-16 sm:mt-24 md:mt-32 ml-9  '>
                        <div className='text-center h-20'>
                            <p className='font-bold text-[#CDA274] font-serif text-2xl sm:text-3xl md:text-5xl'>12</p>
                            <p className='font-light  mt-3 font-[Josh] text-sm md:text-base'> Years Of Experiance</p>
                        </div>
                        <div
                            id="LineRoot"
                            className="border-solid border-r-2 border-[#cda274] w-2 h-16"
                        />
                        <div className='text-center h-20'>
                            <p className='font-bold text-[#CDA274] font-serif text-2xl sm:text-3xl md:text-5xl'>1074</p>
                            <p className='font-light mt-3  font-[Josh] text-sm md:text-base'> Success Project</p>
                        </div>
                        <div
                            id="LineRoot"
                            className="border-solid border-r-2 border-[#cda274] w-2 h-16"
                        />
                        <div className='text-center h-20'>
                            <p className='font-bold text-[#CDA274] font-serif text-2xl sm:text-3xl md:text-5xl'>98</p>
                            <p className='font-light  mt-3 font-[Josh] text-sm md:text-base'> Active Project</p>
                        </div>
                        <div
                            id="LineRoot"
                            className="border-solid border-r-2 border-[#cda274] w-2 h-16"
                        />
                        <div className='text-center h-20'>
                            <p className='font-bold text-[#CDA274] font-serif text-2xl sm:text-3xl md:text-5xl'>583</p>
                            <p className='font-light  mt-3 font-[Josh] text-sm md:text-base'> Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row mt-14 place-content-center items-center'>
                <div id='articles-news' className='w-5/6 md:w-2/3 '>
                    <p className='font-[DMSerifDisplay] text-center font-normal mt-10 text-4xl'>Articles & News</p>
                    <div className='h-auto grid grid-cols-3 gap-3'>
                    <div onClick={goArticle} className='bg-white hover:bg-[#E7E7E7]  cursor-pointer h-full flex flex-col w-auto rounded-t-3xl'>
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
            </div>


        </>

    )
}

export default Home





