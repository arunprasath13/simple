import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
// import InputBox from "../components/InputBox";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import eye from "../assets/images/view.png";
import { useState } from "preact/hooks";
import hide from "../assets/images/hide.png"
const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = ({ img, logo }) => {
  const [status, setStatus] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("asd");
    console.log(data);
  };

  const handleClick = () => {
    setStatus((prev) => !prev);
  };
  return (
    <AuthLayout img={img}>
      <div className="form-container" style={{ marginTop: "60px" }}>
        <div className="form__logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="form__header">
          <h1>Welcome Back!</h1>
        </div>
        <div className="form__info">
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__emailBox">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              {...register("email")}
            />
          </div>
          <div className="form__passwordBox" style={{ position: "relative" }}>
            <label>Password</label>
            <div className="form__toggle">
              {status === true ? (
                <input
                  type="text"
                  placeholder="Enter your password"
                  {...register("password")}
                  style={{border:"none"}}
                />
              ) : (
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                />
              )}
              {status === true ? (
                <img
                  src={eye}
                  className="eye"
                  style={{ width: "30px", height: "30px" }}
                  onClick={handleClick}
                />
              ) : (
                <img
                  src={hide}
                  className="hide"
                  style={{ width: "30px", height: "30px" }}
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
          <div className="form__forgot">
            <p>
              <Link to="/forgotpassword">Forgot your password?</Link>
            </p>
          </div>
          <div className="form__btn">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="form__account">
          <p>
            Don't Have an account? <Link to="/">Sign Up</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
