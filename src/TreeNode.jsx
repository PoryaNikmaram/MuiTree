/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Tree from "./Tree";

const colors = ["#4338ca", "#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe"];

const TreeNode = ({ el, children, level }) => {
  const [showChild, setShowChild] = useState(false);
  const nodeColor = Math.ceil(level % 5);

  return (
    <Box position={"relative"}>
      <Box
        key={el.id}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"1rem"}
        marginBottom={"10px"}
        borderRadius={"5px"}
        color={"#fff"}
        width={`${100 - level * 3}%`}
        sx={{
          backgroundColor: colors[nodeColor],
          direction: "rtl",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flex={"1"}
          sx={{
            paddingRight: `${children ? "25px" : ""}`,
          }}
        >
          <Typography>{el.name}</Typography>
          <Typography>{el.type}</Typography>
          <Typography>{el.size}</Typography>
        </Box>
        {el.children && (
          <Typography
            onClick={() => setShowChild((show) => !show)}
            sx={{ cursor: "pointer", marginRight: "15px" }}
          >
            {showChild ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Typography>
        )}
        {/*tree line*/}
        <Box
          sx={{
            position: "absolute",
            right: "-30px",
            width: "1px",
            height: "120%",
            backgroundColor: "#333",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: "-30px",
            width: `${level * 3}%`,
            height: "1px",
            backgroundColor: "#333",
          }}
        />
      </Box>

      {el.children && showChild && (
        <Tree data={el.children} children={children} level={level + 1} />
      )}
    </Box>
  );
};

export default TreeNode;
