import Button from "../atoms/Button";

const Buttons = ({ startAction, stopAction, resetAction }) => {
  return (
    <div>
      <Button text={"start"} color="green" action={startAction} />
      <Button text={"stop"} color="red" action={stopAction} />
      <Button text={"reset"} color="yellow" action={resetAction} />
    </div>
  );
};

export default Buttons;
