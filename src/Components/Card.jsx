import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl ${width}
    min-h-[20rem] flex flex-col justify-between transition-colors duration-200 hover:${hover}`}
    >
      <div className="w-full  transition-all duration-200 hover:px-1">
        <div className="w-full flex justify-between items-center">
          {para && <h3>Up Next: News</h3>}
          {start && <h3>Get In Touch</h3>}
          <IoIosArrowRoundForward />
        </div>
        {start && (
          <h1 className="text-3xl font-medium mt-5">
            Let’s get to it,
            <br />
            together.
          </h1>
        )}
        {para && (
          <h1 className="text-3xl font-medium mt-5">
            Insights and behind <br /> the scenes
          </h1>
        )}
      </div>
      <div className="w-full mt-24 ">
        {start && (
          <>
            <h1 className="text-7xl font-semibold tracking-tight leading-none ">
              Start a Project
            </h1>
            <button 
             className="group w-[8rem] h-10 rounded-full mt-6 py-2 px-5 border-[1px] border-zinc-50 overflow-hidden">
                 <div  className={`  flex flex-col justify-between gap-3 transition-transform duration-200
                    group-hover:-translate-y-9 : `} >
                        <h3>Contact us</h3>
                        <h3>Show more</h3>
                    </div>
                    
              
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
