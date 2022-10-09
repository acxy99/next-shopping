import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Checkout from "./Checkout";
import CartItem from "./CartItem";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  return (
    <Container fluid>
      <Row className="px-lg-5">
        <Col md={8}>
          <Row>
            <Col md={12}>
              <h3>Your Cart</h3>
            </Col>
            <Col md={12} className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr className="header-top">
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quanatity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <CartItem
                      id={item.id}
                      price={item.price}
                      quantity={item.quantity}
                      name={item.name}
                      total={item.totalPrice}
                    />
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Checkout />
        </Col>
      </Row>
    </Container>
  );
};

export default CartItems;
