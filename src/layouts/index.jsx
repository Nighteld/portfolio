import React from "react";
import NavBar from "./navbar";

const MainLayOut = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  );
};
export default MainLayOut;
