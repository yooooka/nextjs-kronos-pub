import React from "react";
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
      className="relative w-full transition-all duration-500 lg:sticky lg:left-0 lg:top-0 lg:z-10 lg:h-full lg:w-[50%] lg:flex-1 lg:shadow-2xl lg:shadow-kronos-700/30 lg:transition-all lg:duration-500"
    >
      <Drawer />
      <nav className="items-center justify-between p-3 sm:flex">
        <div className="absolute left-6 top-3 h-[36px] w-[120px] bg-no-repeat">
          <a href="#" id="logo-top">
            <span className="sr-only">Kronos</span>
            <Image src={kronos} alt="クロノス　ロゴ" />
          </a>
        </div>
      </nav>
      <div className="mx-auto flex flex-col items-center justify-center lg:min-h-full">
        <div className="prose prose-stone mx-auto w-9/12 max-w-none space-y-4 py-8 prose-h2:font-normal prose-h2:text-stone-700 sm:w-8/12 lg:mb-24 lg:p-3">
          <Image src={yorisoi} alt="寄り添い力" className="mx-auto w-10/12" />
          <h1 className="sr-only text-4xl">寄り添い力</h1>
          <h2 className="m-auto w-full text-base sm:w-11/12">
            株式会社クロノスは、「寄り添う」ことを大切に、中小企業のDX化をお手伝い。
          </h2>
          <h2 className="m-auto w-full text-base sm:w-11/12">
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
