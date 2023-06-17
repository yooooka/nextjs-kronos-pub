import Image from "next/image";
import helpDesk from "./assets/help-desk.svg";
import consultation from "./assets/consultation.svg";
import filesLaptop from "./assets/files-laptop.svg";
import { motion, Variants } from "framer-motion";
import title02 from "./assets/title02.svg";
import step1 from "./assets/step1.svg";
import step2 from "./assets/step2.svg";
import step3 from "./assets/step3.svg";
import step4 from "./assets/step4.svg";
import step5 from "./assets/step5.svg";

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
    <div className="font-outfit bg-gradient-to-b from-kronos-50 to-kronos-50/0 prose prose-stone prose-h2:text-center prose-h2:text-2xl sm:prose-h2:text-3xl prose-h4:mt-0 prose-h4:text-xl prose-h4:font-semibold prose-li:mt-0 max-w-screen-md m-auto p-12">
      <motion.div
        initial="o≈ff≈screen"
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
      <span className="text-center text-kronos font-semibold block text-lg pb-4 font-outfit">
        5 STEPS TO START
      </span>
      <ol className="step-ol pl-0 mt-8 max-w-xl m-auto sm:space-y-12">
        <li className="relative sm:arrow grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start">
          <Image
            src={helpDesk}
            alt="ヒアリングイメージ"
            className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
          />
          <h3 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
            <Image
              src={step1}
              alt="STEP 1"
              className="mb-2 sm:mb-0 m-auto flex-auto"
            />
            <span className="pl-3">ヒアリング</span>
          </h3>
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
          <h3 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
            <Image
              src={step2}
              alt="STEP 2"
              className="mb-2 sm:mb-0 m-auto flex-auto"
            />
            <span className="pl-3">DXプランのご提案</span>
          </h3>
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
          <h3 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
            <Image
              src={step3}
              alt="STEP 3"
              className="mb-2 sm:mb-0 m-auto flex-auto"
            />
            <span className="pl-3">DXプランの検討</span>
          </h3>
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
          <h3 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
            <Image
              src={step4}
              alt="STEP 1"
              className="mb-2 sm:mb-0 m-auto flex-auto"
            />
            <span className="pl-3">導入</span>
          </h3>
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
          <h3 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
            <Image
              src={step5}
              alt="STEP 1"
              className="mb-2 sm:mb-0 m-auto flex-auto"
            />
            <span className="pl-3">継続支援</span>
          </h3>
          <span className="text-start block">
            導入後も、お客様に安心して運用いただけるようアフターサポートを行います。
          </span>
        </li>
      </ol>
    </div>
  );
}
