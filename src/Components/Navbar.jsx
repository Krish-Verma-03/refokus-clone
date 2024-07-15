import React, { useState } from 'react';
import Button from './Button';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between  items-center text-white border-b-[1px] border-zinc-700'>
      <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="Logo"  />
      <div className="hidden md:flex items-center gap-14">
        {["Home", "Work", "About", "News", "", "Careers"]
          .map((item, index) => (
            <a href="#" key={index} className='text-sm flex gap-1 items-center'>
              {item.length === 0 && (<span className="w-[2px] h-8 bg-zinc-800"></span>)}
              {index === 1 && (<span style={{ boxShadow: "0 0 0.45em #00FF19" }} className='inline-block bg-[#00FF19] rounded-full w-[4px] h-[4px] '></span>)}
              {item}
            </a>
          ))}
      </div>
      <div className="hidden md:block"> 

      <Button  />
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? (<RxCross2 className='text-xl' />):(<IoMenu className='text-xl' />)}
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 h-screen top-20 left-0 w-full bg-zinc-900 text-white flex flex-col items-start px-3 gap-6 py-6 md:hidden ">
          {["Home", "Work", "About", "News", "Careers"]
            .map((item, index) => (
              <>
              <a href="#" key={index} className='font-medium lowercase text-2xl'>
                {item}
              </a>
              <hr className='border-zinc-700 w-full h-[1px]'/>
              </>
            ))}
            <div className='mx-auto'>
              <Button />
            </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
