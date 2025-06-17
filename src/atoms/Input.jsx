import React from "react";

const Input = ({ reference, placeholder }) => {
  return <input type="text" placeholder={placeholder} ref={reference} />;
};

export default Input;
