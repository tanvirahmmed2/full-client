import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import remove_icon from "../components/Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start mt-6  gap-6">
      <h1 className="text-4xl font-semibold">Cart</h1>
      <div className="w-full grid grid-cols-6 p-4 border-black border-y-2">
        <p className="w-full flex items-center justify-center">Products</p>
        <p className="w-full flex items-center justify-center">Title</p>
        <p className="w-full flex items-center justify-center">Price</p>
        <p className="w-full flex items-center justify-center">Quantity</p>
        <p className="w-full flex items-center justify-center">Total</p>
        <p className="w-full flex items-center justify-center">Remove</p>
      </div>

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="w-full">
              <div className="w-full grid grid-cols-6 justify-items-center overflow-hidden border-b-2 border-black">
                <div className=" flex items-center justify-center">
                  <img src={e.image} alt="producticon" className="w-auto h-14 text-center" />

                </div>
                <p className=" flex items-center justify-center ">{e.name}</p>
                <p className=" flex items-center justify-center ">${e.new_price}</p>
                <button className=" px-4 my-5 rounded-lg flex items-center justify-center  border-2">{cartItems[e.id]}</button>
                <p className="  flex items-center justify-center">${e.new_price * cartItems[e.id]}</p>
                <div className=" flex items-center justify-center">
                  <img src={remove_icon} alt="producticon" className="w-auto  text-center" onClick={()=>{removeFromCart(e.id)}} />

                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="flex gap-20 w-full flex-row items-center justify-center">
        <div className="flex-1 flex flex-col  gap-5 w-full">
          
          <h1 className="text-2xl font-semibold ">Cart total</h1>
          <div className="flex w-full flex-col">
            <div className="flex flex-row items-center justify-between border-b-2 p-2">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 p-2">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 p-2">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="bg-red-500 text-white rounded-xl p-1 hover:scale-[1.01]">Proceed to checkout</button>
        </div>
        <div className="w-full flex-1 flex flex-col gap-4 p-2 items-start border-2 rounded-lg  justify-center">
          <p>If you have a promo code enter here</p>
          <div className="w-full flex-row flex gap-2">
            <input type="text" placeholder="promo code" className="p-1 w-full px-2 rounded-lg outline-none border-2"/>
            <button className="bg-red-500 text-white rounded-xl p-1 px-4 hover:scale-[1.01]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
