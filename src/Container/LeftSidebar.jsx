import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { isBrowser } from "react-device-detect";

import drawingToolbar from "../constant/drawingToolbar";

function onSelect({ key }) {
  console.log(`${key} selected`);
}

function onVisibleChange(visible) {
  console.log(visible);
}

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
    <div className="flex">
      <div id="tray">
        <div className="section-1 tray-products flex items-center flex-col">
          <Link onClick={() => openLink("http://im.center")} to="">
            <img src="https://delorean.im/core/img/academyNEW2.png" alt="" />
          </Link>
          <Link onClick={() => openLink("http://im.center")} to="">
            <img src="https://delorean.im/core/img/piptalkNEW.png" alt="" />
          </Link>
          <Link onClick={() => openLink("http://im.center")} to="">
            <img id="signal_Button" src="https://delorean.im/core/img/lightbulbTEST.png" alt="" />
          </Link>
        </div>
        <hr
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            border: 0,
            borderTop: "1px solid rgba(0,0,0,.1)",
          }}
        />

        <div className="section-2 tray-products flex items-center bor flex-col">
          {section2.map(({ img, link }, index) => (
            <Link key={index} onClick={() => openLink(link)} className="tray-products" to="">
              <img src={img} alt="" />
            </Link>
          ))}
        </div>
      </div>
      <div id="drawingToolbar">
        <div className="drawingToolbar-inner flex items-center flex-col">
          {drawingToolbar.map(({ childMenu, icon }, index) => (
            <div key={index} className="drawingToolbar-item dropdown ">
              {childMenu.length ? (
                <Dropdown
                trigger={["click", isBrowser && "hover"]}
                // trigger={["hover", "click"]}
                  overlay={() => (
                    <Menu className="dropdown-content text-gray-700 pt-1" onSelect={onSelect}>
                      {childMenu.map(({ icon, name }) => (
                        <MenuItem className="dropdown-item">
                          <div>
                            {icon}
                            <span>{name}</span>
                          </div>
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                  animation="slide-up"
                  onVisibleChange={onVisibleChange}
                >
                  {icon}
                </Dropdown>
              ) : (
                icon
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
