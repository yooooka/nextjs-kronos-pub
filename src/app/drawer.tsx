"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaArrowRight, FaTimes } from "react-icons/fa";

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current && !node.current.contains(e.target as Node)) {
      // outside click
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={node}>
      <button
        onClick={toggleDrawer}
        className="z-30 inline-block rounded-full bg-neptune-600 p-4 text-white hover:bg-neptune-200 hover:text-neptune-600 focus:outline-none active:text-neptune-500 fixed bottom-5 right-5 peer-checked:rotate-0 shadow-lg"
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>
      <div className="">
        <div
          className={`fixed top-0 right-0 z-10 max-w-screen-md h-full transition-all duration-500 ease-in-out bg-kronos-50/60 backdrop-blur-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <menu className="m-8 not-prose font-bold mt-8">
            <ul className="not-prose list-none space-y-4 text-lg">
              <li className="group flex items-center place-content-end hover:cursor-pointer">
                <FaArrowRight className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />
                <a href="#dx-explained" onClick={toggleDrawer}>
                  <span className="border-b-4 border-kronos-200 pb-1">
                    DXとは？
                  </span>
                </a>
              </li>
              <li className="group flex items-center place-content-end hover:cursor-pointer">
                <FaArrowRight className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

                <a href="#steps" onClick={toggleDrawer}>
                  <span className="border-b-4 border-kronos-200 pb-1">
                    DX導入の5つのステップ
                  </span>
                </a>
              </li>
              <li className="group flex items-center place-content-end hover:cursor-pointer">
                <FaArrowRight className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

                <a href="#recommendations" onClick={toggleDrawer}>
                  <span className="border-b-4 border-kronos-200 pb-1">
                    5つのDXサービス
                  </span>
                </a>
              </li>
              <li className="group flex items-center place-content-end hover:cursor-pointer">
                <FaArrowRight className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

                <a href="#cases" onClick={toggleDrawer}>
                  <span className="border-b-4 border-kronos-200 pb-1">
                    導入事例
                  </span>
                </a>
              </li>
              <li className="group flex items-center place-content-end hover:cursor-pointer">
                <FaArrowRight className="opacity-0 group-hover:opacity-100 material-symbols-rounded text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

                <a href="#faq" onClick={toggleDrawer}>
                  <span className="border-b-4 border-kronos-200 pb-1">
                    よくある質問
                  </span>
                </a>
              </li>
            </ul>
          </menu>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
