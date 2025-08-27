import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import remove_icon from "../components/Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

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
                <p className=" flex items-center justify-center ">{e.new_price}</p>
                <button className=" px-4 my-5 rounded-lg flex items-center justify-center  border-2">{cartItems[e.id]}</button>
                <p className="  flex items-center justify-center">{e.new_price * cartItems[e.id]}</p>
                <div className=" flex items-center justify-center">
                  <img src={remove_icon} alt="producticon" className="w-auto  text-center" onClick={()=>{removeFromCart(e.id)}} />

                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
