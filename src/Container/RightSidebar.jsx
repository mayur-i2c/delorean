import React from "react";

function RightSidebar() {
  const data = [1, 2, 3];
  return (
    <div className="side-menu-right overflow-auto">
      <div className="flex justify-center flex-col">
        <div className="flex justify-center ">
          <button className="mt-2 alert-btn">
            <img src="https://delorean.im/core/img/wanew-alertpanel.png" alt="" />
          </button>
        </div>
        <div className="m-3 mt-7">
          {data.map((item) => (
            <div className="alert-item font">
              EURCAD
              <span className="timeframe">
                (15M)
                <br />
                Called At (Price): 1.5628
                <br />
                <strong>Time (UTC): 2021-01-04 15:30:01 </strong>
                <br />
                <strong>Time (Local): </strong>
                2021-01-04 09:00:01
                <br />
                Time Passed (Min): 1 hour and 0 minutes.
                <br />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
