import { Col } from "react-bootstrap";
const Register = () => {
  return (
    <>
      <Col md={12} className="d-flex justify-content-between py-2">
        <Col md={7}>
          <div class="form-floating ">
            <input
              type="text"
              className="form-control input-auth"
              id="floatingInput"
              placeholder="Enter your First Name"
            />
            <label for="floatingInput" className="auth-label">
              First Name
            </label>
          </div>
        </Col>
        <Col md={5} className="ps-2">
          <div class="form-floating">
            <input
              type="text"
              className="form-control input-auth"
              id="floatingInput"
              placeholder="Enter your Last Name"
            />
            <label for="floatingInput" className="auth-label">
              Last Name
            </label>
          </div>
        </Col>
      </Col>
      <Col md={12} className="pt-1">
        {/* Email */}
        <div class="form-floating">
          <input
            type="email"
            className="form-control input-auth"
            id="floatingInput"
            placeholder="Enter your Email Adress"
          />
          <label for="floatingInput" className="auth-label">
            Email Address
          </label>
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
          <label for="floatingPassword" className="auth-label">
            Password
          </label>
        </div>
      </Col>
      <Col md={12} className="pt-2">
        {/* Confirm password password */}
        <div class="form-floating">
          <input
            type="password"
            className="form-control input-auth"
            id="floatingPassword"
            placeholder="Confirm Password"
          />
          <label for="floatingPassword" className="auth-label">
            Confirm Password
          </label>
        </div>
      </Col>
      <Col md={12} className="pt-4 text-center">
        {/* Submit Buttion */}
        <button type="submit" className="btn-auth">
          {" "}
          REGISTER{" "}
        </button>
      </Col>
      <Col md={12} className="pt-3 d-flex align-items-center">
        <Col md={5}>
          <hr />
        </Col>
        <Col
          md={2}
          className="text-center"
          style={{ color: "#808080", fontSize: "12px" }}
        >
          OR
        </Col>
        <Col md={5}>
          <hr />
        </Col>
      </Col>
      <Col md={12} className="pt-3">
        <button type="submit" className="btn-auth-google">
          <span className="pe-4">
            <img
              style={{ width: "22px", paddingBottom: "2px" }}
              src="https://img.icons8.com/color/48/000000/google-logo.png"
            />
          </span>
          <span>REGISTER WITH GOOGLE</span>
        </button>
      </Col>
    </>
  );
};

export default Register;
