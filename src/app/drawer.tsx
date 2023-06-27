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
      <span className="border-b-4 border-kronos-light pb-1 whitespace-nowrap  group-hover:border-kronos-dark transition-all delay-150 inline-block">
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
    { href: "#services", label: "5つのDXサービス", onClick: toggleDrawer },
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
        className="z-30 inline-block rounded-full bg-kronos-600 p-4 text-white hover:bg-kronos-200 hover:text-kronos-600 focus:outline-none active:text-kronos-500 fixed bottom-4 right-4 peer-checked:rotate-0 shadow-lg"
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>
      <div
        className={`fixed top-0 right-0 z-20 w-fill flex flex-col justify-end h-full transition-all duration-500 ease-in-out bg-kronos-50/40 backdrop-blur-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <menu className="mx-16 mb-24 not-prose font-bold">
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
      </div>
    </div>
  );
};

export default Drawer;
