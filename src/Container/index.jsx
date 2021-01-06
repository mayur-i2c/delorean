import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

import Header from "./Header";

function Container(props) {
  return (
    <div>
      <Header />

      <div className="relative mt-4 sm-con border-top">
        <div className="row grow w-100">
          <div className="col overflow-auto left-side-row">
            <LeftSidebar />
          </div>

          <div className="col-10 col-md-8 h-100 main-content-row">{props.children}</div>
          <div className="col p-0 right-side-row">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
