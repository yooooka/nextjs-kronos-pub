import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { MdOutlineSouth } from "react-icons/md";
import bg from "./assets/xd-pattern.png";
import title00 from "./assets/title00.svg";

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
    }, 5200); // 1 second duration * 6 repeats = 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="bg-kronos-light">
          <motion.div
            layout
            initial={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: "100vh",
              transition: {
                duration: 0.8,
                type: "spring",
              },
            }}
            className="relative bg-gradient-to-r from-kronos-500 via-kronos-400 to-kronos-600 snap-start snap-always background-animate w-full h-full animation-delay-[2s]"
          >
            <motion.div
              layout
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 4.4,
                duration: 0.5,
                type: "spring",
              }}
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundPosition: "center",
              }}
            >
              <section className="prose prose-stone flex flex-col h-screen justify-center items-center text-center w-full max-w-none p-12 prose-h1:text-2xl prose-h1:font-bold lg:prose-h1:text-4xl">
                <motion.div
                  className="not-prose mb-2"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={titleVariants}
                >
                  <Image alt="wadai" src={title00} className="mx-auto" />
                </motion.div>
                <h1 className="px-6 lg:typewriter">
                  DX導入って、 何から始めればいいの？
                </h1>
                <motion.div
                  initial="offscreen"
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 1.6,
                    },
                  }}
                  viewport={{ once: true, amount: 0 }}
                  variants={titleVariants}
                  className=" absolute bottom-12"
                >
                  <a href="#split-top" className="group no-underline">
                    <div className="text-kronos-50 -rotate-90">Scroll</div>
                    <MdOutlineSouth className="mt-4 font-thing text-3xl text-kronos-50 group-hover:text-kronos-dark animation-delay-[2.5s] mx-auto animate-bounce" />
                  </a>
                </motion.div>
              </section>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
