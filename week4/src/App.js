import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="state" element={<UseState />} />
      <Route path="effect" element={<UseEffect />} />
      <Route path="context" element={<UseContext />} />
    </Routes>
  );
}

export default App;
