import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./cart/items";
import Header from "./headers";
import Products from "./product/products";

function Layout() {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <div className="layout">
      <Header />
      <Products />
      {<CartItems />}
    </div>
  );
}

export default Layout;
