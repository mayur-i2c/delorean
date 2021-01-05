import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

import Header from "./Header";

function Container(props) {
  return (
    <div>
      <Header />
      <div className="relative" style={{ minHeight: "calc(100vh - 135px)" }}>
        <LeftSidebar />
        <RightSidebar />
        <main className="main-contant p-2">{props.children}</main>
      </div>
    </div>
  );
}

export default Container;
