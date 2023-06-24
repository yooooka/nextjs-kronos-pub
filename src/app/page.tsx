"use client";

import Image from "next/image";
import hero from "./assets/hero.svg";
import title01 from "./assets/title01.svg";
import kronos from "./assets/kronos.svg";
import yorisoi from "./assets/yorisoi.svg";
import bgWhite from "./assets/xd-pattern-white.png";
import Opening from "./opening";
import Faq from "./faq";
import Drawer from "./drawer";
import Steps from "./steps";
import Services from "./services";
import Contact from "./contact";
import Menu from "./menu";
import { MdArrowForward } from "react-icons/md";
import { motion, Variants, MotionConfig } from "framer-motion";

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

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        id="anchor"
        className="text-stone-900 snap-y snap-mandatory h-screen overflow-y-scroll font-mplus"
      >
        <header>
          <h1 className="sr-only">話題のDX導入って、 何から始めればいいの？</h1>
          <Opening />
        </header>
        <div
          id="split-top"
          className="h-screen lg:flex lg:flex-row relative overflow-auto snap-start sm:snap-always"
          style={{
            backgroundImage: `url(${bgWhite.src})`,
            backgroundPosition: "center",
          }}
        >
          <aside
            id="page-top"
            className="lg:shadow-2xl lg:shadow-kronos-700/30 lg:transition-all lg:duration-500 transition-all duration-500 lg:flex-1 lg:w-[50%] w-full lg:sticky lg:top-0 lg:left-0 lg:h-full lg:z-10 relative"
          >
            <Drawer />
            <nav className="p-3 sm:flex justify-between items-center">
              <div className="bg-no-repeat w-[120px] h-[36px] absolute top-3 left-6">
                <a href="kronos-logo" id="logo-top">
                  <span className="sr-only">Kronos</span>
                  <Image src={kronos} alt="クロノス　ロゴ" fill />
                </a>
              </div>
            </nav>
            <div className="mx-auto flex justify-center items-center flex-col lg:min-h-full">
              <div className="mx-auto prose prose-stone prose-h2:text-stone-700 prose-h2:font-normal w-8/12 space-y-4 lg:mb-24 max-w-none py-8 lg:p-3">
                <Image
                  src={yorisoi}
                  alt="寄り添い力"
                  className="w-7/12 mx-auto"
                />
                <h1 className="text-4xl sr-only">寄り添い力</h1>
                <h2 className="m-auto w-72 sm:w-11/12 text-base">
                  株式会社クロノスは、「寄り添う」ことを大切に、中小企業のDX化をお手伝い。
                </h2>
                <h2 className="m-auto w-72 sm:w-11/12 text-base">
                  ITのプロフェッショナルが
                  継続した業務効率化でビジネスを成功に導きます。
                </h2>
                <Menu />
              </div>
            </div>
            <section className="bg-kronos-50/90 bottom-0 absolute lg:flex hidden items-center p-4 z-10 justify-evenly mx-auto">
              <div className="text-sm py-2 space-y-1 basis-2/3 mx-auto text-center">
                <span className="inline-block max-w-max border-2 font-bold border-kronos-light rounded-lg bg-white px-2.5 py-0.5 me-1">
                  もっと詳しく知りたい
                </span>
                <span className="inline-block max-w-max border-2 font-bold border-kronos-light rounded-lg bg-white  px-2.5 py-0.5 ">
                  導入を検討したい
                </span>
                <span className="inline-block max-w-max border-2 font-bold border-kronos-light rounded-lg bg-white  px-2.5 py-0.5 me-1">
                  DXって何？という方
                </span>
                <span> も、まずはご相談を！</span>
              </div>
              <a href="#contact" className="basis-1/3">
                <button className="prose group relative w-max inline-flex items-center rounded-full bg-primary-dark px-8 py-2 text-white focus:outline-none focus:ring hover:bg-kronos lg:text-center">
                  <MdArrowForward
                    fill="currentColor"
                    className="absolute end-full opacity-0 transition-all group-hover:end-5 group-hover:opacity-100 text-2xl"
                  />
                  <span className="font-bold transition-all group-hover:me-3">
                    お問い合わせ
                  </span>
                </button>
              </a>
            </section>
          </aside>

          <main className="lg:flex-[0_0_50%] lg:w-[50%]">
            <div className="flex flex-col items-end justify-end lg:h-full">
              <Image
                alt="hero image"
                src={hero}
                className="lg:w-full lg:h-[100vh] h-[58vh] m-auto lg:pt-8 flex-auto"
              />
            </div>
            <div>
              <section
                id="dx-explained"
                className="bg-gradient-to-b from-kronos-50 to-kronos-50/0 text-stone-900 relative"
              >
                <div className="bg-gradient-to-b from-kronos-50 to-kronos-50/0 prose prose-stone prose-h2:text-center prose-h2:text-2xl sm:prose-h2:text-3xl prose-h4:mt-0 prose-h4:text-xl prose-h4:font-bold prose-li:mt-0 max-w-screen-md m-auto p-12">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    variants={titleVariants}
                  >
                    <Image
                      alt="DXによる"
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
              </section>
              <section
                id="steps"
                className="bg-gradient-to-b from-kronos-50 to-kronos-50/0 text-stone-900 relative"
              >
                <Steps />
              </section>
            </div>
            <section
              id="recommendations"
              className="bg-gradient-to-b from-kronos-50 to-kronos-50/0"
            >
              <Services />
            </section>

            <section
              id="cases"
              className="bg-gradient-to-b from-kronos-50 to-kronos-50/0 text-stone-900 relative"
            >
              <div className="mx-auto prose prose-stone p-12 sm:py-16 max-w-screen-md prose-h2:text-center prose-h2:text-2xl isolate">
                <h2 className="mb-2">導入事例</h2>
                <span className="text-center text-kronos font-semibold block text-lg pb-4 font-outfit">
                  CASE STUDY
                </span>
                <h3>相談内容</h3>
                <p>
                  相談内容テキスト相談内容テキスト相談内容テキスト相談内容テキスト
                </p>
                <h3>導入サービス</h3>
                <p>セキュアSAMBA</p>
                <h3>ご提案内容</h3>
                <p>
                  提案内容テキスト提案内容テキスト提案内容テキスト提案内容テキスト提案内容テキスト
                </p>
                <h3>導入効果</h3>
                <p>
                  導入効果テキスト導入効果テキスト導入効果テキスト導入効果テキスト
                </p>
              </div>
            </section>
            <section
              id="faq"
              className="bg-gradient-to-b from-kronos-50 to-kronos-50/0"
            >
              <div className="mx-auto max-w-screen-md prose prose-stone lg:p-12 p-6 prose-h2:text-center prose-h2:text-2xl">
                <h2 className="mb-2">よくある質問</h2>
                <span className="text-center text-kronos font-semibold block text-lg pb-4 font-outfit">
                  FAQ
                </span>
                <Faq />
              </div>
            </section>
            <section
              id="contact"
              className="bg-gradient-to-b from-kronos-50 to-kronos-50/0"
            >
              <Contact />
            </section>
            <footer className="px-8 pb-8 w-full">
              <div className="prose prose-stone mx-auto text-center text-sm">
                © 2023 株式会社クロノス
              </div>
            </footer>
          </main>
        </div>
      </div>
    </MotionConfig>
  );
}
