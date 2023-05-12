import React from "react";
import { useParams } from "react-router-dom";
import { pageInfo } from "../data/PageInfo";

const Board = () => {
  const { id } = useParams();
  console.log(id);
  const board = pageInfo[id - 1];
  const { content, author } = board;
  return (
    <>
      <h1>{content}</h1>
      <p>{author}</p>
    </>
  );
};

export default Board;
