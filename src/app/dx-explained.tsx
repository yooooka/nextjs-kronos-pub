import Image from "next/image";
import title01 from "./assets/title01.svg";
import { motion, Variants } from "framer-motion";

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

export default function DxExplained() {
  return (
    <div className="prose prose-stone m-auto max-w-screen-md bg-gradient-to-b from-kronos-50 to-kronos-50/0 p-8 prose-h2:text-center prose-h2:text-2xl prose-h4:mt-0 prose-h4:text-xl prose-h4:font-bold prose-li:mt-0 sm:p-12 sm:prose-h2:text-3xl">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        variants={titleVariants}
      >
        <Image
          alt="タイトル画像"
          src={title01}
          className="mx-auto mb-4 h-[60px] w-auto max-w-none object-contain"
        />
      </motion.div>
      <h2 className="sr-only">DXによる</h2>
      <h2 className="m-auto w-fit pb-2">
        「効率化」
        <span className="align-middle text-3xl font-normal text-kronos lg:text-4xl">
          ×
        </span>
        「継続化」で
        <br />
        効果を最大化
      </h2>
      <span className="block pb-4 text-center font-outfit text-lg font-semibold text-kronos">
        WHAT IS DX?
      </span>
      <div className="prose-p:mt-4 sm:prose-p:px-8">
        <p>
          DXとは、ITを活用して業務の効率化を図ること。今までより少ない人数で、同じことができたり。同じ人数で、より大きな成果を手にすることができたり。
        </p>
        <p>
          しかし、中小企業のDXは導入だけではなく「本当に業務効率化につながるか」「そのDXが継続可能か」といった観点での検討が
          とても重要です。
        </p>
        <p>
          クロノスでは、難しいIT用語を極力使用せず、お客様にしっかり「寄り添う」ことで、業務の課題解決に向けた最適なDX化の推進をお手伝い。
        </p>
        <p>お客様と二人三脚で「効果の最大化」を目指します。</p>
      </div>
    </div>
  );
}
