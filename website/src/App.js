import React, { useState, useCallback, useEffect, useRef } from "react";
import logo from "./enspire-logo-circle.png";
import bgvid from "./bg_vid"
import "./App.css";


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const showSidebar = () => {
    setSidebarOpen(true);
  };

  const hideSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
    <div>
    <video src={bgvid} autoPlay loop muted className="absolute w-full h-full object-cover z-0"/>
        <nav className="w-full bg-purple-900/40 backdrop-blur-sm ">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} className="App-logo h-12 w-12 p-1" alt="logo" />
            </div>
            <div className="md:hidden">
              <button
                onClick={isSidebarOpen ? hideSidebar : showSidebar}
                className="text-white focus:outline-none focus:border-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isSidebarOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  )}
                </svg>
              </button>
            </div>

            <div
              className={`hidden md:flex items-center space-x-5 ${
                isSidebarOpen ? "hidden" : "flex"
              }`}
            >
              <a
                href="#"
                className="text-white text-center p-4 w-40  hover:bg-purple-900/50"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white text-center p-4 w-40  hover:bg-purple-900/50"
              >
                Our Events
              </a>
              <a
                href="#"
                className="text-white text-center p-4 w-40  hover:bg-purple-900/50"
              >
                Our Sponsors
              </a>
              <a
                href="#"
                className="text-white text-center p-4 w-40  hover:bg-purple-900/50"
              >
                Teams
              </a>
            </div>
          </div>
        </nav>
        {isSidebarOpen && (
              <div className="side-bar md:hidden bg-purple-900/30 backdrop-blur-sm p-5 flex h-auto flex-col ">
                <a
                  href="#"
                  className="text-white w-full  text-center p-4  hover:bg-purple-900/50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white w-full text-center p-4 hover:bg-purple-900/50"
                >
                  Our Events
                </a>
                <a
                  href="#"
                  className="text-white w-full text-center p-4 hover:bg-purple-900/50"
                >
                  Our Sponsors
                </a>
                <a
                  href="#"
                  className="text-white w-full text-center p-4 hover:bg-purple-900/50"
                >
                  Teams
                </a>
                <div class="icons">
                    <a href="https://www.instagram.com/" target="_blank"><img src="insta.png" alt="" class="icon"/></a>
                    <a href="https://www.facebook.com/" target="_blank"><img src="facebook.png" alt="" class="icon"/></a>
                    <a href="https://www.twitter.com/" target="_blank"><img src="twitter.png" alt="" class="icon"/></a>
                </div>
              </div>
            )}

            
            </div>
    </>
  );
}

export default App;
