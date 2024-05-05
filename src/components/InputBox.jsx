import React from "react";

const InputBox = ({ label, type, placeholder,register, ...rest }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register(type)} {...rest} />
    </>
  );
};

export default InputBox;
