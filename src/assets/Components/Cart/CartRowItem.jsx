import React, { useContext } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { products } from "../../Utils/products";
import { CartContext } from "../Contexts/CartContext/CartContext";

const CartRowItem = () => {
  const { cartItems, addToCart, reduceProductQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <>
      {cartItems.map((cartItem) => (
        <div key={cartItem.id} className="w-[100%]">
          <div className="flex items-center gap-[5rem] p-4">
            <div className="flex items-center gap-5">
              <RxCross2 onClick={() => removeFromCart(cartItem.id)} />
              <img
                className="w-[92px] h-[112px] object-contain"
                src={cartItem.image}
                alt=""
              />
            </div>
            <span className="line-clamp-1 font-semibold text-[12px] uppercase productName">
              {cartItem.name}
            </span>
            <span className="font-sans productPrice">${cartItem.price}</span>
            <button className="flex gap-12 px-2 py-2 border text-[.8rem] text-[#999]">
              <span>Quantity</span>
              <span className="flex items-center gap-4">
                <IoMdArrowDropleft
                  onClick={() => reduceProductQuantity(cartItem.id)}
                />
                <span>{cartItem.quantity}</span>
                <IoMdArrowDropright onClick={() => addToCart(cartItem)} />
              </span>
            </button>
            <span className="font-sans">
              ${cartItem.price * cartItem.quantity}
            </span>
          </div>
          <div className="mb-51 border"></div>
        </div>
      ))}
    </>
  );
};

export default CartRowItem;
