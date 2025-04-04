// import { StaticImageData } from "next/image";
import React from "react";

type NameProps = { name: string; sem: string };
const One: React.FC<NameProps> = (props) => {
  return (
    <div className="bg-slate-200 p-4 m-4 rounded-lg shadow-md max-w-40 flex flex-col items-center gap-3">
      <h1>{"Name: " + props.name}</h1>

      <img src="prop_image.avif" alt="image" className="rounded-full" />

      <h2>{"Semester: " + props.sem}</h2>
    </div>
  );
};

export default One;
