import React, { useState, useEffect } from "react";

const UseState = () => {
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    alert(count1);
  }, [count1]);

  const handleClick = () => {
    setCount1(count1 + 1);
    //서버에 count 전송
  };

  return (
    <>
      <h1>{count1}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default UseState;
