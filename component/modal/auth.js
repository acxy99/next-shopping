import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
const ModalAuth = () => {
  return (
    <Modal
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-auth"
    >
      <Modal.Body>
        <div className="p-4">
          <Row>
            <Col md={12} className="text-end">
              <XLg style={{ fontSize: "20px" }} />
            </Col>
            <Col md={12}>
              <h1
                className="m-0 font-weight-bold d-inline-flex "
                style={{ fontWeight: "bolder", fontSize: "20px" }}
              >
                <span style={{ fontWeight: "normal" }}>Welcome to&nbsp;</span>
                <span
                  className="border px-2 mr-1"
                  style={{ color: "#98c1d9", fontWeight: "bolder" }}
                >
                  N
                </span>
                <span>extShop</span>
              </h1>
            </Col>
            <Col md={12} className="pt-3">
              {/* Email */}
              <div class="form-floating mb-3">
                <input
                  type="email"
                  className="form-control input-auth"
                  id="floatingInput"
                  placeholder="Enter your Email Adress"
                />
                <label for="floatingInput">Email Address</label>
              </div>
            </Col>
            <Col md={12} className="pt-2">
              {/* password */}
              <div class="form-floating">
                <input
                  type="password"
                  className="form-control input-auth"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
            </Col>
            <Col md={12}>{/* Submit Buttion */}</Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAuth;
