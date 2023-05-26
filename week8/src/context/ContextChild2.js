import React, { memo, useContext, useEffect } from "react";
import { ColorContext } from "../App";

const ContextChild2 = () => {
  useEffect(() => {
    console.log("ContextChild2 render!");
  });
  const { state } = useContext(ColorContext);
  return <div>{state}</div>;
};

export default ContextChild2;
