import React from "react";
import bgvid from "../assets/bg_vid.mp4";

function Home() {
  return (
    <>
      <div className="relative">
        <video
          src={bgvid}
          autoPlay
          loop
          muted
          className=" opacity-80  w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* Add your overlay elements here */}
          <div className="text-white text-4xl font-bold">
            Welcome to my website!
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
