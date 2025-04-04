"use client";
import React from "react";
import { useState } from "react";
const UseState = () => {
  const [count, setcount] = useState(0);
  return (
    <>
      <div>
        <h1 className="mb-4">You have Clicked {count} times</h1>
        <button
          className="bg-green-500 px-2 py-4 rounded cursor-pointer"
          onClick={() => {
            setcount(count + 1);
          }}
        >
          Click me to increase!
        </button>

        <button
          className="bg-red-500 px-2 py-4 rounded cursor-pointer ml-4"
          onClick={() => {
            if (count > 0) {
              setcount(count - 1);
            }
            return count;
          }}
        >
          Click me to reduce count!
        </button>

        <button
          className="bg-amber-300 px-2 py-4 rounded cursor-pointer ml-4"
          onClick={() => {
            setcount(0);
          }}
        >
          Click me to reset count!
        </button>
      </div>
    </>
  );
};

export default UseState;
