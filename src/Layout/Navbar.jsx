import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../assts/images/index';

const Navbar = () => {
    const navigate = useNavigate()
    const gpPages = () => {
        navigate('/')

    }
    const goServices = () => {
        navigate('/services')

    }
    const goHome = () => {
        navigate('/')

    }
    const goProjects = () => {
        navigate('/projects')

    }
    const goBlog = () => {
        navigate('/articales')

    }
    const goContect = () => {
        navigate('/contactus')

    }


    return (
        <>
            <div className="flex  flex-row justify-between items-center  w-auto font-['DM_Serif_Display'] ">
                <div className="flex flex-row gap-2 w-2/5 items-start">
                    <img
                        src={images.symbol}
                        className="w-12"
                    />
                    <div className="text-4xl leading-[50px] text-[#292f36]">SELHONO</div>
                </div>
                <div className="flex font-['Jost'] w-[370px]  ml-auto mr-0  hover:cursor-pointer text-xl font-medium leading-[25px]  ">
                    <button data-collapse-toggle="navbar-default " type="button" class=" inline-flex items-center ml-auto mr-0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="#navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <span id="navbar-default" className="font-['Jost'] hidden   text-[#292f36] md:flex">
                        <ul className="flex justify-start space-x-2">
                            <li className="hover:text-[#C76904]" onClick={goHome}>  Home</li>
                            <li className="hover:text-[#C76904]" onClick={gpPages}>Pages</li>
                            <li className="hover:text-[#C76904]" onClick={goServices}>Services</li>
                            <li className="hover:text-[#C76904]" onClick={goProjects}>Project</li>
                            <li className="hover:text-[#C76904]" onClick={goBlog}>Blog</li>
                            <li className="hover:text-[#C76904] " onClick={goContect}>Contact</li>
                        </ul>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar