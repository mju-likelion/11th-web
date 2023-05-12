import React from "react";
import { Link, useLocation } from "react-router-dom";
import { pageInfo } from "../data/PageInfo";

const BoardsList = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      {pageInfo.map((info, idx) => (
        <Link to={`${info.id}`} key={idx}>
          <h2>{info.content}</h2>
        </Link>
      ))}
    </>
  );
};

export default BoardsList;
