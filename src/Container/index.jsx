import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

import Header from "./Header";

function Container(props) {
  return (
    <div>
      <Header />
      <div className="relative mt-4 sm-con border-top " style={{ minHeight: "calc(100vh - 135px)" }}>
        <LeftSidebar />
        <main className="main-contant p-2">{props.children}</main>
        <RightSidebar />
      </div>
    </div>
  );
}

export default Container;
