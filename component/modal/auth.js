import { Col, Nav, Row, Tab } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import Register from "../auth-tabs/Register";
import SignIn from "../auth-tabs/SignIn";

const ModalAuth = (props) => {
  const { showTrue, authType, closeModal } = props;

  return (
    <Modal
      show={showTrue}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-auth"
    >
      <Modal.Body>
        <div className="p-4">
          <Row className="justify-content-around">
            <Tab.Container defaultActiveKey={authType}>
              <Row>
                <Col md={12} className="d-flex  align-items-center pb-3">
                  <Col md={11}>
                    <Nav
                      variant="pills"
                      className="flex-row justify-content-center "
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="signIn">Sign In</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">Register</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col md={1} className="text-end">
                    <button className="btn-no-style" onClick={closeModal}>
                      <XLg style={{ fontSize: "20px" }} />
                    </button>
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
                      <SignIn closeModal={closeModal} />
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
