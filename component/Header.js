import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BoxArrowInLeft,
  BoxArrowLeft,
  Facebook,
  Instagram,
  Linkedin,
  PencilSquare,
  Person,
  Search,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth-slice";
import Cart from "./CartButton";
import ModalAuth from "./modal/auth";
import Wishlist from "./WishlistButton";

//#EDF1FF !important
const Header = () => {
  const router = useRouter();
  const authenticated = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logout());
  };

  const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);
  const [authType, setAuthType] = useState("");
  const handleModalClose = () => {
    setIsModalAuthOpen(!isModalAuthOpen);
  };

  const redirect_homepage = () => {
    router.push("/");
  };
  return (
    <div>
      <Container fluid>
        {/* Top Nav */}
        <Row className="header-top py-2 px-lg-5 px-md-5">
          <Col md={6}>
            <div className="text-start justify-content-center">
              <div style={{ padding: "1px" }}>
                {authenticated ? (
                  <span>
                    <Person style={{ marginBottom: "3px" }} />
                    &nbsp;MyAccount&nbsp;|
                    <button className="btn-no-style" onClick={Logout}>
                      &nbsp; <BoxArrowLeft style={{ marginBottom: "3px" }} />
                      &nbsp;Logout
                    </button>
                  </span>
                ) : (
                  <span>
                    <button
                      className="btn-no-style"
                      onClick={() => {
                        setIsModalAuthOpen(true);
                        setAuthType("signIn");
                      }}
                    >
                      <BoxArrowInLeft style={{ marginBottom: "3px" }} />
                      &nbsp;SignIn&nbsp;
                    </button>
                    |&nbsp;
                    <button
                      className="btn-no-style"
                      onClick={() => {
                        setIsModalAuthOpen(true);
                        setAuthType("register");
                      }}
                    >
                      <PencilSquare style={{ marginBottom: "3px" }} />
                      &nbsp;Register
                    </button>
                  </span>
                )}
              </div>
            </div>
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
            <button className="btn-no-style" onClick={redirect_homepage}>
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
            </button>
          </Col>
          <Col md={7}>
            <div className="input-group flex-nowrap">
              <input
                placeholder="Search items"
                type="text"
                className="search-box"
              />
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
      {isModalAuthOpen && (
        <ModalAuth
          closeModal={handleModalClose}
          showTrue={isModalAuthOpen}
          authType={authType}
        />
      )}
    </div>
  );
};

export default Header;
