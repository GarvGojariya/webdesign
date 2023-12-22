import React from 'react';
import symbol from '../Images/symbol.svg';
import Search from '../Images/Search.svg'

const Navbar = () => {
    return (
        <>
            <div className="flex flex-row justify-between w-full font-['DM_Serif_Display'] items-start">
                <div className="flex flex-row gap-2 w-1/5 items-start">
                    <img
                        src={symbol}
                        className="w-12"
                    />
                    <div className="text-4xl leading-[50px] text-[#292f36]">SELHONO</div>
                </div>
                <div className="flex flex-row  mt-4 w-1/3  font-['Jost'] items-end hover:cursor-pointer">
                    <div className="flex text-center text-xl font-medium leading-[25px]   text-[#c76904]">

                        <span className="font-['Jost'] text-[#292f36] flex">
                            <ul className="flex justify-start space-x-4">
                                <li className="hover:text-[#C76904]">Home</li>
                                <li className="hover:text-[#C76904]">Pages</li>
                                <li className="hover:text-[#C76904]">Services</li>
                                <li className="hover:text-[#C76904]">Project</li>
                                <li className="hover:text-[#C76904]">Blog</li>
                                <li className="hover:text-[#C76904]">Contact</li></ul>
                        </span>
                    </div>
                    <img
                        src={Search}
                        id="Search"
                        className="mt-px ml-3 h-5 w-5"
                    />
                </div>
            </div>
        </>
    )
}

export default Navbar