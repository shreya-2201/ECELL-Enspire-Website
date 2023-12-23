import React from "react";
import {Link,NavLink} from 'react-router-dom'
import { useState, useCallback, useEffect, useRef } from "react";
import logo from "../assets/enspire-logo-circle.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import "../App.css";


function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const showSidebar = () => {
      setSidebarOpen(true);
    };
  
    const hideSidebar = () => {
      setSidebarOpen(false);
    };
    const handleNavLinkClick = () => {
      hideSidebar();
    };
  
    return (
      <>
        <div>
          <nav className="w-full bg-purple-900/70 backdrop-blur-sm ">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Link to="/">
                <img src={logo} className="App-logo h-12 w-12 p-1" alt="logo" />
                </Link>
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
                <NavLink
                  to="/"
                  className={({isActive})=>'text-white text-center p-4 w-40  hover:bg-purple-900/50 ${isActive? "text-gray-700":"text-white"}'}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/events"
                  className={({isActive})=>'text-white text-center p-4 w-40  hover:bg-purple-900/50 ${isActive? "text-gray-700":"text-white"}'}
                >
                  Events
                </NavLink>
                <NavLink
                  to="/sponsers"
                  className={({isActive})=>'text-white text-center p-4 w-40  hover:bg-purple-900/50 ${isActive? "text-gray-700":"text-white"}'}
                >
                  Sponsers
                </NavLink>
                <NavLink
                  to="/teams"
                  className={({isActive})=>'text-white text-center p-4 w-40  hover:bg-purple-900/50 ${isActive? "text-gray-700":"text-white"}'}
                >
                  Teams
                </NavLink>
              </div>
            </div>
          </nav>
          {isSidebarOpen && (
            <div className="z-50 absolute side-bar md:hidden bg-purple-900/40 backdrop-blur-sm p-5 flex h-auto flex-col w-screen">
              <NavLink
                to="/"
                onClick={handleNavLinkClick}
                className={({isActive})=>'text-white w-full  text-center p-4  hover:bg-purple-900/50 ${isActive? "text-gray-700":"text-white"}'}
              >
                Home
              </NavLink>
              <NavLink
                to="/events"
                onClick={handleNavLinkClick}
                className={({isActive})=>'text-white w-full  text-center p-4  hover:bg-purple-900/50 ${isActive? "text-gray-700":"text-white"}'}
              >
                Events
              </NavLink>
              <NavLink
                to="/sponsers"
                onClick={handleNavLinkClick}
                className={({isActive})=>'text-white w-full  text-center p-4  hover:bg-purple-900/50 ${isActive? "text-gray-700":"text-white"}'}
              >
                Sponsers
              </NavLink>
              <NavLink
                to="/teams"
                onClick={handleNavLinkClick}
                className={({isActive})=>'text-white w-full  text-center p-4  hover:bg-purple-900/50 ${isActive? "text-gray-700":"text-white"}'}
              >
                Teams
              </NavLink>
              
              <div className="flex flex-row justify-end space-x-4 mt-2 ">
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    src={insta}
                    alt=""
                    className="w-10 icon bg-purple-900/40 backdrop-blur-sm p-0.5 rounded-full"
                  />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <img
                    src={facebook}
                    alt=""
                    className="w-10 icon bg-purple-900/40 backdrop-blur-sm p-0.5 rounded-full"
                  />
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                  <img
                    src={twitter}
                    alt=""
                    className="w-10 icon bg-purple-900/40 backdrop-blur-sm p-0.5 rounded-full"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </>
  
    );
  }
  
  export default Header;
  

