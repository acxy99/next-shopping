import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../../slices/cart-slice";
import { CartFill } from "react-bootstrap-icons";
import { Col } from "react-bootstrap";
import { padding } from "@mui/system";

const Cart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const displatch = useDispatch();
  const show_cart = () => {
    displatch(setShowCart());
  };
  return (
    <Col md={12}>
      <div className="d-flex justify-content-center border px-4 py-2">
        <span
          style={{
            color: "#ee6c4d",
            fontSize: "14px",
          }}
        >
          <CartFill />
        </span>
        <span
          style={{
            paddingLeft: "3px",
            paddingTop: "2px",
            color: "#707070",
            fontSize: "14px",
          }}
        >
          {totalQuantity}
        </span>
      </div>
    </Col>
  );
};

export default Cart;
