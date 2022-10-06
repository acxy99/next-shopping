import React from "react";
import Layout from "../component/layout";
import { useSelector } from "react-redux";
function Shopping() {
  const itemList = useSelector((state) => state.cart.itemList);
  console.log(itemList);
  return <Layout />;
}

export default Shopping;
