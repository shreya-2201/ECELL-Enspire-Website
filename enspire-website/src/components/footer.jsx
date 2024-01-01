import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/E-logo-circle.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <>
      <div>
        <div className="w-full bg-purple-900/80 backdrop-blur-sm py-8 text-center">
          <div className="flex justify-center items-center flex-col">
            <img src={logo} className="App-logo h-12 w-12 p-1" alt="logo" />

            <p className="text-white text-center mt-4 mb-8">ECELL of IIITL</p>

            <div className="flex flex-col items-center md:flex-row justify-around text-white w-full md:w-1/2 mb-4">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <ul>
                  <li>
                    <Link to="/teams">Teams</Link>
                  </li>
                  <li>
                    <Link to="/sponsers">Sponsers</Link>
                  </li>
                </ul>
              </div>

              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Links</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Reach Us</h3>
                <p>
                  <a href="mailto:enspire@iiitl.ac.in">enspire@iiitl.ac.in</a>
                </p>
                <p>
                  <a href="mailto:ecell@iiitl.ac.in">ecell@iiitl.ac.in</a>
                </p>
              </div>
            </div>

            <div className="flex flex-row space-x-4">
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
        </div>
      </div>
    </>
  );
}

export default Footer;
