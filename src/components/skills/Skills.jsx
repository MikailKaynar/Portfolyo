import React from "react";
import bootstrap from "../../assets/bootstrap.png";
import csharp from "../../assets/csharp.png";
import css from "../../assets/css.png";
import express from "../../assets/express.png";
import firebase from "../../assets/firebase.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import mongodb from "../../assets/mongodb.png";
import mssql from "../../assets/mssql.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import tailwindcss from "../../assets/tailwindcss.png";
import SkillBox from "./SkillBox";
const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#E6EBE0] text-[#ED6A5A] w-full max-h-[3000px]"
    >
      <div className="max-w-[1170px]  mx-auto p-4 pt-32 sm:pt-32 md:pt-24 flex flex-col justify-center ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#FCA311] text-[#4c979c] drop-shadow-lg">
            Deneyimlerim
          </p>
          <p className="py-4 text-[#7dbbb3] text-xl drop-shadow-lg">
            proje yaptığım diller ve teknolojiler
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-center py-8">
          <SkillBox from={"#61DBFB"} to={"#4c93ab"} img={react} />
          <SkillBox from={"#A27ADD"} to={"#FFFFFF"} img={csharp} />
          <SkillBox from={"#E9CA32"} to={"#FFFFFF"} img={js} />
          <SkillBox from={"#E44D26"} to={"#EBEBEB"} img={html} />
          <SkillBox from={"#214CE5"} to={"#ECECEC"} img={css} />
          <SkillBox from={"#6E2BF4"} to={"#FFFFFF"} img={bootstrap} />
          <SkillBox from={"#15A9BC"} to={"#08CDB7"} img={tailwindcss} />
          <SkillBox from={"#323232"} to={"#b1b0b0"} img={express} />
          <SkillBox from={"#F57F17"} to={"#FFCA28"} img={firebase} />
          <SkillBox from={"#5CB14F"} to={"#947D62"} img={mongodb} />
          <SkillBox from={"#DD3835"} to={"#92ADBC"} img={mssql} />
          <SkillBox from={"#75AC63"} to={"#303030"} img={node} />
        </div>
      </div>
    </div>
  );
};

export default Skills;

/*<div className="px-3 py-4">
            <div className="grid items-start justify-center ">
              <div className="relative group ">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#61DBFB] to-[#4c93ab] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600"></button>
              </div>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#A27ADD] to-[#FFFFFF] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img src={csharp} className="w-24 m-auto  drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E9CA32] to-[#FFFFFF] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img src={js} className="w-24 m-auto  drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E44D26] to-[#EBEBEB] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img src={html} className="w-24 m-auto  drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#214CE5] to-[#ECECEC] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img src={css} className="w-24 m-auto drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#6E2BF4] to-[#FFFFFF] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img src={bootstrap} className="w-24 m-auto drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#15A9BC] to-[#08CDB7] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img
                    src={tailwindcss}
                    className="w-24 m-auto drop-shadow-lg"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#323232] to-[#b1b0b0] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img src={express} className="w-24 m-auto drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F57F17] to-[#FFCA28] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img src={firebase} className="w-24 m-auto drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#5CB14F] to-[#947D62] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img src={mongodb} className="w-24 m-auto drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DD3835] to-[#92ADBC] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img src={mssql} className="w-24 m-auto drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="grid px-2 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#75AC63] to-[#303030] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-44 h-44 backdrop-blur-xl bg-white/30 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <img src={node} className="w-24 m-auto drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>*/
