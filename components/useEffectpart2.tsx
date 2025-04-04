import React, { useEffect, useState } from "react";

const UseEffectpart2 = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timer_here = setInterval(() => {
      setTimer((timerr) => timerr);
      // setTimer((timerr) => timerr + 1);
    }, 1000);
    // console.log({ timer_here });

    return () => {
      console.log("Time to stop");
      clearInterval(timer_here);
    };
  }, []);

  const handelClick = () => {
    setTimer(0);
  };

  return (
    <>
      <h1>Seconds: {timer}</h1>
      <button onClick={handelClick} className="buttons">
        Reset
      </button>
    </>
  );
};

export default UseEffectpart2;
