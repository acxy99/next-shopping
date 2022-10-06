import React from "react";
import { useSelector } from "react-redux";
import Header from "./headers";
import Products from "./product/products";

function Layout() {
  let cartItems = useSelector((state) => state.cart.itemList);
  let total = cartItems
    .map((item) => item.totalPrice)
    .reduce((a, b) => a + b, 0);
  return (
    <div className="layout">
      <Header />
      <Products />
      <div className="total-price">
        <h3>Total: ${total}</h3>
        <button className="orderBtn">Place Order</button>
      </div>{" "}
    </div>
  );
}

export default Layout;
