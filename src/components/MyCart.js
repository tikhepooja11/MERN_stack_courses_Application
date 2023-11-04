import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "./course";
import { clearCart } from "../utilities/Redux-store/cartSlice";

const MyCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-2 p-5 bg-blue-200">
      <h1 className="text-2xl font-bold text-center">
        Cart Items ({cartItems.length})
      </h1>

      <div class="flex justify-end">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="Container max-w-4xl">
        {cartItems.length === 0 && (
          <h3 className="p-5 m-5">Your cart is empty. Add Items to the cart</h3>
        )}
        {cartItems.map((item) => (
          <Course key={item.title} course={item} />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
