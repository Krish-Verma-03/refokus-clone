import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

function Button({title ="Start Project"}) {

 
  
  return (
    <div className='w-fit flex px-5 py-2 gap-3 justify-between items-center rounded-full bg-zinc-100 text-black'>
        <span>{title} </span>
        <BsArrowReturnRight className='text-sm' />
        
    </div>
  )
}

export default Button