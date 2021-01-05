import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <nav className="flex relative items-center border-solid border-b-4">
      <div>
        <img className="ml-3" src="https://delorean.im/core/img/imlogo.png" alt="Workflow" />
      </div>


      <div className="w-full">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Strategies
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Training
                </Link>
                <Link
                  to="/conatc"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Help
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative flex items-center">
              <i className="fa fa-question-circle ml-2" style={{ fontSize: "25px" }} aria-hidden="true" />
              <i className="fa fa-calculator ml-2" style={{ fontSize: "25px" }} aria-hidden="true" />
              <i className="fas fa-bell ml-2" style={{ fontSize: "25px" }} />
              <i className="fas fa-ellipsis-v ml-2" style={{ fontSize: "25px" }} />
              <i className="fas fa-sign-out-alt ml-2" style={{ fontSize: "25px" }} />
              <div className="mx-2 flex items-center">
                <button className="bg-gray-800 text-sm rounded-full" id="user-menu" aria-haspopup="true">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
                <span className="ml-1">User Name</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 mx-3 mb-3 px-5 relative flex items-center justify-between h-14">
          <div>
            <h1 className="logo-Font">Delorean</h1>
          </div>
          <div>
            <img src="https://delorean.im/core/img/imacademylogo.png" alt="no " />
          </div>
          <div className="flex items-center ">
            <span>go</span>
            <strong>LIVE</strong>
            <img className="ml-2" src="https://delorean.im/core/img/wanew-headervideos.png" alt="no " />
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Header;
