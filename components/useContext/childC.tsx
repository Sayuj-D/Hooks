import React, { useContext } from "react";
import { UserContext } from "../../app/page";

const ChildC = () => {
  const user = useContext(UserContext);
  return (
    <>
      <p className="mt-8"> Name from childC</p>
      <div className="text-2xl text-center">Hello, {user.name}</div>
    </>
  );
};

export default ChildC;
