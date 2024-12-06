import React from "react";
import img1 from "../images/pointer1.svg";
import img2 from "../images/pointer2.svg";
import img3 from "../images/pointer3.svg";
import img4 from "../images/pointer4.svg";

export default function Main1() {
  return (
    <div className="container mx-auto">
      <div className="w-full h-[401px] flex  justify-center pt-[128px]">
        <div>
          <p className="text-5xl font-bold  mb-4">How we work</p>
          <p className="w-[405px] h-[56px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="text-[#2405f2]">Get in touch with us</p>
        </div>
        <div className="ml-[142px] ">
          <div className="flex">
            <div className="w-[328px] h-[178px]  ">
              <img src={img1} alt="foto" />
              <p className="font-bold text-3xl mt-4 mb-2">Strategy</p>
              <p className="w-[303px] h-[56px]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="w-[328px] h-[178px]">
              <img src={img2} alt="foto" />
              <p className="font-bold text-3xl mt-4 mb-2">Wireframing</p>
              <p className="w-[303px] h-[56px]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-[328px] h-[178px]">
              <img src={img3} alt="foto" />
              <p className="font-bold text-3xl mt-4 mb-2">Design </p>
              <p className="w-[303px] h-[56px]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="w-[328px] h-[178px]">
              <img src={img4} alt="foto" />
              <p className="font-bold text-3xl mt-4 mb-2">Development</p>
              <p className="w-[303px] h-[56px]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
