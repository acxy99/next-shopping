import React from "react";
import { Trash3 } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../slices/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const incrementCartItem = () => {
    dispatch(addItemToCart(id, name, price));
  };
  const decrementCartItem = () => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <div class="input-group w-auto justify-content-center align-items-center">
          <button
            class="button-minus border rounded-circle icon-shape icon-sm mx-1 "
            onClick={decrementCartItem}
          >
            -
          </button>
          {quantity}
          <button
            className="button-plus border rounded-circle icon-shape icon-sm"
            onClick={incrementCartItem}
          >
            +
          </button>
        </div>
      </td>
      <td>{total}</td>
      <td>
        <Trash3 />
      </td>
    </tr>
  );
};

export default CartItem;
