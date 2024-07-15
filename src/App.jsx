import { useState } from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Swipe from './Components/Swipe'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import { RemoveScrollBar } from 'react-remove-scroll-bar'

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className='w-full text-white min-h-screen  bg-[#000000] font-["satoshi_variable"] overflow-x-hidden'>
        
        <Navbar />
         <Work /> 
        <Stripes /> 
        <Products />
        <Swipe />
       <Marquees />
        <Cards />
        <Footer /> 
        
      </div>
      
    </>
  )
}

export default App
