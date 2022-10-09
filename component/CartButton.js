import React from "react";
import { Col } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
const Cart = () => {
  const router = useRouter();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const displatch = useDispatch();
  const show_cart = () => {
    router.push("/cart");
  };
  return (
    <Col md={12}>
      <button
        style={{ width: 100 }}
        className="btn-no-style"
        onClick={show_cart}
      >
        <div className="d-flex justify-content-center border px-4 py-2">
          <span
            className="icon-color"
            style={{
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
      </button>
    </Col>
  );
};

export default Cart;
