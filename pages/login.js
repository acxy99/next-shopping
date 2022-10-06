import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/auth-slice";

const Login = () => {
  const dispatch = useDispatch();
  const submit_handler = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={submit_handler}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
