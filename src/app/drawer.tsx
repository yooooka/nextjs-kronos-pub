"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="z-30 inline-block rounded-full bg-neptune-600 p-4 text-white hover:bg-neptune-200 hover:text-neptune-600 focus:outline-none focus:ring ring-primary-light active:text-neptune-500 fixed bottom-5 right-5 peer-checked:rotate-0 shadow-md"
      >
        <FaBars className="text-2xl" />
      </button>
      <div
        className={`fixed top-0 right-0 z-10 max-w-screen-sm h-full transition-all duration-500 ease-in-out bg-kronos-50/60 backdrop-blur-md transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleDrawer}>Close</button>
        <menu className="m-8 not-prose font-bold mt-8">
          <ul className="not-prose list-none space-y-4 text-lg">
            <li className="group flex items-center place-content-end hover:cursor-pointer">
              <FaArrowRight className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />
              <a href="#dx-explained">
                <span className="border-b-4 border-kronos-200 pb-1">
                  DXとは？
                </span>
              </a>
            </li>
            <li className="group flex items-center place-content-end hover:cursor-pointer">
              <FaArrowRight className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

              <a href="#steps">
                <span className="border-b-4 border-kronos-200 pb-1">
                  DX導入の5つのステップ
                </span>
              </a>
            </li>
            <li className="group flex items-center place-content-end hover:cursor-pointer">
              <FaArrowRight className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

              <a href="#recommendations">
                <span className="border-b-4 border-kronos-200 pb-1">
                  5つのDXサービス
                </span>
              </a>
            </li>
            <li className="group flex items-center place-content-end hover:cursor-pointer">
              <FaArrowRight className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

              <a href="#cases">
                <span className="border-b-4 border-kronos-200 pb-1">
                  導入事例
                </span>
              </a>
            </li>
            <li className="group flex items-center place-content-end hover:cursor-pointer">
              <FaArrowRight className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

              <a href="#faq">
                <span className="border-b-4 border-kronos-200 pb-1">
                  よくある質問
                </span>
              </a>
            </li>
          </ul>
        </menu>
      </div>
    </div>
  );
};

export default Drawer;
