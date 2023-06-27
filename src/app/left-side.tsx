import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Drawer from "./drawer";
import Menu from "./menu";
import kronos from "./assets/kronos.svg";
import yorisoi from "./assets/yorisoi.svg";
import Cta from "./cta";

const LeftSide: React.FC = () => {
  return (
    <aside
      id="page-top"
      className="lg:shadow-2xl lg:shadow-kronos-700/30 lg:transition-all lg:duration-500 transition-all duration-500 lg:flex-1 lg:w-[50%] w-full lg:sticky lg:top-0 lg:left-0 lg:h-full lg:z-10 relative"
    >
      <Drawer />
      <nav className="p-3 sm:flex justify-between items-center">
        <div className="bg-no-repeat w-[120px] h-[36px] absolute top-3 left-6">
          <a href="#" id="logo-top">
            <span className="sr-only">Kronos</span>
            <Image src={kronos} alt="クロノス　ロゴ" />
          </a>
        </div>
      </nav>
      <div className="mx-auto flex justify-center items-center flex-col lg:min-h-full">
        <div className="mx-auto prose prose-stone prose-h2:text-stone-700 prose-h2:font-normal w-9/12 sm:w-8/12 space-y-4 lg:mb-24 max-w-none py-8 lg:p-3">
          <Image src={yorisoi} alt="寄り添い力" className="w-10/12 mx-auto" />
          <h1 className="text-4xl sr-only">寄り添い力</h1>
          <h2 className="m-auto w-full sm:w-11/12 text-base">
            株式会社クロノスは、「寄り添う」ことを大切に、中小企業のDX化をお手伝い。
          </h2>
          <h2 className="m-auto w-full sm:w-11/12 text-base">
            ITのプロフェッショナルが
            継続した業務効率化でビジネスを成功に導きます。
          </h2>
          <Menu />
        </div>
      </div>
      <Cta />
    </aside>
  );
};

export default LeftSide;
