import React from "react";

import Img2 from '../../Assets/vcs logo.png';
import Img3 from '../../Assets/suvidha.png';
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";

import { SiCanva } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <div id="Experience" className="p-10 md:p-24 ">
        <h1 className="text-2xl md-text-4xl text-white font-bold">
          Experience
        </h1>

        <div className="flex flex-wrap items-center justify-around">
          <div className="flex flex-wrap md:w-2/5 gap-8 md:p-10 py-10">
            <span className=" p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaHtml5 color="#e34f26" size={50} className="" />
            </span>

            <span className=" p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaCss3 color="#1572b6" size={50} className="" />
            </span>

            <span className=" p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaJs color="#f7de1e" size={50} className="" />
            </span>

            <span className=" p-3 bg-zinc-950 flex items-center rounded-2xl">
              <RiTailwindCssFill color="blue" size={50} className="" />
            </span>

            <span className=" p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaBootstrap color="#6f42c1" size={50} className="" />
            </span>

            <span className=" p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaReact color="#61dafb" size={50} className="" />
            </span>

            <span className=" p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiCanva color="white" size={50} className="" />
            </span>
            <span className=" p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaFigma color="#f24e1e" size={50} className="" />
            </span>
          </div>
          <div>
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ">
              {/* <FaGoogle color="4285f4" size={50} /> */}
              <img src={Img2} alt=" About Image" />


              <span className="text-white">
                <h2 className=" leading-tight">Visualize Informatica Innovations Solution Private Limited</h2>
                <p className=" text-sm leading-tight font-thin">
                  {" "}
                  May 2023 to Feb 2024 (10 mos)
                </p>
                <ul className=" text-sm p-2">
                  <li>- UI/UX designer Inter</li>
                  <li>- Graphic designer Inter</li>
                </ul>
              </span>
            </div>

            

            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ">
              {/* <FaGoogle color="4285f4" size={50} /> */}

              <img className="h-24 w-24" src={Img3} alt=" About Image" />
              <span className="text-white">
                <h2 className=" leading-tight">Suvidha Foundation</h2>
                <p className=" text-sm leading-tight font-thin">
                  {" "}
                  May 2024 to Aug 2024 - (3 mos)
                </p>
                <ul className=" text-sm p-2">
                  <li>- Frontend Developer</li>
                 
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
