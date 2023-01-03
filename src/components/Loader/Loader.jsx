import { CircularProgress } from "@mui/material";
import React from "react";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "1001",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loader;
