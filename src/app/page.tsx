"use client";
import React, { useEffect, useState } from "react";
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
          <LeftSide />
          <main
            className="lg:flex-[0_0_50%] lg:w-[50%]" //右側コンテンツ
          >
            <div className="flex flex-col items-end justify-end lg:h-full">
              <Image
                alt="メイン画像"
                src={hero}
                className="lg:w-full lg:h-[100vh] h-[58vh] m-auto lg:pt-8 flex-auto"
              />
            </div>
            <div>
              <section
                id="dx-explained"
                className="bg-gradient-to-b from-kronos-50 to-kronos-50/0 text-stone-900 relative"
              >
                <DxExplained />
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
            <section // 導入事例、準備中
              id="cases"
              className="bg-gradient-to-b from-kronos-50 to-kronos-50/0 text-stone-900 relative"
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
            <footer className="px-12 pb-12 w-full text-center prose prose-stone max-w-none">
              <a
                href={isSmallScreen ? "#page-top" : "#dx-explained"}
                className="mb-3 mx-auto inline-block"
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
