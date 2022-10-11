import { Col } from "react-bootstrap";
import { login } from "../../slices/auth-slice";
import { useDispatch } from "react-redux";
import { signIn } from "next-auth/react";

const SignIn = (props) => {
  const { closeModal } = props;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
    closeModal();
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <Col md={12} className="pt-3">
          {/* Email */}
          <div class="form-floating mb-3">
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
        <Col md={12} className="pt-4 text-center">
          {/* Submit Buttion */}
          <button type="submit" className="btn-auth">
            {" "}
            SIGN IN{" "}
          </button>
        </Col>
      </form>
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
        <button
          type="submit"
          className="btn-auth-google"
          onClick={() => {
            signIn();
            dispatch(login());
          }}
        >
          <span className="pe-4">
            <img
              style={{ width: "22px", paddingBottom: "2px" }}
              src="https://img.icons8.com/color/48/000000/google-logo.png"
            />
          </span>
          <span>SIGN IN WITH GOOGLE</span>
        </button>
      </Col>
    </>
  );
};

export default SignIn;
