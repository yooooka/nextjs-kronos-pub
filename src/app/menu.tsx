import { MdArrowForward } from "react-icons/md";

export default function Menu() {
  return (
    <menu className="mt-8 not-prose font-bold mx-auto hidden sm:block sm:w-10/12">
      <ul className="not-prose list-none space-y-6 text-lg">
        <li className="group flex items-center place-content-end hover:cursor-pointer">
          <MdArrowForward className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-2xl me-1" />
          <a href="#dx-explained">
            <span className="border-b-4 border-kronos-400 pb-1">DXとは？</span>
          </a>
        </li>
        <li className="group flex items-center place-content-end hover:cursor-pointer">
          <MdArrowForward className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-2xl me-1" />

          <a href="#steps">
            <span className="border-b-4 border-kronos-400 pb-1">
              DX導入の5つのステップ
            </span>
          </a>
        </li>
        <li className="group flex items-center place-content-end hover:cursor-pointer">
          <MdArrowForward className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-2xl me-1" />

          <a href="#recommendations">
            <span className="border-b-4 border-kronos-400 pb-1">
              5つのDXサービス
            </span>
          </a>
        </li>
        <li className="group flex items-center place-content-end hover:cursor-pointer">
          <MdArrowForward className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-2xl me-1" />

          <a href="#cases">
            <span className="border-b-4 border-kronos-400 pb-1">導入事例</span>
          </a>
        </li>
        <li className="group flex items-center place-content-end hover:cursor-pointer">
          <MdArrowForward className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-2xl me-1" />

          <a href="#faq">
            <span className="border-b-4 border-kronos-400 pb-1">
              よくある質問
            </span>
          </a>
        </li>
      </ul>
    </menu>
  );
}
