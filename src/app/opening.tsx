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
          className="snap-start snap-always bg-kronos-400 relative transition-opacity duration-500"
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
              className="fixed bottom"
            />
          </motion.div>
          <section className="prose prose-stone flex flex-col h-screen justify-center items-center text-center w-full max-w-none p-12 prose-h1:text-2xl lg:prose-h1:text-4xl lg:typewriter">
            <h1 className="px-6">DX導入って、 何から始めればいいの？</h1>
            <a href="#split-top" className="group no-underline">
              <div className="text-stone-900">Scroll</div>
              <MdOutlineSouth className="font-light animate-bounce text-3xl text-white group-hover:text-primary animation-delay-[2.5s] mx-auto" />
            </a>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
