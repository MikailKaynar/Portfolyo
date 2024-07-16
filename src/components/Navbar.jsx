import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuHandle = () => setNav(!nav);
  return (
    <div className="z-50 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#EF8354]">
      <span className="font-logofont text-4xl text-[#4F5D75] font-black">
        MikailKaynar
      </span>
      <ul className="hidden md:flex text-[#4F5D75] text-lg font-medium">
        <li className="py-6 text-xl ">
          <Link to="home" smooth={true} duration={500}>
            Başlangıç
          </Link>
        </li>
        <li className="py-6 text-xl ">
          <Link to="skills" smooth={true} duration={500}>
            Deneyimlerim
          </Link>
        </li>
        <li className="py-6 text-xl ">
          <Link to="work" smooth={true} duration={500}>
            Projelerim
          </Link>
        </li>
      </ul>

      <div onClick={menuHandle} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#EF8354] text-[#4F5D75] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">
          <Link onClick={menuHandle} to="home" smooth={true} duration={500}>
            Başlangıç
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={menuHandle} to="skills" smooth={true} duration={500}>
            Deneyimlerim
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={menuHandle} to="work" smooth={true} duration={500}>
            Projelerim
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4335]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
              target="_blank"
            >
              51mikail15 <br/> gmail.com <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4078c0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/MikailKaynar"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mikail-kaynar-90a267202/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#14171A]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
              target="_blank"
            >
              Twitter <FaXTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
