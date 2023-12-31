import React from "react";
import bgvid from "../assets/bg_vid.mp4";
import merch from "../assets/merch.png";
import logo from "../assets/E-logo-circle.png";
import "../App.css";

function Home() {
  return (
    <>
      <div className="bg-fuchsia-600/20 blend-div relative overflow-hidden">
        <video
          src={bgvid}
          autoPlay
          loop
          muted
          className="blend-video opacity-80 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center text-center lg:items-start lg:justify-center lg:ml-40 lg:mt-20">
        <img src={logo} alt="" className="w-40 h-40"/>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:ml-40 lg:mt-20">
            <div className="text-white text-2xl font-bold m-4">
              ECELL IIITL Presents to you
            </div>
            <div className="heading text-white text-8xl font-bold pl-4 lg:pl-0">
              ENSPIRE
            </div>
            <div className="subheading text-white text-3xl font-bold m-4 p-1 bg-pink-900/70">
              Innovation Odyssey
            </div>
          </div>
        </div>
      </div>
      <div className="blend-div bg-purple-800/60 min-h-screen ">
        <div className="w-full relative overflow-hidden flex flex-row items-center justify-center sm:flex-wrap">
          <div className="text-white lg:text-8xl sm:text-2xl md:text-3xl font-bold mx-10 mt-10">
            EXCLUSIVE MERCH
          </div>
          <img src={merch} alt="" className="mr-12 merch" />
        </div>
      </div>
    </>
  );
}

export default Home;
