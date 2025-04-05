import React, { useContext } from "react";
import ChildC from "./childC";
import { UserContext } from "../../app/page";

const ChildB = () => {
  const user = useContext(UserContext);
  return (
    <div className="text-center">
      Address from childB: {user.address}
      <ChildC />
    </div>
  );
};

export default ChildB;
