import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const router = useRouter();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const displatch = useDispatch();
  const show_cart = () => {
    router.push("/cart");
  };
  return (
    <Col md={12}>
      <Link href="/cart">
        <a rel="noopener noreferrer">
          <button style={{ width: 100 }} className="btn-no-style">
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
        </a>
      </Link>
    </Col>
  );
};

export default Cart;
