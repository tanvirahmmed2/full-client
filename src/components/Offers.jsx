import React from 'react'
import exclusive_image from "./Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='w-full h-[65vh] flex m-auto px-4 m-b-36 overflow-hidden rounded-2xl bg-slate-200 flex-row items-center justify-center'>
      <div className='flex-1 flex flex-col justify-center gap-6'>
        <h1 className='text-black text-6xl font-semibold'>Exclusive</h1>
        <h1 className='text-black text-6xl font-semibold'>Only on best selling</h1>
        <button className='w-44 h-20 rounded-xl border-none bg-red-600 text-white font-semibold'>Check now</button>
      </div>
      <div className='flex-1 flex flex-col justify-end'>
        <img src={exclusive_image} alt="" className='scale-75' />
      </div>
    </div>
  )
}

export default Offers
