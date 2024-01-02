import React from "react";
import bgvid from "../assets/bg_vid.mp4";
import merch from "../assets/merch.png";
import logo from "../assets/E-logo.png";
import events from "../assets/events.png";
import aman from '../assets/aman.jpeg';
import kalpit from '../assets/kalpit.jpeg';
import deepshika from '../assets/deepshika.png';
import sanjeev from '../assets/sanjeev.jpeg'
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
        <div className="absolute top-0 left-0 w-full h-full flex">
          <div className="m-5 lg:m-20">
            <img
              src={logo}
              alt=""
              className="w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 opacity-60 shadow-2xl logo"
            />
          </div>
          <div className="absolute w-full h-full flex flex-col items-center justify-center m-4">
            <div className="text-white text-lg md:text-2xl lg:text-5xl font-bold m-4">
              ECELL IIITL Presents to you
            </div>
            <div className="heading text-white text-4xl md:text-6xl lg:text-8xl font-bold pl-4 lg:pl-0">
              ENSPIRE
            </div>
            <div className="subheading text-white text-2xl md:text-3xl font-bold m-4 p-2 bg-purple-900/60">
              Innovation Odyssey
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="blend-div bg-purple-800/60 min-h-screen flex flex-col items-center justify-center">
        <div className="m-20 w-2/3">
          <img
            src={events}
            alt=""
            className="w-auto h-auto opacity-70 shadow-2xl"
          />
        </div>
        <div className="flex justify-center items-center m-4 text-white text-4xl">Educational Workshops</div>
        <div className="flex justify-center items-center m-2 text-white text-4xl">~SPEAKERS~</div>
        <div className="flex justify-center items-center m-5 flex-wrap">
          <div className="flex flex-col items-center m-6">
            <img
              src={aman}
              alt="Admya"
              className="w-60 shadow-2xl icon"
            />
            <p className="text-white mt-2 text-2xl bg-purple-900/70 p-2">Aman Dhattarwal</p>
          </div>
          <div className="flex flex-col items-center m-6">
            <img
              src={kalpit}
              alt="DevShah"
              className="w-60 shadow-2xl icon"
            />
            <p className="text-white mt-2 text-2xl bg-purple-900/70 p-2">Kalpit Veerwal</p>
          </div>
          <div className="flex flex-col items-center m-6">
            <img
              src={deepshika}
              alt="Admya"
              className="w-60 shadow-2xl icon"
            />
            <p className="text-white mt-2 text-2xl bg-purple-900/70 p-2">Deepshika Kumar</p>
          </div>
          <div className="flex flex-col items-center m-6">
            <img
              src={sanjeev}
              alt="Admya"
              className="w-60 shadow-2xl icon"
            />
            <p className="text-white mt-2 text-2xl bg-purple-900/70 p-2">Sanjeev Bikchandani</p>
          </div>
        </div>
        <div className="w-full relative overflow-hidden flex items-center justify-center flex-wrap">
          <div className="text-white flex lg:text-5xl sm:text-2xl md:text-3xl font-bold mx-10 mt-10">
            ~EXCLUSIVE MERCH
          </div>
          <div>
            <img src={merch} alt="" className="mr-12 merch flex" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
