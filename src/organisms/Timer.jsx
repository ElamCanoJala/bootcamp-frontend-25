import { useEffect, useRef, useState } from "react";
import Buttons from "../molecules/Buttons";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const interval = useRef(null);

  const startAction = () => {
    if (interval.current !== null) return;

    interval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopAction = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  const resetAction = () => {
    stopAction();
    setTimer(0);
  };

  useEffect(() => {
    return () => clearInterval(interval.current);
  }, []);

  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timer % 60).toString().padStart(2, "0");

  return (
    <div>
      <h1>Timer</h1>
      <p>
        {minutes} mins {seconds} secs
      </p>
      <Buttons
        startAction={startAction}
        resetAction={resetAction}
        stopAction={stopAction}
      />
    </div>
  );
};

export default Timer;
