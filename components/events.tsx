import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
import React, { ReactHTMLElement } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Events: React.FC = () => {
  const handelClick = () => {
    toast.success("I am clicked!");
  };

  const handelpara = () => {
    alert("Hovering over a paragraph");
  };

  const handelinputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("input is added");
    console.log(e.target.value);
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("form submitted");
  };

  return (
    <>
      <p className="inline" onMouseOver={handelpara}>
        This is a paragraph.
      </p>
      <br />
      <button
        className="bg-blue-300 px-4 py-2 rounded-md cursor-pointer"
        onClick={handelClick}
      >
        Click me!
      </button>

      <form onSubmit={handelSubmit}>
        <input
          className="border-2 rounded-md"
          type="text"
          placeholder="Data"
          onChange={handelinputchange}
        />
        <button type="submit" className="bg-green-500 rounded-md px-4 py-2">
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Events;
