import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer'

const Layout = ({children}) => {
  return (
    <div className='relative'>
    <Navbar/>
    {children}
    <Footer/>
    </div>
  )
}

export default Layout