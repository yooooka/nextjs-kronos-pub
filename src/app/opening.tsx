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
            className="background-animate relative h-full w-full snap-start bg-gradient-to-r from-kronos-500 via-kronos-400 to-kronos-600 animation-delay-[1s] sm:snap-always"
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
              <section className="prose prose-stone flex h-screen w-full max-w-none flex-col items-center justify-center p-12 text-center prose-h1:text-2xl prose-h1:font-bold lg:prose-h1:text-4xl">
                <motion.div
                  className="not-prose mb-2"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={titleVariants}
                >
                  <Image
                    alt="wadai"
                    src={title00}
                    className="mx-auto h-[60px] w-auto"
                  />
                </motion.div>
                <h1 className="lg:typewriter px-6">
                  DX導入って、 何から始めればいいの？
                </h1>
                <motion.div
                  initial="offscreen"
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 2,
                    },
                  }}
                  viewport={{ once: true, amount: 0 }}
                  variants={titleVariants}
                  className="absolute bottom-[24vh]"
                >
                  <a href="#split-top" className="group no-underline">
                    <div className="-rotate-90 text-kronos-50">Scroll</div>
                    <MdOutlineSouth className="font-thing mx-auto mt-4 animate-bounce text-3xl text-kronos-50 animation-delay-[2.5s] group-hover:text-kronos-dark" />
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
