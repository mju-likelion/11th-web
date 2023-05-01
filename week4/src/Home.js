import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Link to="state">state</Link>
      </div>
      <div>
        <Link to="effect">effect</Link>
      </div>
      <div>
        <Link to="context">context</Link>
      </div>
    </>
  );
};

export default Home;
