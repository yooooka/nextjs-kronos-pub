import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { MdOutlineSouth } from "react-icons/md";
import bg from "./assets/xd-pattern.png";
import title00 from "./assets/title00.svg";
import xd from "./assets/xd.svg";
import Xdbg from "./xd";

const titleVariants: Variants = {
  offscreen: {
    y: 40,
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

export default function Opening() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500); // 1 second duration * 6 repeats = 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          layout
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: "100vh",
          }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative bg-gradient-to-r from-kronos-500 via-kronos-400 to-kronos-600 snap-start snap-always background-animate w-full h-full"
        >
          <div>
            <motion.div
              layout
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0.4, scale: [null, 2, 1] }}
              transition={{
                delay: 4,
                duration: 1.2,
                type: "spring",
                bounce: 0.5,
              }}
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundPosition: "center",
              }}
            >
              <section className="prose prose-stone flex flex-col h-screen justify-center items-center text-center w-full max-w-none p-12 prose-h1:text-2xl prose-h1:font-bold lg:prose-h1:text-4xl isolate">
                <motion.div
                  className="not-prose mb-2"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={titleVariants}
                >
                  <Image alt="wadai" src={title00} className="mx-auto" />
                </motion.div>
                <motion.h1
                  className="px-6"
                  initial="offscreen"
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 1,
                    },
                  }}
                  viewport={{ once: true, amount: 0 }}
                  variants={titleVariants}
                >
                  DX導入って、 何から始めればいいの？
                </motion.h1>
                <a href="#split-top" className="group no-underline">
                  <div className="text-stone-900">Scroll</div>
                  <MdOutlineSouth className="font-light animate-bounce text-3xl text-white group-hover:text-primary animation-delay-[2.5s] mx-auto" />
                </a>
              </section>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
