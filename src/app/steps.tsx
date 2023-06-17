import Image from "next/image";
import helpDesk from "./assets/help-desk.svg";
import consultation from "./assets/consultation.svg";
import filesLaptop from "./assets/files-laptop.svg";
import { motion, Variants } from "framer-motion";
import title02 from "./assets/title02.svg";

const titleVariants: Variants = {
  offscreen: {
    y: 70,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
export default function Steps() {
  return (
    <div className="p-12 font-outfit">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        variants={titleVariants}
      >
        <Image
          alt="クロノスがお手伝いする"
          src={title02}
          className="mx-auto mb-4 h-[60px] max-w-none object-contain"
        />
      </motion.div>
      <h2 className="sr-only">クロノスがお手伝いする</h2>
      <h2 className="pb-2 m-auto w-fit">DX導入の5つのステップ</h2>
      <ol className="step-ol pl-0 mt-8 max-w-xl m-auto sm:space-y-12">
        <li className="relative sm:arrow grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start">
          <Image
            src={helpDesk}
            alt="ヒアリングイメージ"
            className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
          />
          <h4 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
            <span className="slide">
              <span className="text-primary font-black">STEP</span>
              <span className="text-primary font-black text-3xl pl-1">1</span>
            </span>
            <span className="w-1/2 flex-1 pl-3">ヒアリング</span>
          </h4>
          <span className="text-start block">
            まずは、お客様の現状の課題やご要望をじっくりヒアリングします。
          </span>
        </li>
        <li className="relative sm:arrow grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start">
          <Image
            src={filesLaptop}
            alt="DXプランのご提案イメージ"
            className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
          />
          <h4 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
            <span className="slide">
              <span className="text-primary font-black">STEP</span>
              <span className="text-primary font-black text-3xl pl-1">2</span>
            </span>
            <span className="w-1/2 flex-1 pl-3">DXプランのご提案</span>
          </h4>
          <span className="text-start block">
            お客様の課題の解決に向けて、最適な製品・サービスをご提案します。
          </span>
        </li>
        <li className="relative sm:arrow grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start">
          <Image
            src={consultation}
            alt="DXプランの検討イメージ"
            className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
          />
          <h4 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
            <span className="slide">
              <span className="text-primary font-black">STEP</span>
              <span className="text-primary font-black text-3xl pl-1">3</span>
            </span>
            <span className="w-1/2 flex-1 pl-3">DXプランの検討</span>
          </h4>
          <span className="text-start block">
            お客様と共に「効率化」「継続化」の観点で、製品・サービスを検討します。
          </span>
        </li>
        <li className="relative sm:arrow grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start">
          <Image
            src={filesLaptop}
            alt="導入イメージ"
            className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
          />
          <h4 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
            <span className="slide">
              <span className="text-primary font-black">STEP</span>
              <span className="text-primary font-black text-3xl pl-1">4</span>
            </span>
            <span className="w-1/2 flex-1 pl-3">導入</span>
          </h4>
          <span className="text-start block">
            当社がお客様に「寄り添い」ながら、製品・サービスの導入をご支援します。
          </span>
        </li>
        <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start">
          <Image
            src={helpDesk}
            alt="継続支援イメージ"
            className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
          />
          <h4 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
            <span className="slide">
              <span className="text-primary font-black">STEP</span>
              <span className="text-primary font-black text-3xl pl-1">5</span>
            </span>
            <span className="w-1/2 flex-1 pl-3">継続支援</span>
          </h4>
          <span className="text-start block">
            導入後も、お客様に安心して運用いただけるようアフターサポートを行います。
          </span>
        </li>
      </ol>
    </div>
  );
}
