import React from "react";
import archatapp from "../assets/archatap.png";
import armarkap from "../assets/armarkap.png";
import artodoap from "../assets/artodoap.png";
const Work = () => {
  return (
    <div
      name="work"
      className="bg-[#E6EBE0] w-full md:h-screen text-gray-300 flex"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-28 sm:mt-40 md:mt-80 lg:mt-32   ">
          <p className="text-4xl font-bold inline border-b-4 text-[#4c979c] border-[#FCA311]">
            Projelerim
          </p>
          <p className="text- py-6 text-[#14213D]">
            Yaptığım bazı projelere gözat
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-center py-8 gap-3">
          <div className="w-80 p-6 bg-[#14213D] m-auto rounded-md hover:rounded-none hover:shadow-2xl hover:scale-110 md:hover:scale-125 hover:bg-opacity-95 duration-500">
            <div className="h-96 group">
              <div className="relative ">
                <img
                  className=" rounded-md w-full object-contain relative "
                  src={archatapp}
                />
                <div className="absolute h-16 w-full bg-[#E5E5E5]/20 flex gap-2 items-center justify-center -bottom-60 group-hover:-bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href="https://github.com/MikailKaynar/chatApp"
                    target="_blank"
                  >
                    <button className="bg-[#FCA311] text-white py-1 px-2 text-sm rounded-ss-lg">
                      Code
                    </button>
                  </a>
                  <a href="https://archap.netlify.app" target="_blank">
                    <button className="bg-[#FCA311] text-white py-1 px-2 text-sm rounded-ee-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
              <h2 className="mt-12 group-hover:mt-16 transition-all duration-300 text-2xl">
                Archap
              </h2>
              <p className="mt-3 transition-all duration-300">
                Kullanıcıların anlık mesajlaşabileceği, medya paylaşabileceği
                bir chat platformu geliştirdim. Güvenli iletişim için hesap açma
                işlemlerini firebase ile gerçekleştirdim.
              </p>
            </div>
          </div>
          <div className="w-80 p-6 bg-[#14213D] m-auto rounded-md hover:rounded-none hover:shadow-2xl hover:scale-110 md:hover:scale-125 hover:bg-opacity-95 duration-500">
            <div className="h-96 group">
              <div className="relative ">
                <img
                  className=" rounded-md w-full object-contain relative "
                  src={armarkap}
                />
                <div className="absolute h-16 w-full bg-[#E5E5E5]/20 flex gap-2 items-center justify-center -bottom-60 group-hover:-bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href="https://github.com/MikailKaynar/MarketApp"
                    target="_blank"
                  >
                    <button className="bg-[#FCA311] text-white py-1 px-2 text-sm rounded-ss-lg">
                      Code
                    </button>
                  </a>
                  <a href="https://armarkap.netlify.app" target="_blank">
                    <button className="bg-[#FCA311] text-white py-1 px-2 text-sm rounded-ee-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
              <h2 className="mt-12 group-hover:mt-16 transition-all duration-300 text-2xl">
                Armarkap
              </h2>
              <p className="mt-3 transition-all duration-300">
                Online market platformu oluşturdum. Kullanıcılar hesaplarına
                bakiye ekleyebilir ve bu bakiye ile ürünleri sepetlerine ekleyip
                çıkarabilirler. kullanıcı dostu bir arayüz tasarladım
              </p>
            </div>
          </div>
          <div className="w-80 p-6 bg-[#14213D] m-auto rounded-md hover:rounded-none hover:shadow-2xl hover:scale-110 md:hover:scale-125 hover:bg-opacity-95 duration-500">
            <div className="h-96 group">
              <div className="relative ">
                <img
                  className="rounded-md w-full object-contain relative "
                  src={artodoap}
                />
                <div className="absolute h-16 w-full bg-[#E5E5E5]/20 flex gap-2 items-center justify-center -bottom-60 group-hover:-bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href="https://github.com/MikailKaynar/ToDoApp"
                    target="_blank"
                  >
                    <button className="bg-[#FCA311] text-white py-1 px-2 text-sm rounded-ss-lg">
                      Code
                    </button>
                  </a>
                  <a href="https://artodoap.netlify.app" target="_blank">
                    <button className="bg-[#FCA311] text-white py-1 px-2 text-sm rounded-ee-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
              <h2 className="mt-12 group-hover:mt-16 transition-all duration-300 text-2xl">
                Artodoap
              </h2>
              <p className="mt-3 transition-all duration-300">
                Basit ve kullanıcı dostu bir yapılacaklar listesi uygulaması
                tasarladım. Kullanıcılar tamamladıklarını kolayca silebilir
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
