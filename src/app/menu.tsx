import React, { FC } from "react";

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({ href, label }) => (
  <li className="group flex place-content-end items-center hover:cursor-pointer">
    <a href={href}>
      <span className="inline-block border-b-4 border-kronos-400 pb-1 transition-all delay-150 group-hover:border-kronos-dark">
        {label}
      </span>
    </a>
  </li>
);

const Menu: FC = () => {
  const menuItems: MenuItemProps[] = [
    { href: "#dx-explained", label: "DXとは？" },
    { href: "#steps", label: "DX導入の5つのステップ" },
    { href: "#services", label: "5つのDXサービス" },
    { href: "#faq", label: "よくある質問" },
  ];

  return (
    <menu className="not-prose mx-auto mt-8 hidden font-bold lg:block lg:w-10/12">
      <ul className="not-prose list-none space-y-4 text-lg">
        {menuItems.map((item, index) => (
          <MenuItem key={index} href={item.href} label={item.label} />
        ))}
      </ul>
    </menu>
  );
};

export default Menu;
