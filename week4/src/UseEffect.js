import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UseEffect = () => {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Mount!");
    return () => {
      console.log("UnMount!");
    };
  }, []);

  useEffect(() => {
    console.log("rerender!");
  });

  useEffect(() => {
    console.log("counter change!");
  }, [counter]);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <Link to="/">Home</Link>
      <div>
        <input onChange={handleText} value={text} />
      </div>
      <div>
        <h1>{counter}</h1>
        <button onClick={handleCounter}>+1</button>
      </div>
    </>
  );
};

export default UseEffect;
