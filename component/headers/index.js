import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Search,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/auth-slice";
import Cart from "../cart";
import Wishlist from "../wishlist";

//#EDF1FF !important
const Header = () => {
  const authenticated = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Container fluid>
        {/* Top Nav */}
        <Row className="header-top py-2 px-lg-5 px-md-5">
          <Col md={6}>
            {authenticated ? (
              // when user is authenticated to the application
              <div className="text-start">MyAccount &nbsp;|&nbsp; Logout</div>
            ) : (
              // when user has logout from the application
              <div className="text-start">SignIn &nbsp;|&nbsp; Register</div>
            )}
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
        {/* Bottom Nav */}
        <Row className="py-3 px-lg-5 px-md-5 align-items-center">
          <Col md={3}>
            <h1
              className="m-0 font-weight-bold d-inline-flex "
              style={{ fontWeight: "bolder" }}
            >
              <span
                className="border px-2 mr-1"
                style={{ color: "#98c1d9", fontWeight: "bolder" }}
              >
                N
              </span>
              <span className="d-none d-lg-block">extShop</span>
              <span className="d-lg-none d-block">&nbsp;S</span>
            </h1>
          </Col>
          <Col md={7}>
            <div className="input-group flex-nowrap">
              <input type="text" className="search-box" />
              <span className="search-box-icon input-group-text ">
                <Search />
              </span>
            </div>
          </Col>
          <Col md={2}>
            <Row className="d-flex justify-content-between">
              <Col md={6}>
                <Wishlist />
              </Col>
              <Col md={6}>
                <Cart />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
