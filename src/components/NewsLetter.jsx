import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-2/3 h-[40vh] flex flex-col items-center justify-center m-auto m-b-28 gap-6'>
      <h1 className='text-4xl font-semibold'>GET EXCLUSIVE OFFER IN YOU EMAIL</h1>
      <p className='text-2xl '>Subscribe to our newsletter and stay update</p>
      <div className='flex items-center justify-center flex-col md:flex-row w-2/3 gap-6'>
        <input type="email" className='w-96 ml-10 px-5 p-2 outline-none border-2 rounded-xl' />
        <button className='w-36 px-5 p-2 bg-black cursor-pointer text-white rounded-xl'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
