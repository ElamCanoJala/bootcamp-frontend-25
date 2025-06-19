import "./Button.css";

const Button = ({ onclick, text, style }) => {
  return (
    <button onClick={onclick} className={style}>
      {text}
    </button>
  );
};

export default Button;
