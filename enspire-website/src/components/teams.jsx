import React from "react";

import Apoorv from "../assets/Teams/Apoorv.jpg";
import Arpita from "../assets/Teams/arpita.jpg";
import AryanKumar from "../assets/Teams/AryanKumar.jpg";
import Charan from "../assets/Teams/Charan.jpg";
import Deep from "../assets/Teams/Deep.jpg";
import DevShah from "../assets/Teams/Dev_Shah.jpg";
import Dilip from "../assets/Teams/Dilip.jpg";
import Divyanshi from "../assets/Teams/Divyanshi .jpg";
import Karthik from "../assets/Teams/Karthik.jpeg";
import Mudit from "../assets/Teams/Mudit.jpg";
import Rishi from "../assets/Teams/Rishi.jpg";
import SakshiSharma from "../assets/Teams/Sakshi_Sharma.jpeg";
import Samarth from "../assets/Teams/Samarth.jpg";
import Sarthak from "../assets/Teams/Sarthak.jpg";
import TusharAgrawal from "../assets/Teams/Tushar_Agrawal.jpg";
import Umm from "../assets/Teams/Umm.jpeg";
import VineetVerma from "../assets/Teams/Vineet_Verma.jpg";
import AashishPapneja from "../assets/Teams/Aashish_Papneja.jpg";
import Admya from "../assets/Teams/Admya.jpg";
import AnsuKha from "../assets/Teams/ansukha.jpg";

import '../App.css'

function Teams() {
  return (
    <>
      <div className="bg-purple-800/50 min-h-screen flex flex-col flex-wrap items-center justify-center">
      <div className="flex justify-center items-center m-16 text-white text-7xl">Our Team</div>
      <div className="flex justify-center items-center m-6 text-white text-4xl">COORDINATORS</div>
        <div className="flex justify-center items-center m-5 flex-wrap">
          <div className="flex flex-col items-center m-4">
            <img
              src={Admya}
              alt="Admya"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Admya</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img
              src={DevShah}
              alt="DevShah"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-4xl bg-zinc-800/80 p-4">Dev Shah</p>
          </div>
        </div>
        <div className="flex justify-center items-center m-6 text-white text-4xl">RELATIONS</div>
        <div className="flex justify-center items-center m-5 flex-wrap">
          <div className="flex flex-col items-center m-4">
            <img
              src={Apoorv}
              alt="Apoorv"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Apoorv</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img
              src={Arpita}
              alt="Arpita"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Arpita</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img
              src={Dilip}
              alt="Dilip"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Dilip</p>
          </div>
        </div>
        <div className="flex justify-center items-center m-6 text-white text-4xl">EVENT LEAD</div>
        <div className="flex justify-center items-center m-5 flex-wrap">
          <div className="flex flex-col items-center m-4">
            <img
              src={Divyanshi}
              alt="Divyanshi"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-4xl bg-zinc-800/80 p-4">Divyanshi</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img
              src={SakshiSharma}
              alt="SakshiSharma"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-2xl bg-zinc-800/80 p-4">Sakshi Sharma</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img
              src={TusharAgrawal}
              alt="TusharAgrawal"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-2xl bg-zinc-800/80 p-4">Tushar Agrawal</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img
              src={AashishPapneja}
              alt="AashishPapneja"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-2xl bg-zinc-800/80 p-4">Aashish Papneja</p>
          </div>
        </div>
        <div className="flex justify-center items-center m-6 text-white text-4xl">DEVELOPERS</div>
        <div className="flex justify-center items-center m-5 flex-wrap">
          <div className="flex flex-col items-center m-4">
            <img
              src={Deep}
              alt="Deep"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Deep</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img
              src={Karthik}
              alt="Karthik"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Karthik</p>
          </div>
        </div>
        <div className="flex justify-center items-center m-6 text-white text-4xl">OUTREACH AND COLLABORATIONS TEAM</div>
        <div className="flex justify-center items-center m-5 flex-wrap">
          <div className="flex flex-col items-center m-4">
            <img
              src={AryanKumar}
              alt="AryanKumar"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-3xl bg-zinc-800/80 p-4">Aryan Kumar</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src={Umm} alt="Umm" className="team-member w-60 shadow-2xl" />
            <p className="name absolute text-white mt-20 text-3xl bg-zinc-800/80 p-4">Umm E Kulsum</p>
          </div>
        </div>
        <div className="flex justify-center items-center m-6 text-white text-4xl">DESIGNERS</div>
        <div className="flex justify-center items-center m-5 flex-wrap">
          <div className="flex flex-col items-center m-4">
            <img
              src={VineetVerma}
              alt="VineetVerma"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-3xl bg-zinc-800/80 p-4">Vineet Verma</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img
              src={AnsuKha}
              alt="AnsuKha"
              className="team-member w-60 shadow-2xl"
            />
            <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Anushka</p>
          </div>
        </div>
        <div className="flex justify-center items-center m-6 text-white text-4xl">WEB TEAM</div>
        <div className="flex justify-center items-center m-5 flex-wrap">
        <div className="flex flex-col items-center m-4">
          <img
            src={Charan}
            alt="Charan"
            className="team-member w-60 shadow-2xl"
          />
          <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Charan</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <img
            src={Mudit}
            alt="Mudit"
            className="team-member w-60 shadow-2xl"
          />
          <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Mudit</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <img
            src={Rishi}
            alt="Rishi"
            className="team-member w-60 shadow-2xl"
          />
          <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Rishi</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <img
            src={Samarth}
            alt="Samarth"
            className="team-member w-60 shadow-2xl"
          />
          <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Samarth</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <img
            src={Sarthak}
            alt="Sarthak"
            className="team-member w-60 shadow-2xl"
          />
          <p className="name absolute text-white mt-20 text-5xl bg-zinc-800/80 p-4">Sarthak</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
