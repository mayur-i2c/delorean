import React from "react";
import { Link } from "react-router-dom";
import drawingToolbar from "../constant/drawingToolbar";

const section2 = [
  "https://delorean.im/core/img/BB.png",
  "https://delorean.im/core/img/DL.png",
  "https://delorean.im/core/img/GC.png",
  "https://delorean.im/core/img/HS.png",
  "https://delorean.im/core/img/LB.png",
  "https://delorean.im/core/img/LV.png",
  "https://delorean.im/core/img/SC.png",
  "https://delorean.im/core/img/SD.png",
  "https://delorean.im/core/img/ST.png",
];

function LeftSidebar() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="side-menu-left">
      <div id="tray">
        <div className="section-1 tray-products flex items-center flex-col">
          <Link onClick={() => openLink("http://im.center")}>
            <img src="https://delorean.im/core/img/academyNEW2.png" />
          </Link>
          <Link onClick={() => openLink("http://im.center")}>
            <img src="https://delorean.im/core/img/piptalkNEW.png" />
          </Link>
          <Link onClick={() => openLink("http://im.center")}>
            <img id="signal_Button" src="https://delorean.im/core/img/lightbulbTEST.png" />
          </Link>
        </div>
        <div className="section-2 tray-products flex items-center flex-col">
          {section2.map((item) => (
            <Link onClick={() => openLink("http://im.center")} className="tray-products">
              <img src={item} />
            </Link>
          ))}
        </div>
      </div>
      <div className="drawingToolbar">
        <div className="drawingToolbar-inner flex items-center flex-col">
          {drawingToolbar.map(({ childMenu, icon }) => (
            <div className="drawingToolbar-item dropdown m-0.5	my-1">
              {icon}
              <ul className="dropdown-content text-gray-700 pt-1">
                {childMenu.map(({ icon, name }) => (
                  <li className="dropdown-item">
                    <div>
                      {icon}
                      <span>{name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
