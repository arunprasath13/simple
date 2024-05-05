import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});

const ForgotPassword = ({ img, logo }) => {
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

  return (
    <AuthLayout img={img}>
      <div className="form-container" style={{ marginTop: "130px" }}>
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
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form__btn">
            <button type="submit">Continue</button>
          </div>
        </form>
        <div className="form__account">
          <p>
            Do you Have an account? <Link to="/login">Continue</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
