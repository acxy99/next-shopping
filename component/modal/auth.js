import Modal from "react-bootstrap/Modal";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import SignIn from "../auth-tabs/SignIn";
import Register from "../auth-tabs/Register";
const ModalAuth = () => {
  return (
    <Modal
      show={true}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-auth"
    >
      <Modal.Body>
        <div className="p-4">
          <Row className="justify-content-around">
            <Tab.Container
              id="left-tabs-example"
              activeKey="signIn"
              defaultActiveKey="signIn"
            >
              <Row>
                <Col md={12} className="d-flex  align-items-center pb-3">
                  <Col md={11} className="">
                    <Nav
                      variant="pills"
                      className="flex-row justify-content-center "
                    >
                      <Nav.Item className="auth-tabs me-1">
                        <Nav.Link eventKey="signIn">Sign In</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="auth-tabs">
                        <Nav.Link eventKey="register">Register</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col md={1} className="text-end">
                    {" "}
                    <XLg style={{ fontSize: "20px" }} />
                  </Col>
                </Col>
                <Col md={12}>
                  <h1
                    className="m-0 font-weight-bold d-inline-flex "
                    style={{ fontWeight: "bolder", fontSize: "20px" }}
                  >
                    <span style={{ fontWeight: "normal" }}>
                      Welcome to&nbsp;
                    </span>
                    <span
                      className="border px-2 mr-1"
                      style={{ color: "#98c1d9", fontWeight: "bolder" }}
                    >
                      N
                    </span>
                    <span>extShop</span>
                  </h1>
                </Col>
                <Col md={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="signIn">
                      <SignIn />
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <Register />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAuth;
