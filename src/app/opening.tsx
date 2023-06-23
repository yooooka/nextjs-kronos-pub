import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { MdOutlineSouth } from "react-icons/md";
import bg from "./assets/xd-pattern.png";
import title00 from "./assets/title00.svg";

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

export default function Opening() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2100); // 1 second duration * 6 repeats = 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div>
          <motion.div
            className="relative bg-kronos-400 snap-start snap-always"
            initial={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: "100%",
            }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundPosition: "center",
            }}
          >
            <section className="prose prose-stone flex flex-col h-screen justify-center items-center text-center w-full max-w-none p-12 prose-h1:text-2xl prose-h1:font-bold lg:prose-h1:text-4xl">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={titleVariants}
                className="not-prose mb-2"
              >
                <Image alt="wadai" src={title00} className="mx-auto" />
              </motion.div>
              <h1 className="px-6 lg:typewriter">
                DX導入って、 何から始めればいいの？
              </h1>
              <a href="#split-top" className="group no-underline">
                <div className="text-stone-900">Scroll</div>
                <MdOutlineSouth className="font-light animate-bounce text-3xl text-white group-hover:text-primary animation-delay-[2.5s] mx-auto" />
              </a>
            </section>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
