"use client";
import React, { createContext, useState } from "react";
import One from "@/components/props and components/one";
// import props_image from "@/publiic/prop_image.avif";
import UseState from "@/components/useState";
import Card from "@/components/props and components/card";
import Button from "@/components/props and components/button";
import Btn from "@/components/props and components/btn";
import StateLifting from "@/components/state Lifting/stateLifting";
import StateLiftingpractise from "@/components/state Lifting/stateLiftingpractise";
import Slpractise from "@/components/state Lifting/slpractise";
import Events from "@/components/conditional rendering + event handeling/events";
import LearnUseEffect from "@/components/useEffect/learnUseEffect";
import UseEffectpart2 from "@/components/useEffect/useEffectpart2";
import Axiousapi from "@/components/useEffect/axiousapi";
import Api_here from "@/components/useEffect/api_here";
import ChildA from "@/components/useContext/childA";
import Useeref from "@/components/useRef/useeref";

// ------------------
import Themeswitcher from "@/components/useContext/Theme_toggle/themeswitcher";
import { ThemeProvider } from "@/components/useContext/Theme_toggle/themeContext";
import Stopwatch from "@/components/useRef/stopwatch";
import UseeMemo from "@/components/useeMemo";
import Parent_component from "@/components/useCallback_test/parent_component";
import Expensive_component from "@/components/useCallback_test/expensive_component";

// ------------------
// self-context:
import Child_capture from "@/components/child_capture";
import Main_custom from "@/components/custom_hook/main";
import Counter1 from "@/components/custom_hook/counter1";
import Toggle from "@/components/custom_hook/toggle";

const ToggleContext = createContext();

// step: 1 - Creating the Contex hook

const UserContext = createContext({ name: "", address: "" });

// step: 2 - wrapping the child inside the provider

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

  const [user, setUser] = useState({ name: "Sayujya", address: "Banasthali" });
  const [themes, setThemes] = useState("Light");

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

      {/* ------------ */}
      <h1 className="heading">UseContext</h1>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>

      {/* ----------------- */}
      <ThemeProvider>
        <Themeswitcher />
      </ThemeProvider>
      {/* ----------------- */}

      <ToggleContext value={{ themes, setThemes }}>
        <Child_capture />
      </ToggleContext>

      {/* ------------------ */}
      <Useeref />

      {/* ----------------- */}
      <Stopwatch />
      {/* ----------------- */}
      <p className="heading">useMemo</p>
      <UseeMemo />
      {/* -------------- */}
      <p className="heading">useCallback</p>

      {/* ----------- */}
      <Parent_component />
      {/* ----------- */}

      <p className="heading">Handeling Expensive component from useCallback</p>

      <Expensive_component />
      {/* ------------- */}
      <Main_custom />

      <Counter1 />

      {/* ----------------- */}
      <Toggle />
    </>
  );
};

export default page;
export { UserContext };
export { ToggleContext };
