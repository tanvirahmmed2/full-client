import React from 'react'
import star_icon from "../components/Assets/star_icon.png"
import star_dull_icon from "../components/Assets/star_dull_icon.png"
const ProductDisplay = (props) => {
    const { product } = props
    return (
        <div  className='w-full flex flex-col py-8 lg:flex-row'>
            <div className='w-full flex '>
                <div>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div>
                    <img src={product.image} alt="" />
                </div>
            </div>


            <div className='w-full'>
                <h1>{product.name}</h1>
                <div className='flex flex-row gap-2'>
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
                <div>
                    select size
                    <div>
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>Xl</p>
                        <p>2XL</p>
                    </div>
                </div>
                <button>Add to cart</button>
                <p><span>Category: </span> <span>{product.category}</span></p>
                <p><span>Tags: </span> <span>Modern, Latest</span></p>

            </div>

        </div>
    )
}

export default ProductDisplay
