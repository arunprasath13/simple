import React from "react";
import img from "../assets/images/img.png"
const AuthLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="left-container">
        <div className="left">
          {children}
          <p></p>
        </div>
      </div>
      <div className="right">
        <img src={img} alt="right image" />
      </div>
    </div>
  );
};

export default AuthLayout;
