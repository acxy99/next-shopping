import React from "react";
import { BagHeartFill } from "react-bootstrap-icons";
import { Col } from "react-bootstrap";

function Wishlist() {
  return (
    <Col md={12}>
      <div className="d-flex justify-content-center border px-4 py-2">
        <span
          style={{
            color: "#ee6c4d",
            fontSize: "14px",
          }}
        >
          <BagHeartFill />
        </span>
        <span
          style={{
            paddingLeft: "3px",
            paddingTop: "2px",
            color: "#707070",
            fontSize: "14px",
          }}
        >
          {0}
        </span>
      </div>
    </Col>
  );
}

export default Wishlist;
