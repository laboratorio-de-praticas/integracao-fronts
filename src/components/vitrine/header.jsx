"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./navbar";

export default function SpHeader() {
  return (
    <header className="w-full">
      <div className=" flex flex-col">
        <div className="max-w-[780px] 3xl:max-w-[1000px] min-h-[80px] flex items-center bg-black rounded-r-[100px]">
          <div className="ml-8 3xl:w-[900px] 3xl:h-[200px] h-full relative w-[248px] items-center flex">
            <Image
              src="/logo_sp.svg"
              alt="São Paulo"
              fill
              className="object-fill  h-auto max-h-[120px] !w-auto !relative  min-h-[50px]"
            />
          </div>
        </div>
        <Navbar></Navbar>
      </div>
    </header>
  );
}
