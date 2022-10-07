import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../slices/cart-slice";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";
function Product({ name, id, imgURL, price }) {
  const dispatch = useDispatch();

  const add_to_cart = () => {
    dispatch(addItemToCart({ name, id, price }));
  };
  return (
    <Col lg={4} sm={6} xs={12} className="pb-1">
      <div className="product-card mb-4">
        <img src={imgURL} alt={name} className="card-img-top" />
        <div className="card-body border text-center py-3">
          <h6 className="text-truncate mb-3">{name}</h6>
          <div className="d-flex justify-content-center">
            <h6>${price}</h6>
          </div>
        </div>
        <div className="card-footer text-center py-2">
          <Button onClick={add_to_cart}>
            <span>
              <Cart3 /> Add to cart
            </span>
          </Button>
        </div>
      </div>
    </Col>
    // <Col>

    //   <h2>{name}</h2>
    //   <p>$ {price}</p>
    //   <button onClick={add_to_cart}>Add to cart</button>
    // </Col>
  );
}

export default Product;
