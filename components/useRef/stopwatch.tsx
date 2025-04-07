import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef<number | null>(null);
  const start_timer = () => {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };
  const stop_timer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const reset_timer = () => {
    stop_timer();
    setTime(0);
  };
  return (
    <>
      <div className="shadow-2xl flex flex-col p-16 m-18 rounded-2xl">
        <h1 className="text-center text-2xl">StopWatch: {time} seconds</h1>

        <button className="buttons" onClick={start_timer}>
          Start
        </button>

        <br />

        <button className="buttons" onClick={stop_timer}>
          Stop
        </button>

        <br />

        <button className="buttons" onClick={reset_timer}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Stopwatch;
