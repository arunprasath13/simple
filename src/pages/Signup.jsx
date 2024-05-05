import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "preact/hooks";
import hide from "../assets/images/hide.png"
import eye from "../assets/images/view.png";
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Signup = ({ img, logo }) => {
  const [status, setStatus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleClick = () => {
    setStatus((prev) => !prev);
  };

  return (
    <AuthLayout img={img}>
      <div className="form-container">
        <div className="form__logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="form__header">
          <h1>Get Started Now</h1>
        </div>
        <div className="form__info">
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__textBox">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              {...register("name")}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className="form__emailBox">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form__passwordBox">
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
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="form__btn">
            <button>Signup</button>
          </div>
        </form>
        <div className="form__account">
          <p>
            Have an account?{" "}
            <Link to="/login" className="signin">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
