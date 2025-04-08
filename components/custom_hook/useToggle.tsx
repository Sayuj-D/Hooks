import { useState } from "react";

const UseToggle = (): [boolean, () => void] => {
  const [status, setStatus] = useState(false);

  const handle_toggle = () => {
    {
      setStatus((status) => !status);
    }
  };
  return [status, handle_toggle];
};

export default UseToggle;
