/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import TreeNode from "./TreeNode";

const Tree = ({ data, level = 1 }) => {
  return (
    <>
      {data.map((el) => (
        <TreeNode key={el.id} el={el} children={el.children} level={level} />
      ))}
    </>
  );
};

export default Tree;

// id: "1",
// name: "Root",
// type: "folder",
// size: "10mb",
