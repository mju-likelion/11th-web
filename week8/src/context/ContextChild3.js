import React, { memo, useEffect } from "react";

const ContextChild3 = () => {
  useEffect(() => {
    console.log("ContextChild3 render!");
  });
  return <div></div>;
};

export default ContextChild3;
