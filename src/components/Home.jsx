import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#E6EBE0] ">
      <div className="max-w-[1200px] pt-0 mt-0 mx-auto px-8 flex flex-col justify-center h-full">
        <div className="pb-8 mt-28 sm:mt-40 md:mt-80 lg:mt-32   ">
          <p className="text-4xl font-bold inline border-b-4 text-[#9BC1BC] drop-shadow-lg border-[#FCA311]">
            Merhaba, benim adım
          </p>
        </div>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#5CA4A9]">
          Mikail KAYNAR
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#9BC1BC] drop-shadow-md mb-12">
          Çoğu zaman frontend, bazen full stack developerım
        </h2>

        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group text-[#ED6A5A] border-2 border-[#ED6A5A] px-6 py-3 my-2 flex items-center drop-shadow-lg font-medium hover:bg-[#ED6A5A] hover:drop-shadow-2xl hover:text-[#161A30] hover:border-[#ED6A5A]">
              Projelerime Gözat
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
