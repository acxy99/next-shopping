import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../../slices/cart-slice";

const Cart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const displatch = useDispatch();
  const show_cart = () => {
    displatch(setShowCart());
  };
  return (
    <div className="cartIcon">
      <button onClick={show_cart}>
        <h3>Cart: {totalQuantity} Items</h3>
      </button>
    </div>
  );
};

export default Cart;
