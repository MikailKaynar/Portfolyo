import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#E6EBE0] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Hakkımda
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4">
          <div className="md:text-right text-4xl font-bold ">
            <p>
              Selam. Ben Mikail, tanıştığıma memnun oldum. Etrafa göz
              atabilirsin
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto ipsum officiis odit dolor natus nisi suscipit veritatis
              optio quia harum? Inventore facilis numquam asperiores nostrum
              cupiditate nemo perferendis hic itaque?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
