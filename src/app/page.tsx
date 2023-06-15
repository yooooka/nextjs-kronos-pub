"use client";

import Image from "next/image";
import hero from "./assets/hero.svg";
import aosbox from "./assets/aosbox.svg";
import gmoLogin from "./assets/gmo-logo.svg";
import gmoSign from "./assets/gmosign.svg";
import samba from "./assets/mv-logo.svg";
import title00 from "./assets/title00.svg";
import title01 from "./assets/title01.svg";
import title02 from "./assets/title02.svg";
import kronos from "./assets/kronos.svg";
import helpDesk from "./assets/help-desk.svg";
import consultation from "./assets/consultation.svg";
import filesLaptop from "./assets/files-laptop.svg";
import KShape from "./kshape";
import Drawer from "./drawer";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
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
      style: "tween",
      duration: 0.4,
    },
  },
};

export default function Home() {
  return (
    <>
      <div
        id="anchor"
        className="text-stone-900 snap-y snap-mandatory h-screen overflow-y-scroll"
      >
        <header className="snap-start snap-always">
          <section className="prose prose-stone prose-headings:text-stone-700 flex flex-col h-screen justify-center items-center text-center w-full max-w-none p-12 prose-h1:text-2xl lg:prose-h1:text-4xl lg:typewriter">
            <a href="#split-top" className="group no-underline">
              <h1 className="px-6">
                話題のDX導入って、 何から始めればいいの？
              </h1>
              <FaArrowDown className="font-light animate-bounce text-3xl text-kronos-300 group-hover:text-primary-light animation-delay-[2.5s] mx-auto" />
              <div className="text-stone-500">Scroll</div>
            </a>
          </section>
        </header>

        <div
          id="split-top"
          className="h-screen lg:flex lg:flex-row relative overflow-auto snap-start snap-always"
        >
          <aside className="lg:transition-all lg:duration-500 transition-all duration-500 lg:flex-1 lg:w-[50%] w-full lg:sticky lg:top-0 lg:left-0 lg:h-full bg-kronos-50 lg:z-10 relative">
            <Drawer />
            <div className="mx-auto flex justify-center items-center flex-col lg:min-h-full">
              <nav className="p-3 sm:flex justify-between items-center h-12 lg:h-14">
                <div className="bg-no-repeat w-[120px] h-[36px] absolute top-3 left-6">
                  <span className="sr-only">Kronos</span>
                  <Image src={kronos} alt="クロノス　ロゴ" fill />
                </div>
              </nav>
              <div className="mx-auto prose prose-stone p-12 prose-headings:text-stone-700 prose-h2:leading-7 max-w-xl">
                <h1 className="text-4xl text-center">寄り添い力</h1>
                <h2 className="m-auto w-72 sm:w-5/6 text-base font-medium lg:transition-all">
                  株式会社クロノスは、「寄り添う」ことを大切に、中小企業のDX化をお手伝い。
                </h2>
                <h2 className="m-auto w-72 sm:w-5/6 text-base font-medium lg:transition-all">
                  ITのプロフェッショナルが
                  継続した業務効率化でビジネスを成功に導きます。
                </h2>
                <menu className="m-8 mt-0 not-prose font-bold mx-auto max-w-sm hidden sm:block">
                  <ul className="not-prose list-none space-y-4 text-lg">
                    <li className="group flex items-center place-content-end hover:cursor-pointer">
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />
                      <a href="#dx-explained">
                        <span className="border-b-4 border-kronos-200 pb-1">
                          DXとは？
                        </span>
                      </a>
                    </li>
                    <li className="group flex items-center place-content-end hover:cursor-pointer">
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

                      <a href="#steps">
                        <span className="border-b-4 border-kronos-200 pb-1">
                          DX導入の5つのステップ
                        </span>
                      </a>
                    </li>
                    <li className="group flex items-center place-content-end hover:cursor-pointer">
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

                      <a href="#recommendations">
                        <span className="border-b-4 border-kronos-200 pb-1">
                          5つのDXサービス
                        </span>
                      </a>
                    </li>
                    <li className="group flex items-center place-content-end hover:cursor-pointer">
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

                      <a href="#cases">
                        <span className="border-b-4 border-kronos-200 pb-1">
                          導入事例
                        </span>
                      </a>
                    </li>
                    <li className="group flex items-center place-content-end hover:cursor-pointer">
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-xl mr-3" />

                      <a href="#faq">
                        <span className="border-b-4 border-kronos-200 pb-1">
                          よくある質問
                        </span>
                      </a>
                    </li>
                  </ul>
                </menu>
              </div>
            </div>
            <section className="bg-kronos-50/90 fixed bottom-0 lg:absolute w-full z-10 hidden sm:flex items-center place-content-center p-4 flex-wrap">
              <div className="text-sm p-2">
                <span>もっと詳しく知りたい／導入を検討したい</span>
                <p>DXって何？という方も、まずはご相談を！</p>
              </div>
              <a href="#contact">
                <button className="prose group relative inline-flex items-center rounded-lg bg-primary px-8 py-3 text-white focus:outline-none focus:ring hover:bg-primary-dark lg:text-center w-fit">
                  <span className="absolute -end-full opacity-0 transition-all group-hover:end-4 group-hover:opacity-100">
                    <svg
                      className="h-5 w-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold transition-all group-hover:me-4">
                    お問合せはこちら
                  </span>
                </button>
              </a>
            </section>
          </aside>

          <main className="lg:flex-[0_0_50%] lg:w-[50%]">
            <div className="bg-kronos-50">
              <Image
                alt="hero image"
                src={hero}
                className="lg:w-full lg:h-[100vh] h-[58vh] m-auto pt-4"
              />
            </div>
            <div className="mx-auto prose prose-stone prose-headings:text-stone-700 prose-h2:text-center prose-h2:text-2xl sm:prose-h2:text-3xl prose-h4:mt-0 prose-h4:text-xl prose-h4:font-semibold prose-li:mt-0 max-w-screen-md">
              <section id="dx-explained">
                <div className="p-12">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    variants={titleVariants}
                  >
                    <Image
                      alt="work on later"
                      src={title00}
                      className="mx-auto mb-2 h-[60px] max-w-none object-contain"
                    />
                  </motion.div>
                  <h2 className="sr-only">DXによる！</h2>
                  <h2 className="border-b-4 border-kronos-300 pb-2 m-auto w-fit">
                    効率化
                    <span className="text-kronos text-3xl lg:text-4xl align-middle font-normal">
                      ×
                    </span>
                    継続化で効果を最大化
                  </h2>
                  <div className="pt-12">
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
              <section id="steps">
                <div className="p-12">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    variants={titleVariants}
                  >
                    <Image
                      alt="work on later"
                      src={title01}
                      className="mx-auto mb-2 h-[60px] max-w-none object-contain"
                    />
                  </motion.div>

                  <h2 className="sr-only">クロノスがお手伝いする</h2>
                  <h2 className="border-b-4 border-kronos-300 pb-2 m-auto w-fit">
                    DX導入の5つのステップ
                  </h2>
                  <ol className="step-ol pl-0 mt-8 max-w-xl m-auto sm:space-y-12">
                    <li className="sm:arrow grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start relative">
                      <Image
                        src={helpDesk}
                        alt="ヒアリングイメージ"
                        className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
                      />
                      <h4 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
                        <span className="slide">
                          <span className="text-primary font-black">STEP</span>
                          <span className="text-primary font-black text-3xl pl-1">
                            1
                          </span>
                        </span>
                        <span className="w-1/2 flex-1 pl-3">ヒアリング</span>
                      </h4>
                      <span className="text-start block">
                        まずは、お客様の現状の課題やご要望をじっくりヒアリングします。
                      </span>
                    </li>
                    <li className="sm:arrow grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start relative">
                      <Image
                        src={filesLaptop}
                        alt="DXプランのご提案イメージ"
                        className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
                      />
                      <h4 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
                        <span className="slide">
                          <span className="text-primary font-black">STEP</span>
                          <span className="text-primary font-black text-3xl pl-1">
                            2
                          </span>
                        </span>
                        <span className="w-1/2 flex-1 pl-3">
                          DXプランのご提案
                        </span>
                      </h4>
                      <span className="text-start block">
                        お客様の課題の解決に向けて、最適な製品・サービスをご提案します。
                      </span>
                    </li>
                    <li className="sm:arrow grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start relative">
                      <Image
                        src={consultation}
                        alt="DXプランの検討イメージ"
                        className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
                      />
                      <h4 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
                        <span className="slide">
                          <span className="text-primary font-black">STEP</span>
                          <span className="text-primary font-black text-3xl pl-1">
                            3
                          </span>
                        </span>
                        <span className="w-1/2 flex-1 pl-3">
                          DXプランの検討
                        </span>
                      </h4>
                      <span className="text-start block">
                        お客様と共に「効率化」「継続化」の観点で、製品・サービスを検討します。
                      </span>
                    </li>
                    <li className="sm:arrow grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start relative">
                      <Image
                        src={filesLaptop}
                        alt="導入イメージ"
                        className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
                      />
                      <h4 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
                        <span className="slide">
                          <span className="text-primary font-black">STEP</span>
                          <span className="text-primary font-black text-3xl pl-1">
                            4
                          </span>
                        </span>
                        <span className="w-1/2 flex-1 pl-3">導入</span>
                      </h4>
                      <span className="text-start block">
                        当社がお客様に「寄り添い」ながら、製品・サービスの導入をご支援します。
                      </span>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-start relative">
                      <Image
                        src={helpDesk}
                        alt="継続支援イメージ"
                        className="col-start-1 sm:row-span-2 mb-4 sm:mb-0 m-auto"
                      />
                      <h4 className="-order-1 sm:-order-none flex items-end place-self-center sm:place-self-start self-end sm:self-end mb-0">
                        <span className="slide">
                          <span className="text-primary font-black">STEP</span>
                          <span className="text-primary font-black text-3xl pl-1">
                            5
                          </span>
                        </span>
                        <span className="w-1/2 flex-1 pl-3">継続支援</span>
                      </h4>
                      <span className="text-start block">
                        導入後も、お客様に安心して運用いただけるようアフターサポートを行います。
                      </span>
                    </li>
                  </ol>
                </div>
              </section>
            </div>
            <section id="recommendations">
              <div className="prose prose-stone mx-auto max-w-screen-lg p-8 sm:px-6 lg:px-8">
                <div className="mx-auto prose-headings:text-stone-700 prose-h2:text-center prose-h2:text-2xl sm:prose-h2:text-3xl">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    variants={titleVariants}
                  >
                    <Image
                      alt="work on later"
                      src={title02}
                      className="mx-auto mb-2 h-[60px] max-w-none object-contain"
                    />
                  </motion.div>

                  <h2 className="sr-only">クロノスがおすすめする!</h2>
                  <h2 className="border-b-4 border-kronos-300 pb-2 m-auto w-fit">
                    5つのDXサービス
                  </h2>
                </div>
                <div className="prose-p:text-[0.85rem] prose-h3:mt-0 prose-h3:text-base mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 auto-cols-min prose-headings:text-stone-700">
                  <div className="block rounded-lg bg-kronos-50 p-8 transition hover:bg-white/80">
                    <h3 className="text-center">
                      導入～運用まで伴走し続けます
                    </h3>
                    <h3 className="my-4 text-xl font-bold text-center">
                      ヘルプデスクサービス
                    </h3>
                    <p className="mt-1">
                      社内の情報システム担当の負担軽減や、障害対応・問題解決にかかるスピード向上を実現する、ヘルプデスクのアウトソーシングサービスです。ヘルプデスクの豊富な経験とノウハウのある当社にお任せください。
                    </p>
                  </div>
                  <div className="block rounded-lg bg-kronos-50 p-8 transition hover:bg-white/80">
                    <h3 className="text-center pb-4">
                      増え続けるID・パスワードを１つに！
                    </h3>
                    <h3 className="sr-only">トラスト・ログイン</h3>
                    <Image
                      src={gmoLogin}
                      className="max-w-[200px] m-auto pb-4"
                      alt="GMO トラストログイン"
                    />
                    <p className="mt-1">
                      社内システムや業務アプリケーションなど、複数のIDを一元管理するクラウド型のID管理です。「ID・パスワード管理」「シングルサインオン」「認証強化」「ID連携」を備え、セキュアな業務環境を実現します。
                    </p>
                  </div>
                  <div className="block rounded-lg bg-kronos-50 p-8 transition hover:bg-white/80">
                    <h3 className="text-center pb-4">
                      契約業務を安心安全に効率化
                    </h3>
                    <h3 className="sr-only">GMO サイン</h3>
                    <Image
                      src={gmoSign}
                      className="max-w-[200px] m-auto pb-4"
                      alt="GMO サイン"
                    />
                    <p className="mt-1">
                      紙による書面の取り交わしを電子化し、契約業務のスピード化、ペーパーレス化、印紙税などのコスト削減を実現する、電子契約サービスです。業界トップクラスの高いセキュリティ技術により、安心安全に、効率的な契約業務を行えます。
                    </p>
                  </div>
                  <div className="block rounded-lg bg-kronos-50 p-8 transition hover:bg-white/80">
                    <h3 className="text-center pb-4">
                      ファイル共有のわずらわしさを解消
                    </h3>
                    <h3 className="sr-only">セキュアSAMBA</h3>
                    <Image
                      src={samba}
                      className="max-w-[180px] m-auto pb-4"
                      alt="セキュアSAMBA"
                    />
                    <p className="mt-1">
                      簡単な操作でファイルの共有や編集ができるオンラインストレージです。データの暗号化、アクセス制限、二段階認証など、法人に必要なセキュリティ機能が標準搭載。安全性・信頼性の高いデータバックアップ機能で、万が一の場合も安心です。
                    </p>
                  </div>
                  <div className="block rounded-lg bg-kronos-50 p-8 transition hover:bg-white/80">
                    <h3 className="text-center pb-4">
                      バックアップにかける時間を「0」に
                    </h3>
                    <h3 className="sr-only">AOS BOX</h3>
                    <Image
                      src={aosbox}
                      className="max-w-[180px] m-auto pb-4"
                      alt="AOS BOX"
                    />
                    <p className="mt-1">
                      「堅牢性」「利便性」「経済的」を実現し、操作性と高セキュリティを兼ね備えたクラウドバックアップサービスです。データの漏洩・紛失、災害などの予期せぬ事態から、企業の大切なデータを守ります。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="cases" className="bg-kronos-100 text-stone-900">
              <div className="mx-auto prose prose-stone p-12 sm:py-16 max-w-screen-md prose-headings:text-stone-700 prose-h2:text-center prose-h2:text-2xl">
                <h2 className="mb-2">導入事例</h2>
                <span className="text-center text-primary font-semibold block text-lg pb-4">
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
            <section id="faq">
              <div className="mx-auto max-w-screen-md prose prose-stone p-12 prose-headings:text-stone-700 prose-h2:text-center prose-h2:text-2xl">
                <h2 className="mb-2">よくある質問</h2>
                <span className="text-center text-primary font-semibold block text-lg pb-4">
                  FAQ
                </span>
                <div className="not-prose bg-white overflow-hidden mx-auto mb-12">
                  <details className="group">
                    <summary className="flex items-center px-5 py-3 border-b-4 border-kronos-200 cursor-pointer group-open:pb-4 transition-all ease-out duration-300">
                      <span className="inline-block hover:first-letter:text-kronos-300 font-bold first-letter:text-2xl first-letter:font-black first-letter:pr-1 first-letter:text-primary">
                        Q. DXやクラウドの知識がなくても相談できますか︖
                      </span>
                      <div className="ml-auto">
                        <FaChevronRight className="opacity-40 transition-all group-open:rotate-90 align-middle -mr-1 text-xl pt-1" />
                      </div>
                    </summary>
                    <div className="transition-all p-6 bg-kronos-50">
                      <span className="inline-block first-letter:text-kronos first-letter:font-black first-letter:text-2xl first-letter:pr-1">
                        A.
                        私たちは、DXやクラウド活用をデジタル技術を駆使した課題解決と捉えておりますので、お客様のビジネスにおける課題をお伺いすることで、適切な提案を行うことが可能です。提案内容についても、ご理解いただけるまで丁寧に説明いたしますので、どんな課題があるのかお教えください。
                      </span>
                    </div>
                  </details>
                  <details className="group">
                    <summary className="flex items-center px-5 py-3 border-b-4 border-kronos-200 cursor-pointer group-open:pb-4 transition-all ease-out duration-300">
                      <span className="inline-block hover:first-letter:text-kronos-300 font-bold first-letter:text-2xl first-letter:font-black first-letter:pr-1 first-letter:text-primary">
                        Q. パンフレットやカタログなどはありますか？
                      </span>
                      <div className="ml-auto">
                        <FaChevronRight className="opacity-40 transition-all group-open:rotate-90 align-middle -mr-1 text-xl pt-1" />
                      </div>
                    </summary>
                    <div className="transition-all p-6 bg-kronos-50">
                      <span className="inline-block first-letter:text-kronos first-letter:font-black first-letter:text-2xl first-letter:pr-1">
                        A.
                        ございます。それぞれのサービスの特長や導入についてなど記載しております。もし必要であれば、お問い合わせ時にお伝えください。
                      </span>
                    </div>
                  </details>
                  <details className="group">
                    <summary className="flex items-center px-5 py-3 border-b-4 border-kronos-200 cursor-pointer group-open:pb-4 transition-all ease-out duration-300">
                      <span className="inline-block hover:first-letter:text-kronos-300 font-bold first-letter:text-2xl first-letter:font-black first-letter:pr-1 first-letter:text-primary">
                        Q. 契約前にサービスを試すことはできますか？
                      </span>
                      <div className="ml-auto">
                        <FaChevronRight className="opacity-40 transition-all group-open:rotate-90 align-middle -mr-1 text-xl pt-1" />
                      </div>
                    </summary>
                    <div className="transition-all p-6 bg-kronos-50">
                      <span className="inline-block first-letter:text-kronos first-letter:font-black first-letter:text-2xl first-letter:pr-1">
                        A.
                        ユーザーと管理者の両方の視点から操作感や機能を評価したいお客様には、1ヶ月の無料トライアルをご提供しています。ご予定の導入形態に基づいたトライアルをお試しください。
                      </span>
                    </div>
                  </details>
                  <details className="group">
                    <summary className="flex items-center px-5 py-3 border-b-4 border-kronos-200 cursor-pointer group-open:pb-4 transition-all ease-out duration-300">
                      <span className="inline-block hover:first-letter:text-kronos-300 font-bold first-letter:text-2xl first-letter:font-black first-letter:pr-1 first-letter:text-primary">
                        Q. 遠方でも相談や打ち合わせは可能ですか？
                      </span>
                      <div className="ml-auto">
                        <FaChevronRight className="opacity-40 transition-all group-open:rotate-90 align-middle -mr-1 text-xl pt-1" />
                      </div>
                    </summary>
                    <div className="transition-all p-6 bg-kronos-50">
                      <span className="inline-block first-letter:text-kronos first-letter:font-black first-letter:text-2xl first-letter:pr-1">
                        A.
                        Webミーティングを通じて、スムーズな相談や打ち合わせが可能です。遠方にお住まいの場合でも、現地作業が必要な場合には、お伺いいたしますので安心してご依頼いただけます。
                      </span>
                    </div>
                  </details>
                  <details className="group">
                    <summary className="flex items-center px-5 py-3 border-b-4 border-kronos-200 cursor-pointer group-open:pb-4 transition-all ease-out duration-300">
                      <span className="inline-block hover:first-letter:text-kronos-300 font-bold first-letter:text-2xl first-letter:font-black first-letter:pr-1 first-letter:text-primary">
                        Q. 導入後はどのようなサポートを受けられますか？
                      </span>
                      <div className="ml-auto">
                        <FaChevronRight className="opacity-40 transition-all group-open:rotate-90 align-middle -mr-1 text-xl pt-1" />
                      </div>
                    </summary>
                    <div className="transition-all p-6 bg-kronos-50">
                      <span className="inline-block first-letter:text-kronos first-letter:font-black first-letter:text-2xl first-letter:pr-1">
                        A.
                        ヘルプデスクサービスにて、お客様のご要件に合わせて伴走支援の相談を承っております。設定支援や質問対応など、どのような支援が必要かお知らせいただければ、具体的なご提案をさせていただきます。
                      </span>
                    </div>
                  </details>
                </div>
              </div>
            </section>
            <section id="contact" className="bg-kronos-100">
              <div className="mx-auto prose prose-stone p-12 max-w-screen-md prose-headings:text-stone-700 prose-h2:text-center prose-h2:text-2xl">
                <h2 className="mb-2">お問合せフォーム</h2>
                <span className="text-center text-primary font-semibold block text-lg pb-4">
                  CONTACT
                </span>
                <p>
                  こちらのメールフォームより、貴社からのお問い合わせを受け付けております。ご入力頂いた情報は、個人情報保護方針に基づき、適切に管理いたします。
                </p>
                <form
                  action=""
                  className="mx-auto my-8 p-4 md:p-6 bg-white/80 rounded-lg"
                >
                  <div className="flex flex-col my-4">
                    <p className="mt-0 before:content-['*'] before:text-red-500 block font-medium text-sm">
                      お問い合わせ製品を選択してください。
                    </p>

                    <div className="flex flex-wrap">
                      <div className="w-full sm:w-1/2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox accent-secondary"
                          />
                          <span className="ml-2">セキュアSAMBA</span>
                        </label>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox accent-secondary"
                          />
                          <span className="ml-2">AOS BOX</span>
                        </label>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox accent-secondary"
                          />
                          <span className="ml-2">トラスト・ログイン</span>
                        </label>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox accent-secondary"
                          />
                          <span className="ml-2">ヘルプデスクサービス</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-4">
                    <div className="relative mt-3">
                      <input
                        className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
                        placeholder="クロノス　太郎"
                        type="text"
                        id="name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-2.5 -top-6 text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-600 peer-focus:text-xs text-xs"
                      >
                        <span className="before:content-['*'] before:text-red-500 block">
                          氏名
                        </span>
                      </label>
                    </div>
                    <div className="relative mt-3">
                      <input
                        className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
                        placeholder="サンプル会社"
                        type="text"
                        id="company"
                      />
                      <label
                        htmlFor="company"
                        className="absolute left-2.5 -top-6 text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-600 peer-focus:text-xs text-xs"
                      >
                        <span className="block font-medium"> 会社名 </span>
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-4">
                    <div className="relative mt-3">
                      <input
                        className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
                        placeholder="email@example.com"
                        type="email"
                        id="email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-2.5 -top-6 text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-600 peer-focus:text-xs text-xs"
                      >
                        <span className="before:content-['*'] before:text-red-500 block font-medium">
                          メールアドレス
                        </span>
                      </label>
                      <p className="mt-2 hidden peer-invalid:block text-red-600 text-sm">
                        メールアドレスが正しく入力されていますか？例）email@example.com
                      </p>
                    </div>
                    <div className="relative mt-3">
                      <input
                        className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
                        placeholder="01-2345-6789"
                        type="tel"
                        id="phone"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-2.5 -top-6 text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-600 peer-focus:text-xs text-xs"
                      >
                        <span className="before:content-['*'] before:text-red-500 block font-medium">
                          電話番号
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="relative mt-3">
                      <textarea
                        className="peer border w-full rounded-lg border-stone-200 p-3 focus:ring-4 ring-primary-light focus:outline-none placeholder-transparent"
                        placeholder="お問合せ内容"
                        rows={8}
                        id="message"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-2.5 -top-6 text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-stone-600 peer-focus:text-xs text-xs"
                      >
                        お問合せ内容
                      </label>
                    </div>
                  </div>
                  <div className="mt-0">
                    <label className="flex items-center flex-wrap">
                      <input
                        type="checkbox"
                        className="peer form-checkbox accent-secondary"
                      />
                      <span className="text-sm grow m-2">
                        <a href="#">個人情報の取り扱い</a>について同意する
                      </span>

                      <div className="peer-checked:[&_button]:bg-primary peer-checked:[&_button:hover]:bg-primary-dark">
                        <button className="bg-stone-300 inline-flex rounded-lg px-8 py-3 text-white">
                          <span className="font-semibold">確認する</span>
                        </button>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
            </section>
            <footer className="px-8 p-2 prose prose-stone mx-auto text-center text-sm">
              © 2023 株式会社クロノス
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
