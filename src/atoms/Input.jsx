import React from "react";

const Input = ({ reference }) => {
  return (
    <input type="text" placeholder="Search for a city..." ref={reference} />
  );
};

export default Input;
