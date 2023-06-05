import { createContext, useState } from "react";
import ContextChild1 from "./context/ContextChild1";
import ContextChild2 from "./context/ContextChild2";
import ContextChild3 from "./context/ContextChild3";

import RecoilChild1 from "./recoil/RecoilChild1";
import RecoilChild2 from "./recoil/RecoilChild2";
import RecoilChild3 from "./recoil/RecoilChild3";

export const ColorContext = createContext({
  color: "red",
  setColor: () => {},
  state: "",
});

//export const StateContext = createContext("");

function App() {
  const [color, setColor] = useState("red");
  const colorValue = { color, setColor, state: "state value" };

  return (
    <>
      {/* <ColorContext.Provider value={colorValue}> */}
      {/* <StateContext.Provider value="state value"> */}
      {/* <ContextChild1 />
        <ContextChild2 />
        <ContextChild3 /> */}
      {/* </StateContext.Provider> */}
      {/* </ColorContext.Provider> */}

      <RecoilChild1 />
      <RecoilChild2 />
      <RecoilChild3 />
    </>
  );
}

export default App;
