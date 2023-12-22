import React from 'react';
import { images } from '../assts/images/index';


const Home = () => {
    return (
        <>
            <div id="peoplethiks" className="w-[838px] h-[470px] justify-center place-content-center ml-64  " >

                <div id="home" className="flex place-content-center  flex-row w-full items-start">
                    <div className="bg-home  bg-no-repeat  h-[500px] w-[838px] bg-cover mt-[20px] rounded-br-[80px] bg-blend-normal flex flex-col gap-6 font-['Inter'] items-start pl-6 py-20">
                        <div className="flex-col">
                            <div className="w-[500px] font-[DM Serif Display] text-white ml-4  text-5xl font-semibold ">
                                Let's make your
                                <br />
                                home beautiful together

                            </div>
                            <div className="text-white font-[Inter] w-7/12 ml-4 mt-5 font-medium text-xl">
                                There are many variations of the passages of lorem Ipsum fromavailable, majority.
                            </div>

                            <button className="bg-[#CDA274] hover:bg-[#a77e52] text-white w-36 ml-4 mt-3 h-10 items-center flex flex-row justify-center rounded-lg gap-2">

                                <div className="text-center text-lg font-semibold  leading-[22.5px] text-white">
                                    Get Started
                                </div>
                                <img src={images.Vector}
                                    className="w-4 mt-0.75"
                                ></img>
                            </button>
                        </div>
                    </div>

                </div>

                <div id='work' className="justify-center text-center flex flex-row w-[838px]  mt-10 ">
                    <div className="flex-col w-1/3 ">
                        <div className="font-[DM Serif Display] font-normal text-xl  mt-1text-[#292F36]">
                            Project Plan
                        </div>
                        <div className="text-base font-normal text-[#4D5053] mt-2.5">
                            There are many variations of the passages of lorem Ipsum from
                            available, majority.
                        </div>
                        <div className="flex  flex-row justify-center mt-3 text-center hover:cursor-pointer">
                            Read more
                            <img className="w-2.5 ml-0.5 mt-1"
                                src={images.Vectorb}>
                            </img>
                        </div>
                    </div>
                    <div className="flex-col w-1/3 ">
                        <div className="font-[DM Serif Display] font-normal text-xl  mt-1text-[#292F36]">
                            Interior Work
                        </div>
                        <div className="text-base font-normal text-[#4D5053] mt-2.5">
                            There are many variations of the passages of lorem Ipsum from
                            available, majority.
                        </div>
                        <div className="flex  flex-row justify-center mt-3 text-center hover:cursor-pointer">
                            Read more
                            <img className="w-2.5 ml-0.5 mt-1"
                                src={images.Vectorb}>
                            </img>
                        </div>
                    </div>
                    <div className="flex-col w-1/3 ">
                        <div className="font-[DM Serif Display] font-normal text-xl  mt-1text-[#292F36]">
                            Realization
                        </div>
                        <div className="text-base font-normal text-[#4D5053] mt-2.5">
                            There are many variations of the passages of lorem Ipsum from
                            available, majority.
                        </div>
                        <div className="flex  flex-row justify-center mt-3 text-center hover:cursor-pointer">
                            Read more
                            <img className="w-2.5 ml-0.5 mt-1"
                                src={images.Vectorb}>
                            </img>
                        </div>
                    </div>
                </div>
                <div id="Frame-2" className="justify-center text-center  flex flex-row w-[838px]  mt-10 ">
                    <div className="bg-right bg-substract w-full ml-3/5 h-[450px] ">
                        <div className="bg-white w-[525px] h-[450px] rounded-tl-[250px] rounded-tr-[300px]" >
                            <div className="bg-left bg-fram2 w-[452px] flex mr-10 ml-0 h-[450px]  rounded-tr-[300px] ">
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
                <div id="peoplethiks" className="w-[838px] flex-col flex  h-[475px] mt-36 rounded-[65px] justify-center   bg-[#D8A876] " >
                    <div className="w-auto leading-[50px] h-24 text-white  text-center font-[DM Serif Display] font-medium text-4xl justify-center">
                        What the People Thinks<br /> About Us
                    </div>
                    <div className="flex-row flex justify-center ml-5 mr-5 mt-5 space-x-5 ">
                        <div className="w-64 flex-col h-60 bg-white rounded-3xl mt-5">
                            <div className="ml-5 mt-6 mr-5 flex flex-col">
                                <div className="flex-row flex items-center  ">
                                    <img src={images.Photo} className="rounded-full h-14"></img>
                                    <div className="font-[DM Serif Display] text-xl leading-6 ml-4 font-normal">
                                        Natasha
                                        <br />
                                        <span className="font-[Jost] text-base mt-1 font-normal">Moscow, Russia</span>
                                    </div>
                                </div>
                                <div className='font-normal font-sans text-base mt-3'>
                                    Lorem Ipsum is simply dummy
                                    text of the typesetting industry.
                                    Ipsum has been.
                                </div>
                            </div>
                        </div>
                        <div className="w-64 h-60 bg-white rounded-3xl mt-5">
                            <div className="ml-5 mt-6 mr-5 flex flex-col">
                                <div className="flex-row flex items-center  ">
                                    <img src={images.Photo} className="rounded-full h-14"></img>
                                    <div className="font-[DM Serif Display] text-xl leading-6 ml-4 font-normal">
                                        Natasha
                                        <br />
                                        <span className="font-[Jost] text-base mt-1 font-normal">Moscow, Russia</span>
                                    </div>
                                </div>
                                <div className='font-normal font-sans text-base mt-3'>
                                    Lorem Ipsum is simply dummy
                                    text of the typesetting industry.
                                    Ipsum has been.
                                </div>
                            </div>
                        </div>
                        <div className="w-64 h-60 bg-white rounded-3xl  mt-5">
                            <div className="ml-5 mt-6 mr-5 flex flex-col">
                                <div className="flex-row flex items-center  ">
                                    <img src={images.Photo} className="rounded-full h-14"></img>
                                    <div className="font-[DM Serif Display] text-xl leading-6 ml-4 font-normal">
                                        Natasha
                                        <br />
                                        <span className="font-[Jost] text-base mt-1 font-normal">Moscow, Russia</span>
                                    </div>
                                </div>
                                <div className='font-normal font-sans text-base mt-3'>
                                    Lorem Ipsum is simply dummy
                                    text of the typesetting industry.
                                    Ipsum has been.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-[838px] h-16 mt-32 space-x-5  flex flex-row'>
                    <img className='w-1/4 ho' src={images.Buffer}></img>
                    <img className='w-1/3' src={images.Bigcommerce}></img>
                    <img className='w-1/4' src={images.Uon}></img>
                    <img className='w-1/5' src={images.L4}></img>
                </div>
                <div id='Follow Projects' className='flex flex-col mt-32 space-y-24'>
                    <div className='w-[500px] flex flex-col h-44 text-center   ml-[168px] mr-[168px]'>
                        <p className='font-serif font-medium text-5xl'>
                            Follow Our Projects
                        </p>
                        <p className='font-[Jost] font-normal text-lg mt-5'>
                            It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
                        </p>
                    </div>
                    <div className='flex flex-row space-x-[102px]'>
                        <div className='w-[368px] h-[358px]'>
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
                        <div className=' flex flex-col w-[368px] h-[358px]'>
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
                    <div className='flex flex-row space-x-[102px]'>
                        <div className='w-[368px] h-[358px]'>
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
                        <div className=' flex flex-col w-[368px] h-[358px]'>
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
                <div id="States" className='w-[760px] h-30 space-x-5 justify-center text-cente flex flex-row mt-40 ml-9  '>
                    <div className='text-center h-20'>
                        <p className='font-bold text-[#CDA274] font-serif text-5xl'>12</p>
                        <p className='font-light  mt-3 font-[Josh] text-base'> Years Of Experiance</p>
                    </div>
                    <div
                        id="LineRoot"
                        className="border-solid border-r-2 border-[#cda274] w-2 h-16"
                    />
                    <div className='text-center h-20'>
                        <p className='font-bold text-[#CDA274] font-serif text-5xl'>1074</p>
                        <p className='font-light mt-3  font-[Josh] text-base'> Success Project</p>
                    </div>
                    <div
                        id="LineRoot"
                        className="border-solid border-r-2 border-[#cda274] w-2 h-16"
                    />
                    <div className='text-center h-20'>
                        <p className='font-bold text-[#CDA274] font-serif text-5xl'>98</p>
                        <p className='font-light  mt-3 font-[Josh] text-base'> Active Project</p>
                    </div>
                    <div
                        id="LineRoot"
                        className="border-solid border-r-2 border-[#cda274] w-2 h-16"
                    />
                    <div className='text-center h-20'>
                        <p className='font-bold text-[#CDA274] font-serif text-5xl'>583</p>
                        <p className='font-light  mt-3 font-[Josh] text-base'> Happy Customers</p>
                    </div>


                </div>
                <div id="Articles & News">
                    <div className='w-[500px] flex flex-col h-44 text-center mt-32  ml-[168px] mr-[168px]'>
                        <p className='font-serif font-medium text-5xl'>
                            Articles & News
                        </p>
                        <p className='font-[Jost] font-normal text-lg mt-5'>
                            It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.                        </p>
                    </div>
                    <div className='w-[838px] h-[380px] flex flex-row space-x-6 '>
                        <div className='bg-white hover:bg-[#E7E7E7] h-full w-[275px] rounded-t-3xl'>
                            <img src={images.A1} className='mt-4 ml-4 mr-4 w-[233px] rounded-t-3xl'></img>
                            <p className='ml-4 mt-4 text-2xl'>Let’s Get Solution For Building Construction Work.</p>
                            <div className='flex flex-row items-center ml-4 mt-4'>
                                <p className='font-light text-sm'>26 December,2022</p>
                                <img src={images.Arrow} className='mr-4 hover:cursor-pointer ml-auto h-8 w-8'></img>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-[#E7E7E7] h-full w-[275px] rounded-t-3xl'>
                            <img src={images.A2} className='mt-4 ml-4 mr-4 w-[233px] rounded-t-3xl'></img>
                            <p className='ml-4 mt-4 text-2xl'>Low Cost Latest Invented Interior Designing Ideas.</p>
                            <div className='flex flex-row items-center ml-4 mt-4'>
                                <p className='font-light text-sm'>22 November,2023</p>
                                <img src={images.Arrow} className='mr-4  hover:cursor-pointer ml-auto h-8 w-8'></img>
                            </div>
                        </div>
                        <div className='bg-white hover:bg-[#E7E7E7] h-full flex flex-col w-[275px] rounded-t-3xl'>
                            <img src={images.A3} className='mt-4 ml-4 mr-4 w-[233px] rounded-t-3xl'></img>
                            <p className='ml-4 mt-4 text-2xl'>Best For Any Office & Business Interior Solution.</p>
                            <div className='flex flex-row items-center ml-4 mt-4'>
                                <p className='font-light text-sm'>4 December,2023</p>
                                <img src={images.Arrow} className='mr-4 hover:cursor-pointer ml-auto h-8 w-8'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>

    )
}

export default Home





