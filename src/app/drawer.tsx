"use client";

import React, { FC, useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
interface DrawerItemProps {
  href: string;
  label: string;
  onClick: () => void;
}

const DrawerItem: FC<DrawerItemProps> = ({
  href,
  label,
  onClick = () => {},
}) => (
  <li className="group flex items-center place-content-end hover:cursor-pointer">
    <a href={href} onClick={onClick}>
      <span className="border-b-4 border-kronos-light pb-1 whitespace-nowrap">
        {label}
      </span>
    </a>
  </li>
);

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const drawerItems: DrawerItemProps[] = [
    { href: "#dx-explained", label: "DXとは？", onClick: toggleDrawer },
    { href: "#steps", label: "DX導入の5つのステップ", onClick: toggleDrawer },
    {
      href: "#recommendations",
      label: "5つのDXサービス",
      onClick: toggleDrawer,
    },
    { href: "#faq", label: "よくある質問", onClick: toggleDrawer },
    { href: "#page-top", label: "↑ ページトップへ", onClick: toggleDrawer },
  ];

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
    <div ref={node} className="lg:hidden">
      <button
        onClick={toggleDrawer}
        className="z-20 inline-block rounded-full bg-kronos-600 p-4 text-white hover:bg-kronos-200 hover:text-kronos-600 focus:outline-none active:text-kronos-500 fixed bottom-4 right-4 peer-checked:rotate-0 shadow-lg"
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>
      <div>
        <div
          className={`fixed top-0 right-0 z-10 w-fill flex flex-col justify-end h-full transition-all duration-500 ease-in-out bg-kronos-50/40 backdrop-blur-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <menu className="mx-16 my-8 not-prose font-bold">
            <ul className="not-prose list-none space-y-8 text-lg">
              {drawerItems.map((item, index) => (
                <DrawerItem
                  key={index}
                  href={item.href}
                  label={item.label}
                  onClick={toggleDrawer}
                />
              ))}
            </ul>
          </menu>
          <section className="bg-kronos-50/90 flex flex-col items-center place-content-center p-4 py-6 flex-wrap z-20">
            <div className="text-sm space-y-1 px-8 pb-3 text-stone-700">
              <span className="inline-block max-w-max border-2 font-bold border-kronos-light rounded-full bg-white px-3 py-1 me-1">
                もっと詳しく知りたい
              </span>
              <span className="inline-block max-w-max border-2 font-bold border-kronos-light rounded-full bg-white  px-3 py-1 ">
                導入を検討したい
              </span>
              <br />
              <span className="inline-block max-w-max border-2 font-bold border-kronos-light rounded-full bg-white  px-3 py-1 me-1">
                DXって何？という方
              </span>
              <span> も、まずはご相談を！</span>
            </div>
            <a href="#contact" onClick={toggleDrawer}>
              <button
                dir="rtl"
                className="prose group relative inline-flex items-center rounded-full bg-primary-dark px-8 py-2 text-white focus:outline-none focus:ring hover:bg-kronos lg:text-center w-fit"
              >
                <MdArrowForward
                  fill="currentColor"
                  className="absolute end-full opacity-0 transition-all group-hover:end-5 rotate-180 group-hover:opacity-100 text-2xl"
                />
                <span className="font-bold transition-all group-hover:me-3">
                  お問い合わせ
                </span>
              </button>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
