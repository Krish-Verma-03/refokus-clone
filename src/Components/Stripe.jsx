import React from 'react'

function Stripe({val}) {
  return (
  <>
    <div className='hidden w-[16rem] px-8 py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 md:flex justify-between items-center '>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.num}</span>
    </div>
    <div className='md:hidden w-[16rem] shrink-0 px-8 mt-20  py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center  '>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.num}</span>
    </div>
    </>
  )
}

export default Stripe