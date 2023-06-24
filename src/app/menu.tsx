import { MdArrowForward } from "react-icons/md";

export default function Menu() {
  return (
    <menu className="mt-8 not-prose font-bold mx-auto hidden lg:block lg:w-10/12">
      <ul className="not-prose list-none space-y-4 text-lg">
        <li className="group flex items-center place-content-end group hover:cursor-pointer">
          <a href="#dx-explained">
            <span className="border-b-4 border-kronos-400 pb-1 group-hover:border-kronos-800 transition-all delay-150 inline-block">
              DXとは？
            </span>
          </a>
        </li>
        <li className="group flex items-center place-content-end hover:cursor-pointer">
          <a href="#steps">
            <span className="border-b-4 border-kronos-400 pb-1 group-hover:border-kronos-800 transition-all delay-150 inline-block">
              DX導入の5つのステップ
            </span>
          </a>
        </li>
        <li className="group flex items-center place-content-end hover:cursor-pointer">
          <a href="#recommendations">
            <span className="border-b-4 border-kronos-400 pb-1 group-hover:border-kronos-800 transition-all delay-150 inline-block">
              5つのDXサービス
            </span>
          </a>
        </li>
        <li className="group flex items-center place-content-end hover:cursor-pointer">
          <a href="#cases">
            <span className="border-b-4 border-kronos-400 pb-1 group-hover:border-kronos-800 transition-all delay-150 inline-block">
              導入事例
            </span>
          </a>
        </li>
        <li className="group flex items-center place-content-end hover:cursor-pointer">
          <a href="#faq">
            <span className="border-b-4 border-kronos-400 pb-1 group-hover:border-kronos-800 transition-all delay-150 inline-block">
              よくある質問
            </span>
          </a>
        </li>
      </ul>
    </menu>
  );
}
