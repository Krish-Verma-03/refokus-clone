import React from 'react'
import Stripe from './Stripe'
import { motion } from 'framer-motion'

function Stripes() {
    const data =[
        {
        url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
        num : 11 
    },
    {
        url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
        num : 11 
    },
    {
        url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
        num : 11 
    },
    ]
  return (
    <div className='w-full  overflow-x-hidden whitespace-nowrap mt-4 '>
   
    <motion.div
            className="flex flex-shrink-0"
            initial ={{x:"0"}}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            <div className='  flex justify-start items-center '>
            {data.map((item, index)=>(
            
            
            <Stripe key={index} val = {item}/>
            
        ))}
        </div> 
            <div className='  flex justify-start items-center '>
            {data.map((item, index)=>(
            
            
            <Stripe key={index} val = {item}/>
            
        ))}
        </div> 
            <div className='  flex justify-start items-center '>
            {data.map((item, index)=>(
            
            
            <Stripe key={index} val = {item}/>
            
        ))}
        </div> 
            <div className='  flex  items-center '>
            {data.map((item, index)=>(
            
            
            <Stripe key={index} val = {item}/>
            
        ))}
        </div> 
             
            
        
        </motion.div>
    
    
        
        
        
    </div>
  )
}

export default Stripes