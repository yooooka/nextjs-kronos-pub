"use client";
import React from "react";
import Image from "next/image";
import hero from "./assets/hero.svg";
import bgWhite from "./assets/xd-pattern-white.png";
import Opening from "./opening";
import Faq from "./faq";
import Steps from "./steps";
import Services from "./services";
import ContactHtml from "./contact-html";
import DxExplained from "./dx-explained";
import { MotionConfig } from "framer-motion";
import LeftSide from "./left-side";
import useWindowSize from "./useWindowSize";

export default function Home() {
  const isSmallScreen = useWindowSize();
  return (
    <MotionConfig reducedMotion="user">
      <div
        id="anchor"
        className="h-screen snap-y snap-mandatory font-mplus text-stone-900"
      >
        <header>
          <h1 className="sr-only">話題のDX導入って、 何から始めればいいの？</h1>
          <Opening />
        </header>
        <div
          id="split-top"
          className="relative h-screen snap-start overflow-auto sm:snap-always lg:flex lg:flex-row"
          style={{
            backgroundImage: `url(${bgWhite.src})`,
            backgroundPosition: "center",
          }}
        >
          <LeftSide />
          <main
            className="lg:w-[50%] lg:flex-[0_0_50%]" //右側コンテンツ
          >
            <div className="flex flex-col items-end justify-end lg:h-full">
              <Image
                alt="メイン画像"
                src={hero}
                className="m-auto h-[58vh] flex-auto lg:h-[100vh] lg:w-full lg:pt-8"
              />
            </div>
            <section
              id="dx-explained"
              className="relative bg-gradient-to-b from-kronos-50 to-kronos-50/0"
            >
              <DxExplained />
            </section>
            <section
              id="steps"
              className="relative bg-gradient-to-b from-kronos-50 to-kronos-50/0"
            >
              <Steps />
            </section>
            <section
              id="services"
              className="bg-gradient-to-b from-kronos-50 to-kronos-50/0"
            >
              <Services />
            </section>
            <section // 導入事例、準備中
              id="cases"
              className="relative bg-gradient-to-b from-kronos-50 to-kronos-50/0"
            ></section>
            <section
              id="faq"
              className="bg-gradient-to-b from-kronos-50 to-kronos-50/0"
            >
              <Faq />
            </section>
            <section
              id="contact"
              className="bg-gradient-to-b from-kronos-50 to-kronos-50/0"
            >
              <ContactHtml />
            </section>
            <footer className="prose prose-stone w-full max-w-none px-12 pb-28 text-center lg:pb-12">
              <a
                href={isSmallScreen ? "#page-top" : "#dx-explained"}
                className="mx-auto mb-3 inline-block"
              >
                ↑ ページトップへ
              </a>
              <div className="mx-auto text-sm">© 2023 株式会社クロノス</div>
            </footer>
          </main>
        </div>
      </div>
    </MotionConfig>
  );
}
