import Image from "next/image";
import helpDesk from "./assets/help-desk.svg";
import consultation from "./assets/consultation.svg";
import hearing from "./assets/hearing.svg";
import implement from "./assets/implement.svg";
import presentation from "./assets/presentation.svg";
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
    <div className="prose prose-stone m-auto max-w-screen-md bg-gradient-to-b from-kronos-50 to-kronos-50/0 p-12 font-outfit prose-h2:text-center prose-h2:text-2xl prose-h4:mt-0 prose-h4:text-xl prose-h4:font-bold prose-li:mt-0 sm:prose-h2:text-3xl">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        variants={titleVariants}
      >
        <Image
          alt="タイトル画像"
          src={title02}
          className="mx-auto mb-4 h-[60px] max-w-none object-contain"
        />
      </motion.div>
      <h2 className="sr-only">クロノスがお手伝いする</h2>
      <h2 className="m-auto w-fit pb-2">DX導入の5つのステップ</h2>
      <span className="block pb-4 text-center font-outfit text-lg font-bold text-kronos">
        5 STEPS TO START
      </span>
      <ol className="step-ol m-auto mt-8 max-w-xl pl-0 sm:space-y-12">
        <li className="sm:arrow relative grid grid-cols-1 items-start justify-center gap-2 sm:grid-cols-2">
          <Image
            src={hearing}
            alt="ヒアリングを表す画像"
            className="col-start-1 m-auto mb-4 sm:row-span-2 sm:mb-0"
          />
          <h3 className="-order-1 mb-0 flex items-end place-self-center self-end sm:-order-none sm:place-self-start sm:self-end">
            <Image
              src={step1}
              alt="STEP 1"
              className="max-width-none m-auto mb-2 flex-auto sm:mb-0"
            />
            <span className="pl-3">ヒアリング</span>
          </h3>
          <span className="block text-start">
            まずは、お客様の現状の課題やご要望をじっくりヒアリングします。
          </span>
        </li>
        <li className="sm:arrow relative grid grid-cols-1 items-start justify-center gap-2 sm:grid-cols-2">
          <Image
            src={presentation}
            alt="DXプランのご提案を表す画像"
            className="col-start-1 m-auto mb-4 sm:row-span-2 sm:mb-0"
          />
          <h3 className="-order-1 mb-0 flex items-end place-self-center self-end sm:-order-none sm:place-self-start sm:self-end">
            <Image
              src={step2}
              alt="STEP 2"
              className="max-width-none m-auto mb-2 flex-auto sm:mb-0"
            />
            <span className="pl-3">DXプランのご提案</span>
          </h3>
          <span className="block text-start">
            お客様の課題の解決に向けて、最適な製品・サービスをご提案します。
          </span>
        </li>
        <li className="sm:arrow relative grid grid-cols-1 items-start justify-center gap-2 sm:grid-cols-2">
          <Image
            src={consultation}
            alt="DXプランの検討を表す画像"
            className="col-start-1 m-auto mb-4 sm:row-span-2 sm:mb-0"
          />
          <h3 className="-order-1 mb-0 flex items-end place-self-center self-end sm:-order-none sm:place-self-start sm:self-end">
            <Image
              src={step3}
              alt="STEP 3"
              className="max-width-none m-auto mb-2 flex-auto sm:mb-0"
            />
            <span className="pl-3">DXプランの検討</span>
          </h3>
          <span className="block text-start">
            お客様と共に「効率化」「継続化」の観点で、製品・サービスを検討します。
          </span>
        </li>
        <li className="sm:arrow relative grid grid-cols-1 items-start justify-center gap-2 sm:grid-cols-2">
          <Image
            src={implement}
            alt="導入を表す画像"
            className="col-start-1 m-auto mb-4 sm:row-span-2 sm:mb-0"
          />
          <h3 className="-order-1 mb-0 flex items-end place-self-center self-end sm:-order-none sm:place-self-start sm:self-end">
            <Image
              src={step4}
              alt="STEP 1"
              className="max-width-none m-auto mb-2 flex-auto sm:mb-0"
            />
            <span className="pl-3">導入</span>
          </h3>
          <span className="block text-start">
            当社がお客様に「寄り添い」ながら、製品・サービスの導入をご支援します。
          </span>
        </li>
        <li className="grid grid-cols-1 items-start justify-center gap-2 sm:grid-cols-2">
          <Image
            src={helpDesk}
            alt="継続支援を表す画像"
            className="col-start-1 m-auto mb-4 sm:row-span-2 sm:mb-0"
          />
          <h3 className="-order-1 mb-0 flex items-end place-self-center self-end sm:-order-none sm:place-self-start sm:self-end">
            <Image
              src={step5}
              alt="STEP 1"
              className="max-width-none m-auto mb-2 flex-auto sm:mb-0"
            />
            <span className="pl-3">継続支援</span>
          </h3>
          <span className="block text-start">
            導入後も、お客様に安心して運用いただけるようアフターサポートを行います。
          </span>
        </li>
      </ol>
    </div>
  );
}
