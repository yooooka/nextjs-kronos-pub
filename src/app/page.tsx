"use client";

import Image from "next/image";
import hero from "./assets/hero.svg";
import aosbox from "./assets/aosbox.svg";
import gmoLogin from "./assets/gmo-logo.svg";
import gmoSign from "./assets/gmosign.svg";
import samba from "./assets/mv-logo.svg";
import title01 from "./assets/title01.svg";
import title03 from "./assets/title03.svg";
import kronos from "./assets/kronos.svg";
import yorisoi from "./assets/yorisoi.svg";
import bg from "./assets/xd-pattern.png";
import Faq from "./faq";
import Drawer from "./drawer";
import Steps from "./steps";
import { MdOutlineSouth, MdArrowForward } from "react-icons/md";
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
        <header
          className="snap-start snap-always bg-kronos-400"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "center",
          }}
        >
          <section className="prose prose-stone flex flex-col h-screen justify-center items-center text-center w-full max-w-none p-12 prose-h1:text-2xl lg:prose-h1:text-4xl lg:typewriter">
            <a href="#split-top" className="group no-underline">
              <h1 className="px-6">
                話題のDX導入って、 何から始めればいいの？
              </h1>
              <MdOutlineSouth className="font-light animate-bounce text-3xl text-white group-hover:text-primary animation-delay-[2.5s] mx-auto" />
              <div className="text-stone-500">Scroll</div>
            </a>
          </section>
        </header>

        <div
          id="split-top"
          className="h-screen lg:flex lg:flex-row relative overflow-auto snap-start snap-always"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "center",
          }}
        >
          <aside className="lg:shadow-2xl lg:shadow-kronos-700/30 lg:transition-all lg:duration-500 transition-all duration-500 lg:flex-1 lg:w-[50%] w-full lg:sticky lg:top-0 lg:left-0 lg:h-full lg:z-10 relative">
            <Drawer />
            <nav className="p-3 sm:flex justify-between items-center">
              <div className="bg-no-repeat w-[120px] h-[36px] absolute top-3 left-6">
                <span className="sr-only">Kronos</span>
                <Image src={kronos} alt="クロノス　ロゴ" fill />
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
                <menu className="mt-8 not-prose font-bold mx-auto hidden sm:block sm:w-10/12">
                  <ul className="not-prose list-none space-y-6 text-lg">
                    <li className="group flex items-center place-content-end hover:cursor-pointer">
                      <MdArrowForward className="opacity-0 group-hover:opacity-100 text-primary transition-all -translate-x-6 group-hover:translate-x-0 duration-300 text-2xl me-1" />
                      <a href="#dx-explained">
                        <span className="border-b-4 border-kronos-400 pb-1">
                          DXとは？
                        </span>
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
                        <span className="border-b-4 border-kronos-400 pb-1">
                          導入事例
                        </span>
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
              </div>
            </div>
            <section className="bg-kronos-50/90 bottom-0 lg:absolute w-full hidden sm:flex items-center place-content-center p-4 flex-wrap z-10">
              <div className="text-sm p-2">
                <span>もっと詳しく知りたい／導入を検討したい</span>
                <p>DXって何？という方も、まずはご相談を！</p>
              </div>
              <a href="#contact">
                <button className="prose group relative inline-flex items-center rounded-full bg-primary px-8 py-2 text-white focus:outline-none focus:ring hover:bg-kronos-dark lg:text-center w-fit">
                  <MdArrowForward
                    fill="currentColor"
                    className="absolute end-full opacity-0 transition-all group-hover:end-5 group-hover:opacity-100 text-2xl"
                  />
                  <span className="font-semibold transition-all group-hover:me-3">
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
                <div className="bg-gradient-to-b from-kronos-50 to-kronos-50/0 prose prose-stone prose-h2:text-center prose-h2:text-2xl sm:prose-h2:text-3xl prose-h4:mt-0 prose-h4:text-xl prose-h4:font-semibold prose-li:mt-0 max-w-screen-md m-auto p-12">
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
              <div className="prose prose-stone mx-auto max-w-screen-lg p-8 sm:px-6 lg:px-8">
                <div className="mx-auto prose-h2:text-center prose-h2:text-2xl sm:prose-h2:text-3xl">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    variants={titleVariants}
                  >
                    <Image
                      alt="クロノスがおすすめする"
                      src={title03}
                      className="mx-auto mb-4 h-[60px] max-w-none object-contain"
                    />
                  </motion.div>

                  <h2 className="sr-only">クロノスがおすすめする</h2>
                  <h2 className="pb-2 m-auto w-fit">5つのDXサービス</h2>
                  <span className="text-center text-kronos font-semibold block text-lg pb-4 font-outfit">
                    DX SERVICES
                  </span>
                </div>
                <div className="prose-p:text-[0.85rem] prose-h3:mt-0 prose-h3:text-base mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-1 auto-cols-min sm:mx-12">
                  <div className="block rounded-lg bg-white shadow-lg shadow-kronos-600/20 p-8 transition hover:bg-kronos-50">
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
                  <div className="block rounded-lg bg-white shadow-lg shadow-kronos-600/20 p-8 transition hover:bg-kronos-50">
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
                  <div className="block rounded-lg bg-white shadow-lg shadow-kronos-600/20 p-8 transition hover:bg-kronos-50">
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
                  <div className="block rounded-lg bg-white shadow-lg shadow-kronos-600/20 p-8 transition hover:bg-kronos-50">
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
                  <div className="block rounded-lg bg-white shadow-lg shadow-kronos-600/20 p-8 transition hover:bg-kronos-50">
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
              <div className="mx-auto prose prose-stone p-12 max-w-screen-md prose-h2:text-center prose-h2:text-2xl">
                <h2 className="mb-2">お問い合わせフォーム</h2>
                <span className="text-center text-kronos font-semibold block text-lg pb-4 font-outfit">
                  CONTACT
                </span>
                <p className="sm:px-8">
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
                            className="form-checkbox accent-kronos-light"
                          />
                          <span className="ml-2">ヘルプデスクサービス</span>
                        </label>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox accent-kronos-light"
                          />
                          <span className="ml-2">GMOトラスト・ログイン</span>
                        </label>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox accent-kronos-light"
                          />
                          <span className="ml-2">GMOサイン</span>
                        </label>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox accent-kronos-light"
                          />
                          <span className="ml-2">セキュアSAMBA</span>
                        </label>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox accent-kronos-light"
                          />
                          <span className="ml-2">AOS BOX</span>
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
                        <span className="block font-medium">会社名</span>
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
                        お問い合わせ内容
                      </label>
                    </div>
                  </div>
                  <div className="mt-0">
                    <label className="flex items-center flex-wrap">
                      <input
                        type="checkbox"
                        className="peer form-checkbox accent-kronos-light"
                      />
                      <span className="text-sm grow m-2">
                        <a href="#">個人情報の取り扱い</a>について同意する
                      </span>

                      <div className="peer-checked:[&_button]:bg-primary peer-checked:[&_button:hover]:bg-primary-dark">
                        <button className="bg-stone-300 inline-flex rounded-full px-8 py-2 text-white">
                          <span className="font-semibold">確認する</span>
                        </button>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
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
