import React, { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

const LearnUseEffect = () => {
  // first -> side effect function
  // actual logic of the side effect, like fetch api, console something, db connection.

  // second - clean up function.

  // third - comma seperated dependency list
  // the change/ update in the items in list will result in executing of the first function in the use effect.

  //  list ko kunai pani item update vayo vane, sidai sideeffect function run vaidincha

  // variation 1:
  // executes the useeffect hook, in every render.

  const [count, setCount] = useState(0);

  const handelClick = () => {
    setCount(count + 1);
  };

  const [total, setTotal] = useState(1);
  const totalclick = () => {
    setTotal(total + 1);
  };

  // useEffect(() => {
  //   toast.success("I will run on each render - v1");
  // });

  // ----------------------
  // variation 2:
  // runs on only first render.
  // useEffect(() => {
  //   // alert("I will run on first render -v2");
  //   toast.success("I will run on first render -v2");
  // }, []);

  // ---------------------
  // variation 3:
  // useEffect(() => {
  //   // alert("i will run every time when count is updated -v3");
  //   toast.success("i will run every time when count is updated -v3");
  // }, [count]);

  // -----------------------
  // varation 4:

  // useEffect(() => {
  //   // alert("I will be rendered if count or total is updated -v4");
  //   toast.success("I will be rendered if count or total is updated -v4");
  // }, [count, total]);

  // -------------------------
  // variation 5:
  // cleaing function added

  // useEffect(() => {
  //   return () => {
  //     toast.success("The count is unmounted -v5");
  //   };
  // }, [count]);

  return (
    <>
      <div>
        <h1 className="heading">Variation 1, useEffect</h1>
        {count} <br />
        <button onClick={handelClick} className="buttons">
          Click me!
        </button>
      </div>
      <h1 className="heading">Variation 2: useEffect</h1>
      <h1 className="heading">Variation 4: useEffect</h1>
      <button onClick={totalclick} className="buttons">
        Click me total
      </button>
      <br /> {total}
      {/* <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      /> */}
    </>
  );
};

export default LearnUseEffect;
