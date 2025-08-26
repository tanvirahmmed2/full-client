import React from 'react'
import star_icon from "../components/Assets/star_icon.png"
import star_dull_icon from "../components/Assets/star_dull_icon.png"
const ProductDisplay = (props) => {
    const { product } = props
    return (
        <div  className='w-full flex flex-col py-8 lg:flex-row gap-8'>
            <div className='w-full flex flex-row items-start justify-center gap-4'>
                <div className='flex flex-col items-center gap-2 justify-center'>
                    <img src={product.image} alt="" className='h-[90px]'/>
                    <img src={product.image} alt="" className='h-[90px]'/>
                    <img src={product.image} alt="" className='h-[90px]'/>
                    <img src={product.image} alt="" className='h-[90px]'/>
                </div>
                <div>
                    <img src={product.image} alt="" className='h-96' />
                </div>
            </div>


            <div className='w-full flex  flex-col items-start justify-center gap-6'>
                <h1>{product.name}</h1>
                <div className='flex flex-row gap-2 '>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className='flex flex-row items-center juc gap-4'>
                    <div className='text-3xl font-semibold' >
                        ${product.new_price}
                    </div>
                    <div className='text-xl font-semibold text-red-600'>
                        ${product.old_price}
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis esse illo quia sapiente maiores, doloremque obcaecati ipsum, est rerum at accusamus delectus iure optio consequatur dignissimos sunt repudiandae. Quod, maxime soluta provident ducimus praesentium tempore totam quas recusandae architecto odit atque expedita corporis quasi? Voluptas voluptatem facilis quod consectetur dolores ipsam quisquam, vel officia praesentium sequi optio animi quas expedita ratione, distinctio mollitia cupiditate reiciendis pariatur dolor esse ducimus nisi, explicabo odio excepturi. Tempore nemo modi est in libero debitis voluptatum accusamus earum!
                </div>
                <div className='flex flex-col border-2 p-2 gap-2 rounded-xl'>
                    select size
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <p className='p-1 px-2 border-2 rounded-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer'>S</p>
                        <p className='p-1 px-2 border-2 rounded-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer'>M</p>
                        <p className='p-1 px-2 border-2 rounded-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer'>L</p>
                        <p className='p-1 px-2 border-2 rounded-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer'>Xl</p>
                        <p className='p-1 px-2 border-2 rounded-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer'>2XL</p>
                    </div>
                </div>
                <button className='p-1 px-2 border-2 rounded-xl hover:bg-black hover:text-white transition duration-500'>Add to cart</button>
                <p><span>Category: </span> <span>{product.category}</span></p>
                <p><span>Tags: </span> <span>Modern, Latest</span></p>

            </div>

        </div>
    )
}

export default ProductDisplay
