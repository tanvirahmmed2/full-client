import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import remove_icon from "../components/Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-semibold">Cart</h1>
      <div className="w-full flex flex-row items-center justify-between border-b-2 border-black ">
        <p className="w-full items-center text-center">Products</p>
        <p className="w-full items-center text-center">Title</p>
        <p className="w-full items-center text-center">Price</p>
        <p className="w-full items-center text-center">Quantity</p>
        <p className="w-full items-center text-center">Total</p>
        <p className="w-full items-center text-center">Remove</p>
      </div>

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="w-full">
              <div className="w-full flex flex-row items-center justify-between">
                <img src={e.image} alt="producticon" className="w-full items-center text-center scale-50"/>
                <p className="w-full flex  text-center ">{e.name}</p>
                <p className="w-full flex  text-center ">{e.new_price}</p>
                <button className="w-full flex  text-center ">{cartItems[e.id]}</button>
                <p className="w-full flex  text-center ">{e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="removeicon"
                  onClick={() => removeFromCart(e.id)}
                  className="w-full flex  text-center "
                />
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
