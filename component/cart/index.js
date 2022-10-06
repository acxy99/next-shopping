import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="cartIcon">
      <h3>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
