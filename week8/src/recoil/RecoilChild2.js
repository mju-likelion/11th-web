import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { stateAtom } from "../atom/stateAtom";

const RecoilChild2 = () => {
  useEffect(() => {
    console.log("RecoilChild2 render!");
  });
  const state = useRecoilValue(stateAtom);

  return (
    <>
      <div>{state}</div>
    </>
  );
};

export default RecoilChild2;
