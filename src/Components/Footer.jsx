import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className="hidden max-w-screen-xl mx-auto mt-20 py-10 px-2 md:flex gap-32 ">
            <div className="basis-3/4">
            <h1 className="text-[12vw] font-semibold leading-none tracking-tight">refokus.</h1>
            </div>
            <div className="basis-1/2  flex gap-4">

            <div className='basis-1/3 '>
            <h4 className="mt-3 mb-8 capitalize text-zinc-500">socials</h4>
            {["instagram", "twitter", "LinkedIn"].map((item,index) => <a key ={index} className ="block mt-2 capitalize" href=''>{item}</a>)}
            </div>

            <div className='basis-1/3'>
            <h4 className=" mt-3 mb-8 capitalize text-zinc-500">sitemap</h4>
            {["home", "work", "careers",].map((item,index) => <a key ={index} className ="block mt-2 capitalize" href=''>{item}</a>)}
            </div>

            <div className="mt-10 basis-1/2 flex flex-col items-end gap-5">
            <p className='text-sm text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
            </div>
            </div>
        </div>


        <div className="md:hidden w-screen mx-auto py-10 flex flex-col px-3 gap-10 ">
            <div className="">
            <h1 className="text-[13vw] font-semibold leading-none tracking-tight">refokus.</h1>
            </div>
            <div className="flex gap-4">

            <div className='basis-1/3'>
            <h4 className="mb-10 capitalize text-zinc-500">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item,index) => <a key ={index} className ="block mt-2 capitalize" href=''>{item}</a>)}
            </div>

            <div className='basis-1/3'>
            <h4 className="mb-10 capitalize text-zinc-500">sitemap</h4>
            {["home", "work", "careers",].map((item,index) => <a key ={index} className ="block mt-2 capitalize" href=''>{item}</a>)}
            </div>

            <div className="mt-10 basis-1/2 flex flex-col items-start justify-center gap-5">
            <p className='text-sm '>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer