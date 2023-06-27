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
    <div className="bg-gradient-to-b from-kronos-50 to-kronos-50/0 prose prose-stone prose-h2:text-center prose-h2:text-2xl sm:prose-h2:text-3xl prose-h4:mt-0 prose-h4:text-xl prose-h4:font-bold prose-li:mt-0 max-w-screen-md m-auto p-12">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        variants={titleVariants}
      >
        <Image
          alt="タイトル画像"
          src={title01}
          className="mx-auto mb-4 h-[60px] max-w-none object-contain"
        />
      </motion.div>
      <h2 className="sr-only">DXによる</h2>
      <h2 className="pb-2 m-auto w-fit">
        「効率化」
        <span className="text-kronos text-3xl lg:text-4xl align-middle font-normal">
          ×
        </span>
        「継続化」で効果を最大化
      </h2>
      <span className="text-center text-kronos font-semibold block text-lg pb-4 font-outfit">
        WHAT IS DX?
      </span>
      <div className="sm:prose-p:px-8">
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
