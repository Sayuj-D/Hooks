import { useState } from "react";

const Usecounter = (): [number, () => void, () => void] => {
  const [count, setCount] = useState(0);

  const handel_inc = () => {
    setCount(count + 1);
  };

  const handel_dec = () => {
    setCount(count - 1);
  };

  return [count, handel_inc, handel_dec];
};

export default Usecounter;
