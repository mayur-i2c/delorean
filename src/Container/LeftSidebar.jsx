import React from "react";
import { Link } from "react-router-dom";

import drawingToolbar from "../constant/drawingToolbar";

const section2 = [
  {
    img: "https://delorean.im/core/img/BB.png",
    link: "http://bounceback.im/",
  },
  {
    img: "https://delorean.im/core/img/DL.png",
    link: "https://delorean.im/",
  },
  {
    img: "https://delorean.im/core/img/GC.png",
    link: "http://goldcup.im/",
  },
  {
    img: "https://delorean.im/core/img/HS.png",
    link: "http://harmonics.im/",
  },
  {
    img: "https://delorean.im/core/img/LB.png",
    link: "http://goliberty.im/",
  },
  {
    img: "https://delorean.im/core/img/LV.png",
    link: "http://levels.im/",
  },
  {
    img: "https://delorean.im/core/img/PV.png",
    link: "http://pivots.im/",
  },
  {
    img: "https://delorean.im/core/img/SC.png",
    link: "http://swipecoin.im/",
  },
  {
    img: "https://delorean.im/core/img/SD.png",
    link: "http://steady.im/",
  },
  {
    img: "https://delorean.im/core/img/ST.png",
    link: "http://swipetrades.im/",
  },
];

function LeftSidebar() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  
  return (
    <div className="side-menu-left">
      <div id="tray">
        <div className="section-1 tray-products flex items-center flex-col">
          <Link onClick={() => openLink("http://im.center")} to="">
            <img src="https://delorean.im/core/img/academyNEW2.png"  alt=""/>
          </Link>
          <Link onClick={() => openLink("http://im.center")} to="">
            <img src="https://delorean.im/core/img/piptalkNEW.png" alt="" />
          </Link>
          <Link onClick={() => openLink("http://im.center")} to="">
            <img id="signal_Button" src="https://delorean.im/core/img/lightbulbTEST.png"  alt="" />
          </Link>
        </div>
        <div className="section-2 tray-products flex items-center flex-col">
          {section2.map(({ img, link }) => (
            <Link onClick={() => openLink(link)} className="tray-products" to="">
              <img src={img}  alt=""/>
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
