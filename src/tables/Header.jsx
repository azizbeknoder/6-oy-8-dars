import React from "react";
import logo from "../images/Logo.svg";
import img from "../images/Illustration.svg";

export default function () {
  return (
    <div className="bg-[#1c1e53] w-full h-[760px]">
      <div className="container mx-auto">
        <nav className="w-full  h-[92px] flex justify-between  ">
          <div className="pl-40 pt-[33px]">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex mr-[160px]">
            <ul className="text-white flex gap-8 pt-[33px]">
              <li className="font-bold ">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li className="pl-0"></li>
            </ul>
            <button className="w-[165px] h-[60px] border-[2px] text-white mt-3 rounded-3xl ml-12">
              <a href="#">Sign up</a>
            </button>
          </div>
        </nav>
        <div className="ml-[160px] mt-[126px] flex ">
          <div>
            <h1 className="text-white font-bold text-6xl w-[582px] h-[222px]">
              Building stellar websites for early startups
            </h1>
            <p className="text-yellow-50 w-[582px] text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="flex">
              <button className="bg-[#fcd980] w-[230px] h-[64px] rounded-3xl mt-12">
                View our work
              </button>
              <a href="#" className="text-white font-bold mt-16 ml-10">
                view pricing{" "}
              </a>
            </div>
          </div>
          <div className="ml-[60px]">
            <img src={img} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
