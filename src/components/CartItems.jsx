import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import remove_icon from "../components/Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div>
      <div>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div>
                <img src={e.image} alt="producticon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button>{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="removeicon"
                  onClick={() => removeFromCart(e.id)}
                  style={{ cursor: "pointer" }}
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
