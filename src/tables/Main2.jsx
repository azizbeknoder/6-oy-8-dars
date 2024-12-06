import React from "react";
import img1 from "../images/Icon1.svg";
import img2 from "../images/Icon2.svg";
import img3 from "../images/Icon3.svg";
import img4 from "../images/Icon4.svg";
import img5 from "../images/Icon5.svg";
import img6 from "../images/Icon6.svg";

export default function Main2() {
  return (
    <div className="mt-[128px] bg-[#f4f6fc]  w-full">
      <div className="container mx-auto flex justify-center flex-col gap-12">
        <div className="">
          <div className="text-5xl w-[630px] max-w-full">
            Design that solves problems, one product at a time
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="w-[405px] h-[316px] bg-white">
            <img src={img1} alt="foto" />
            <p className="font-bold text-2xl">Uses Client First</p>
            <p className="w-[324px] h-[112px] ">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="w-[405px] h-[316px] bg-white">
            <img src={img2} alt="foto" className="" />
            <p className="font-bold text-2xl">Two Free Revision Round</p>
            <p className="w-[324px] h-[112px] ">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="w-[405px] h-[316px] bg-white">
            <img src={img3} alt="foto" className="" />
            <p className="font-bold text-2xl">Template Customization</p>
            <p className="w-[324px] h-[112px] ">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>

          <div className="w-[405px] h-[316px] bg-white">
            <img src={img4} alt="foto" className="" />
            <p className="font-bold text-2xl">24/7 Support</p>
            <p className="w-[324px] h-[112px] ">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="w-[405px] h-[316px] bg-white">
            <img src={img5} alt="foto" className="" />
            <p className="font-bold text-2xl">Quick Delivery</p>
            <p className="w-[324px] h-[112px] ">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="w-[405px] h-[316px] bg-white">
            <img src={img6} alt="foto" className="" />
            <p className="font-bold text-2xl ">Hands-on approach</p>
            <p className="w-[324px] h-[112px] ">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
