import React, { memo, useContext, useEffect } from "react";
import { ColorContext, DispatchContext } from "../App";

const ContextChild1 = () => {
  useEffect(() => {
    console.log("ContextChild1 render!");
  });
  const { color, setColor } = useContext(ColorContext);
  return (
    <>
      <div style={{ color }}>{color}</div>
      <button onClick={() => setColor("blue")}>change color to blue</button>
      <button onClick={() => setColor("red")}>change color to red</button>
    </>
  );
};

export default ContextChild1;
