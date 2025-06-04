import React from "react";
import "./Toolkit.css";

const Toolkit = ({ appear, theme, children }) => {
  return (
    <div className={`toolkit ${appear ? "appear" : ""} ${theme}`}>
      {children}
    </div>
  );
};

export default Toolkit;
