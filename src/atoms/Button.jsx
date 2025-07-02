import React from "react";

const Button = ({ text, color = "gray", action }) => {
  return (
    <button onClick={action} style={{ backgroundColor: { color } }}>
      {text}
    </button>
  );
};

export default Button;
