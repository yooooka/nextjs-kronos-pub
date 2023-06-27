import React, { FC } from "react";

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({ href, label }) => (
  <li className="group flex items-center place-content-end hover:cursor-pointer">
    <a href={href}>
      <span className="border-b-4 border-kronos-400 pb-1 group-hover:border-kronos-dark transition-all delay-150 inline-block">
        {label}
      </span>
    </a>
  </li>
);

const Menu: FC = () => {
  const menuItems: MenuItemProps[] = [
    { href: "#dx-explained", label: "DXとは？" },
    { href: "#steps", label: "DX導入の5つのステップ" },
    { href: "#recommendations", label: "5つのDXサービス" },
    { href: "#faq", label: "よくある質問" },
  ];

  return (
    <menu className="mt-8 not-prose font-bold mx-auto hidden lg:block lg:w-10/12">
      <ul className="not-prose list-none space-y-4 text-lg">
        {menuItems.map((item, index) => (
          <MenuItem key={index} href={item.href} label={item.label} />
        ))}
      </ul>
    </menu>
  );
};

export default Menu;
