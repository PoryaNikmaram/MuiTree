import { Box } from "@mui/material";
import treeData from "../public/data";
import Tree from "./Tree";

function App() {
  return (
    <Box
      maxWidth={"720px"}
      margin={"auto"}
      padding={"1rem"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Tree data={treeData} />
    </Box>
  );
}

export default App;
