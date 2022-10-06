import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../slices/cart-slice";
function Product({ name, id, imgURL, price }) {
  const dispatch = useDispatch();

  const add_to_cart = () => {
    dispatch(addItemToCart({ name, id, price }));
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={add_to_cart}>Add to cart</button>
    </div>
  );
}

export default Product;
