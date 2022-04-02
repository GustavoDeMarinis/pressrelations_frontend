import React from "react";

const Error = ({ children }) => {
  return (
    <span style={{ margin: "0 5px", fontSize: "12px", color: "red" }}>
      {children}
    </span>
  );
};

export default Error;
