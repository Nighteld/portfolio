import React from "react";
import NavBar from "./navbar";

const MainLayOut = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <section class="container">{children}</section>
    </React.Fragment>
  );
};
export default MainLayOut;
