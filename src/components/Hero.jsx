import React from 'react'

import hand_icon from "../components/Assets/hand_icon.png"
import arrow_icon from "../components/Assets/arrow.png"
import hero_img from "../components/Assets/hero_image.png"

const Hero = () => {
    return (
        <div className='h-screen flex w-full flex-col items-center justify-between lg:flex-row '>

            <div className='flex-1 flex flex-col justify-center gap-5 p-44'>
                <h2 className='text-blue-600 text-2xl font-semibold'>New Arrival Only</h2>
                <div>
                    <div>
                        <p className='text-blue-600 text-6xl font-bold'>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p className='text-blue-600 text-6xl font-bold'>collections</p>
                    <p className='text-blue-600 text-6xl font-bold'>for everyone</p>
                </div>
                <div className='w-auto flex flex-row items-center justify-center bg-red-500 p-3 rounded-xl gap-6 text-white'>

                    <p>Latest</p>
                    <img src={arrow_icon} alt="" />

                </div>
            </div>
            <div className='flex flex-1 items-center justify-center'>
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero
