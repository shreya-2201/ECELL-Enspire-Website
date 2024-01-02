import React from "react";
import insyst from "../assets/insyst.jpeg"
import lensfit from "../assets/lensfit.png"
import blogadda from "../assets/blogadda.jpeg"
import bugsee from "../assets/bugsee.png"
import ohcampus from "../assets/ohcampus.jpeg"
import cloudsploit from "../assets/cloudsploit.jpeg"
import wazirx from "../assets/wazirx.png"

function Sponsers() {
  return (
    <>
      <div className="bg-purple-800/50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl mt-10 text-center">Previous Sponsers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 m-20 items-center">
            <a href="https://insystlabs.com/" target="_blank" className="flex flex-col items-center justify-center rounded overflow-hidden bg-purple-800/50 h-48 shadow-2xl text-2xl text-white icon"><img src={insyst} alt="" className="w-full h-auto md:w-1/2 lg:w-1/3 m-4" />INSYST</a>
            <a href="https://www.lensfit.com/" target="_blank" className="flex flex-col items-center justify-center rounded overflow-hidden bg-purple-800/50 h-48 shadow-2xl text-2xl text-white icon"><img src={lensfit} alt="" className="w-full h-auto md:w-1/2 lg:w-1/3 m-4"/>LENSFIT</a>
            <a href="https://www.blogadda.com/" target="_blank" className="flex flex-col items-center justify-center rounded overflow-hidden bg-purple-800/50 h-48 shadow-2xl text-2xl text-white icon"><img src={blogadda} alt="" className="w-full h-auto md:w-1/2 lg:w-1/3 m-4"/>BLOGADDA</a>
            <a href="https://www.bugsee.com/" target="_blank" className="flex flex-col items-center justify-center rounded overflow-hidden bg-purple-800/50 h-48 shadow-2xl text-2xl text-white icon"><img src={bugsee} alt="" className="w-full h-auto md:w-1/2 lg:w-1/3 m-4"/>BUGSEE</a>
            <a href="https://ohcampus.com/" target="_blank" className="flex flex-col items-center justify-center rounded overflow-hidden bg-purple-800/50 h-48 shadow-2xl text-2xl text-white icon"><img src={ohcampus} alt="" className="w-full h-auto md:w-1/2 lg:w-1/3 m-4"/>OHCAMPUS</a>
            <a href="https://www.aquasec.com/products/cspm/" target="_blank" className="flex flex-col items-center justify-center rounded overflow-hidden bg-purple-800/50 h-48 shadow-2xl text-2xl text-white icon"><img src={cloudsploit} alt="" className="w-full h-auto md:w-1/2 lg:w-1/3 m-4"/>CLOUDSPOILT</a>
            <a href="https://wazirx.com/" target="_blank" className="flex flex-col items-center justify-center rounded overflow-hidden bg-purple-800/50 h-48 shadow-2xl text-2xl text-white icon"><img src={wazirx} alt="" className="w-full h-auto md:w-1/2 lg:w-1/3 m-4"/>WAZIRX</a>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center m-5">
            <h1 className="text-white text-4xl m-6 ">Previous Stats</h1>
        <table className="border-collapse bg-purple-800/60 text-white shadow-2xl">
          <thead>
            <tr>
              <th className="p-2 border-b border-white">Event</th>
              <th className="p-2 border-b border-white">Reach</th>
              <th className="p-2 border-b border-white">Registrations</th>
              <th className="p-2 border-b border-white">Submissions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b border-white">Ad Mad</td>
              <td className="p-2 border-b border-white">16,148</td>
              <td className="p-2 border-b border-white">65</td>
              <td className="p-2 border-b border-white">13</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-white">Bizz Quiz</td>
              <td className="p-2 border-b border-white">21,597</td>
              <td className="p-2 border-b border-white">594</td>
              <td className="p-2 border-b border-white">259</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-white">Valo Night</td>
              <td className="p-2 border-b border-white">6,560</td>
              <td className="p-2 border-b border-white">0</td>
              <td className="p-2 border-b border-white">0</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-white">Find X</td>
              <td className="p-2 border-b border-white">16,000</td>
              <td className="p-2 border-b border-white">670</td>
              <td className="p-2 border-b border-white">670</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-white">Tagline</td>
              <td className="p-2 border-b border-white">11,245</td>
              <td className="p-2 border-b border-white">261</td>
              <td className="p-2 border-b border-white">48</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-white">CraZ Idea</td>
              <td className="p-2 border-b border-white">600</td>
              <td className="p-2 border-b border-white">15</td>
              <td className="p-2 border-b border-white">15</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-white">Million Dollar Idea</td>
              <td className="p-2 border-b border-white">18,506</td>
              <td className="p-2 border-b border-white">187</td>
              <td className="p-2 border-b border-white">64</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-white">BGMI</td>
              <td className="p-2 border-b border-white">600</td>
              <td className="p-2 border-b border-white">31</td>
              <td className="p-2 border-b border-white">31</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-white">Crypto Crunch</td>
              <td className="p-2 border-b border-white">12,270</td>
              <td className="p-2 border-b border-white">148</td>
              <td className="p-2 border-b border-white">148</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-white">Total</td>
              <td className="p-2 border-b border-white">1,03,526</td>
              <td className="p-2 border-b border-white">1,971</td>
              <td className="p-2 border-b border-white">1,248</td>
            </tr>
          </tbody>
        </table>
        </div>
      
      </div>
    </>
  );
}

export default Sponsers;
