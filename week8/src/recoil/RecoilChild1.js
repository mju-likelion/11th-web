import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { colorAtom } from "../atom/colorAtom";

const RecoilChild1 = () => {
  useEffect(() => {
    console.log("RecoilChild1 render!");
  });

  const [color, setColor] = useRecoilState(colorAtom);

  return (
    <>
      <div style={{ color }}>{color}</div>
      <button onClick={() => setColor("blue")}>change color to blue</button>
      <button onClick={() => setColor("red")}>change color to red</button>
    </>
  );
};

export default RecoilChild1;
