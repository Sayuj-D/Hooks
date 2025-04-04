import React from "react";

type Names = {
  name: string;
  children: React.ReactNode[];
};

const Card: React.FC<Names> = (props) => {
  return <div>{props.children}</div>;
};

export default Card;
