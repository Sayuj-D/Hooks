"use client";
import React, { useState } from "react";
import One from "@/components/one";
// import props_image from "@/publiic/prop_image.avif";
import UseState from "@/components/useState";
import Card from "@/components/card";
import Button from "@/components/button";
import Btn from "@/components/btn";
import StateLifting from "@/components/stateLifting";
import StateLiftingpractise from "@/components/stateLiftingpractise";
import Slpractise from "@/components/slpractise";
import Events from "@/components/events";
import LearnUseEffect from "@/components/learnUseEffect";
import UseEffectpart2 from "@/components/useEffectpart2";
import Axiousapi from "@/components/axiousapi";
import Api_here from "@/components/api_here";

const page: React.FC = () => {
  // for passing props as function
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount(count + 1);
  };

  // for passing props as function - reduce the count
  const [reduceCount, setReduceCount] = useState(100);
  const handelReduce = () => {
    setReduceCount(reduceCount - 1);
  };

  // for state lifiting
  const [name, setName] = useState("");

  // for state lifting practise
  const [activeIndex, setActiveIndex] = useState(0);

  // for SL practise
  const [data, setData] = useState("");

  // for conditional rendering
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // if (isLoggedIn) {
  //   return <Logout />;
  // } else {
  //   return <Login />;
  // }
  return (
    <>
      <h1 className="text-center text-2xl mb-8 underline">Props</h1>
      <One name="Sayuj" sem="6" />
      {/* <One name="Sayujya" sem="6" />
      <One name="SD" sem="6" /> */}
      <h1 className="text-center text-2xl mb-8 underline">UseState</h1>

      {/* -------------------------------------- */}

      <UseState />

      {/* -------------------------------------- */}
      <h1 className="text-center text-2xl mb-8 underline mt-8">
        Passing props as Childern
      </h1>
      <div>
        <Card name="Sayujya">
          <h1 className="text-2xl">Sayujya Here!</h1>
          <p>A sixth semester student, intern at Rumsan!</p>
        </Card>
      </div>

      {/* --------------------------------------- */}

      <h1 className="text-center text-2xl mb-8 underline mt-8">
        Passing props as Function
      </h1>
      <Button handelClick={handelClick} text="Click Me!">
        <h1>{count}</h1>
      </Button>

      {/* -------------------------------------- */}

      <Btn handelReduce={handelReduce} text="Reduce the count">
        <h1>{reduceCount}</h1>
      </Btn>

      {/* -------------------------------------- */}

      <h1 className="text-center text-2xl mb-8 underline mt-8">
        State Lifting
      </h1>
      <StateLifting name={name} setName={setName} />
      <p className="text-center">Value reflected from Parent component</p>
      <p className="text-center font-bold">
        Value that is getting typed: {name}
      </p>

      {/* stateLifting practise, show and hide the content */}
      <StateLiftingpractise
        // passing 3 props to a component
        title="Introduction"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        This is the introduction content. It provides an overview of the topic.
      </StateLiftingpractise>
      <StateLiftingpractise
        title="Description"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        This is the description content. It provides detailed information about
        the topic.
      </StateLiftingpractise>

      {/* --------------------------------------- */}

      <h1 className="text-center text-2xl mb-8 underline mt-8">
        State Lifting Practise
      </h1>

      {/* passing the props */}
      <Slpractise data={data} setData={setData} />

      {/* -------------------------- */}
      {/* <h1 className="text-center text-2xl mb-8 underline mt-8">
        Conditional Rendering
      </h1> */}

      {/* -------------------------- */}
      <h1 className="text-center text-2xl mb-8 underline mt-8">
        Event Handeling
      </h1>
      <Events />

      {/* --------------------- */}
      <LearnUseEffect />

      {/* -------------------- */}

      <UseEffectpart2 />

      {/* ------------ */}
      <Axiousapi />
      {/* ------------ */}

      <Api_here />
    </>
  );
};

export default page;
