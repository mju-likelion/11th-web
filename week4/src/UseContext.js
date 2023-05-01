import React, { createContext, useContext } from "react";

const TextContext = createContext("");

const UseContext = () => {
  return (
    <TextContext.Provider value="Who needs me?">
      <FirstComponent />
    </TextContext.Provider>
  );
};

function FirstComponent() {
  return (
    <div>
      <h3>I am the first component</h3>
      <SecondComponent />
    </div>
  );
}

function SecondComponent() {
  return (
    <div>
      <h3>I am the second component</h3>
      <ThirdComponent />
    </div>
  );
}

function ThirdComponent() {
  return (
    <div>
      <h3>I am the third component</h3>
      <ComponentNeedingProps />
    </div>
  );
}

function ComponentNeedingProps() {
  const content = useContext(TextContext);
  return <h3>{content}</h3>;
}

export default UseContext;
