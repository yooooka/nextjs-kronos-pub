"use client";

import { useState } from "react";

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="z-30 inline-block rounded-full bg-neptune-600 p-3 text-white hover:bg-neptune-200 hover:text-neptune-600 focus:outline-none focus:ring active:text-neptune-500 fixed bottom-5 right-5 peer-checked:rotate-0 shadow-md"
      >
        toggle
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 bg-primary h-screen w-64`}
      >
        <button onClick={toggleDrawer}>Close</button>
        <menu className="m-8 not-prose font-bold mt-8">
          <ul className="not-prose list-none space-y-4 text-lg">
            <li className="group flex items-center place-content-end hover:cursor-pointer">
              <span className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 !text-3xl">
                arrow_right_alt
              </span>
              <a href="#dx-explained">
                <span className="border-b-4 border-kronos-200 pb-1">
                  DXとは？
                </span>
              </a>
            </li>
            <li className="group flex items-center place-content-end hover:cursor-pointer">
              <span className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 !text-3xl">
                arrow_right_alt
              </span>
              <a href="#steps">
                <span className="border-b-4 border-kronos-200 pb-1">
                  DX導入の5つのステップ
                </span>
              </a>
            </li>
            <li className="group flex items-center place-content-end hover:cursor-pointer">
              <span className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 !text-3xl">
                arrow_right_alt
              </span>
              <a href="#recommendations">
                <span className="border-b-4 border-kronos-200 pb-1">
                  5つのDXサービス
                </span>
              </a>
            </li>
            <li className="group flex items-center place-content-end hover:cursor-pointer">
              <span className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 !text-3xl">
                arrow_right_alt
              </span>
              <a href="#cases">
                <span className="border-b-4 border-kronos-200 pb-1">
                  導入事例
                </span>
              </a>
            </li>
            <li className="group flex items-center place-content-end hover:cursor-pointer">
              <span className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 !text-3xl">
                arrow_right_alt
              </span>
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
