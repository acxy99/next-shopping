import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";
//#EDF1FF !important
const Header = () => {
  return (
    <div>
      <Container fluid>
        <Row className="header-top py-2 px-lg-5">
          <Col md={6}>
            <div className="text-start">FAQs | Help | Support</div>
          </Col>
          <Col md={6} className="d-inline-flex justify-content-end">
            <div className="px-1">
              <Facebook />
            </div>{" "}
            <div className="px-1">
              <Twitter />
            </div>{" "}
            <div className="px-1">
              <Linkedin />
            </div>{" "}
            <div className="px-1">
              <Instagram />
            </div>{" "}
            <div className="px-1">
              <Youtube />
            </div>{" "}
          </Col>
        </Row>
        <Row className="py-3 px-lg-5">
          <Col md={3}>
            <h1 className="m-0 font-weight-bold">
              <span
                className=" font-weight-bolder border px-3 mr-1"
                style={{ color: "	#C0C0C0" }}
              >
                N
              </span>{" "}
              NextShop
            </h1>
          </Col>
          <Col md={6}></Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
