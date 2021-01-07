import React from "react";

function RightSidebar() {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <div className="side-menu-right ">
      <div className="flex justify-center flex-col">
        <div className="flex justify-center alert-btn">
          <button className="my-3">
            <img src="https://delorean.im/core/img/wanew-alertpanel.png" alt="" />
          </button>
        </div>
        <div className="alert-container overflow-auto">
          {data.map((item, index) => (
            <div
              key={index}
              style={{ borderLeftColor: index % 2 === 0 ? "#abe64d" : "#F94340" }}
              className="alert-item font font-weight-bold"
            >
              EURCAD
              <span className="timeframe">
                ({item}M)
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
