import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MdOutlineSouth } from "react-icons/md";
import bg from "./assets/xd-pattern.png";

export default function Opening() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1400); // 1 second duration * 6 repeats = 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="relative snap-start bg-kronos-400 transition-opacity duration-500 sm:snap-always"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: "100vh",
          }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeIn",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: 3,
              repeatDelay: 1,
            }}
          >
            <Image
              src={bg}
              alt="fpo"
              unoptimized={true}
              className="bottom fixed"
            />
          </motion.div>
          <section className="lg:typewriter prose prose-stone flex h-screen w-full max-w-none flex-col items-center justify-center p-12 text-center prose-h1:text-2xl lg:prose-h1:text-4xl">
            <h1 className="px-6">DX導入って、 何から始めればいいの？</h1>
            <a href="#split-top" className="group no-underline">
              <div className="text-stone-900">Scroll</div>
              <MdOutlineSouth className="mx-auto animate-bounce text-3xl font-light text-white animation-delay-[2.5s] group-hover:text-primary" />
            </a>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
