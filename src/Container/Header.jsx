import React from "react";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { isBrowser } from "react-device-detect";
function onSelect({ key }) {
  console.log(`${key} selected`);
}

function onVisibleChange(visible) {
  console.log(visible);
}

const strategiesMenu = (
  <Menu className="navBar-dropdown" onSelect={onSelect}>
    <MenuItem className="navBar-dropdown-item">Shadow</MenuItem>
  </Menu>
);

const trainingMenu = (
  <Menu className="navBar-dropdown" onSelect={onSelect}>
    <MenuItem className="navBar-dropdown-item">Watch this!</MenuItem>
    <MenuItem className="navBar-dropdown-item">One</MenuItem>
    <MenuItem className="navBar-dropdown-item">Two</MenuItem>
  </Menu>
);

const helpMenu = (
  <Menu className="navBar-dropdown" onSelect={onSelect}>
    <MenuItem className="navBar-dropdown-item">Get Support</MenuItem>
  </Menu>
);

function Header() {
  return (
    <nav className="flex relative items-center border-solid">
      <div>
        <img
          className="ml-3 header-logo"
          height="60px"
          width="60px"
          src="https://delorean.im/core/img/imlogo.png"
          alt="Workflow"
        />
      </div>
      <div className="w-full main-nav-container">
        <div className="relative main-nav flex items-center justify-between">
          <div className="left-side-header lg:flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex">
              <Dropdown
                trigger={["click", isBrowser && "hover"]}
                overlay={strategiesMenu}
                animation="slide-up"
                onVisibleChange={onVisibleChange}
              >
                <button className="navBar-dropdown-btn uppercase">Strategies</button>
              </Dropdown>

              <Dropdown
                trigger={["click", isBrowser && "hover"]}
                overlay={trainingMenu}
                animation="slide-up"
                onVisibleChange={onVisibleChange}
              >
                <button className="navBar-dropdown-btn uppercase">Training</button>
              </Dropdown>
              <Dropdown
                trigger={["click", isBrowser && "hover"]}
                overlay={helpMenu}
                animation="slide-up"
                onVisibleChange={onVisibleChange}
              >
                <button className="navBar-dropdown-btn uppercase">Help</button>
              </Dropdown>
            </div>
          </div>
          <div className="right-side-header absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative flex items-center">
              <i className="fa fa-question-circle ml-3" style={{ fontSize: "25px" }} aria-hidden="true" />
              <i className="fa fa-calculator ml-3" style={{ fontSize: "25px" }} aria-hidden="true" />
              <div className="mx-2 ml-3 flex items-center">
                <button className="bg-gray-800 text-sm rounded-full" id="user-menu" aria-haspopup="true">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
                <span className="ml-2 font-username">User Name</span>
              </div>
              <i className="fas fa-bell ml-1" style={{ fontSize: "25px" }} />
              <i className="fas fa-ellipsis-v ml-3" style={{ fontSize: "25px" }} />
              <i className="fas fa-sign-out-alt ml-3" style={{ fontSize: "25px" }} />
            </div>
          </div>
        </div>
        <div className="bg-gray-200 relative flex items-center justify-between">
          <div className="relative">
            <h1 className="logo-Font ml-15">delorean</h1>
            <span className="product-name-tm">™</span>
          </div>
          <div className="app-banner">
            <img className="img-navbar-center" src="https://delorean.im/core/img/imacademylogo.png" alt="no" />
          </div>
          <div className="app-banner flex items-center ">
            <span>go</span>
            <strong>LIVE</strong>
            <img className="ml-2 mr-15" src="https://delorean.im/core/img/wanew-headervideos.png" alt="no" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
