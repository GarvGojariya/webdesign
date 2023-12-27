import React from 'react';
import { images } from '../assts/images/index';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  const goTeam = () => {
    navigate("/team")
  }
  return (
    <>
      <div className=' min-w-full items-center flex justify-center place-content-center '>
        <div className=' w-full md:w-2/3 h-auto mt-10 ml-10 md:ml-0 place-content-start md:place-content-center md:space-x-3 flex flex-col flex-wrap md:flex-row space-y-2'>
          <div className='flex flex-col w-1/3'>
            <div className="flex flex-row gap-2 w-1/5 items-center">
              <img
                src={images.symbol}
                className="w-8 h-8"
              />
              <p className="text-3xl leading-[50px] text-[#292f36]">SELHONO</p>
            </div>
            <p className='mt-5 text-base w-full'>It is a long established fact that a reader will be distracted lookings.</p>
            <div className='flex flex-row w-full space-x-5 sm:space-x-10 mt-5 items-center'>
              <svg width="10" height="19" viewBox="0 0 10 19" fill="none" className='cursor-pointer' xmlns="http://www.w3.org/2000/svg">
                <path d="M9.18359 10.875L9.67578 7.64062H6.54688V5.53125C6.54688 4.61719 6.96875 3.77344 8.375 3.77344H9.81641V0.996094C9.81641 0.996094 8.51562 0.75 7.28516 0.75C4.71875 0.75 3.03125 2.33203 3.03125 5.14453V7.64062H0.148438V10.875H3.03125V18.75H6.54688V10.875H9.18359Z" fill="#292F36" />
              </svg>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" className='cursor-pointer' xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1367 4.09375C16.8398 3.56641 17.4727 2.93359 17.9648 2.19531C17.332 2.47656 16.5938 2.6875 15.8555 2.75781C16.6289 2.30078 17.1914 1.59766 17.4727 0.71875C16.7695 1.14062 15.9609 1.45703 15.1523 1.63281C14.4492 0.894531 13.5 0.472656 12.4453 0.472656C10.4062 0.472656 8.75391 2.125 8.75391 4.16406C8.75391 4.44531 8.78906 4.72656 8.85938 5.00781C5.80078 4.83203 3.05859 3.35547 1.23047 1.14062C0.914062 1.66797 0.738281 2.30078 0.738281 3.00391C0.738281 4.26953 1.37109 5.39453 2.39062 6.0625C1.79297 6.02734 1.19531 5.88672 0.703125 5.60547V5.64062C0.703125 7.43359 1.96875 8.91016 3.65625 9.26172C3.375 9.33203 3.02344 9.40234 2.70703 9.40234C2.46094 9.40234 2.25 9.36719 2.00391 9.33203C2.46094 10.8086 3.83203 11.8633 5.44922 11.8984C4.18359 12.8828 2.60156 13.4805 0.878906 13.4805C0.5625 13.4805 0.28125 13.4453 0 13.4102C1.61719 14.4648 3.55078 15.0625 5.66016 15.0625C12.4453 15.0625 16.1367 9.47266 16.1367 4.58594C16.1367 4.41016 16.1367 4.26953 16.1367 4.09375Z" fill="#292F36" />
              </svg>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className='cursor-pointer' xmlns="http://www.w3.org/2000/svg">
                <path d="M3.64062 16.5V5.98828H0.371094V16.5H3.64062ZM1.98828 4.58203C3.04297 4.58203 3.88672 3.70312 3.88672 2.64844C3.88672 1.62891 3.04297 0.785156 1.98828 0.785156C0.96875 0.785156 0.125 1.62891 0.125 2.64844C0.125 3.70312 0.96875 4.58203 1.98828 4.58203ZM15.8398 16.5H15.875V10.7344C15.875 7.92188 15.2422 5.74219 11.9375 5.74219C10.3555 5.74219 9.30078 6.62109 8.84375 7.42969H8.80859V5.98828H5.67969V16.5H8.94922V11.2969C8.94922 9.92578 9.19531 8.625 10.8828 8.625C12.5703 8.625 12.6055 10.1719 12.6055 11.4023V16.5H15.8398Z" fill="#292F36" />
              </svg>
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" className=' cursor-pointer' xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 4.60742C6.125 4.60742 4.23242 6.53711 4.23242 8.875C4.23242 11.25 6.125 13.1426 8.5 13.1426C10.8379 13.1426 12.7676 11.25 12.7676 8.875C12.7676 6.53711 10.8379 4.60742 8.5 4.60742ZM8.5 11.6582C6.97852 11.6582 5.7168 10.4336 5.7168 8.875C5.7168 7.35352 6.94141 6.12891 8.5 6.12891C10.0215 6.12891 11.2461 7.35352 11.2461 8.875C11.2461 10.4336 10.0215 11.6582 8.5 11.6582ZM13.918 4.45898C13.918 3.90234 13.4727 3.45703 12.916 3.45703C12.3594 3.45703 11.9141 3.90234 11.9141 4.45898C11.9141 5.01562 12.3594 5.46094 12.916 5.46094C13.4727 5.46094 13.918 5.01562 13.918 4.45898ZM16.7383 5.46094C16.6641 4.125 16.3672 2.9375 15.4023 1.97266C14.4375 1.00781 13.25 0.710938 11.9141 0.636719C10.541 0.5625 6.42188 0.5625 5.04883 0.636719C3.71289 0.710938 2.5625 1.00781 1.56055 1.97266C0.595703 2.9375 0.298828 4.125 0.224609 5.46094C0.150391 6.83398 0.150391 10.9531 0.224609 12.3262C0.298828 13.6621 0.595703 14.8125 1.56055 15.8145C2.5625 16.7793 3.71289 17.0762 5.04883 17.1504C6.42188 17.2246 10.541 17.2246 11.9141 17.1504C13.25 17.0762 14.4375 16.7793 15.4023 15.8145C16.3672 14.8125 16.6641 13.6621 16.7383 12.3262C16.8125 10.9531 16.8125 6.83398 16.7383 5.46094ZM14.957 13.7734C14.6973 14.5156 14.1035 15.0723 13.3984 15.3691C12.2852 15.8145 9.6875 15.7031 8.5 15.7031C7.27539 15.7031 4.67773 15.8145 3.60156 15.3691C2.85938 15.0723 2.30273 14.5156 2.00586 13.7734C1.56055 12.6973 1.67188 10.0996 1.67188 8.875C1.67188 7.6875 1.56055 5.08984 2.00586 3.97656C2.30273 3.27148 2.85938 2.71484 3.60156 2.41797C4.67773 1.97266 7.27539 2.08398 8.5 2.08398C9.6875 2.08398 12.2852 1.97266 13.3984 2.41797C14.1035 2.67773 14.6602 3.27148 14.957 3.97656C15.4023 5.08984 15.291 7.6875 15.291 8.875C15.291 10.0996 15.4023 12.6973 14.957 13.7734Z" fill="#292F36" />
              </svg>
            </div>
          </div>
          <div className='flex flex-col text-left  space-y-2'>
            <p className='font-medium text-xl '>Pages</p>
            <p className='font-normal text-base cursor-pointer'>About Us </p>
            <p className='font-normal text-base cursor-pointer'>Our Projects</p>
            <p onClick={goTeam} className='font-normal text-base cursor-pointer'> Our Team</p>
            <p className='font-normal text-base cursor-pointer'> Contact Us</p>
            <p className='font-normal text-base cursor-pointer'> Services</p>
          </div>
          <div className='flex flex-col text-left  space-y-2'>
            <p className='font-medium text-xl '>Services</p>
            <p className='font-normal text-base cursor-pointer'>Kitchan  </p>
            <p className='font-normal text-base cursor-pointer'>Living Area </p>
            <p className='font-normal text-base cursor-pointer'>Bathroom</p>
            <p className='font-normal text-base cursor-pointer'> Dinning Hall</p>
            <p className='font-normal text-base cursor-pointer'> Bedroom</p>
          </div>
          <div className='flex flex-col text-left w-1/3  space-y-2'>
            <p className='font-medium text-xl'>Contact</p>
            <p className='font-normal text-base'>55 East Birchwood Ave. Brooklyn, <br />New York 1120</p>
            <p className='font-normal text-base'>contact@selhono.com</p>
            <p className='font-normal text-base'>(123) 456 - 7890</p>
          </div>
        </div>
      </div>
      <div className='text-center text-sm mt-20'>Copyright © SELHONO</div>
    </>
  )
}

export default Footer