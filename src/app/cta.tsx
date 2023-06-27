import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { MdArrowForward } from "react-icons/md";
import { motion, Variants, AnimatePresence } from "framer-motion";

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

const Cta: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to repeat
    threshold: 0.5, // Adjust this value for when you want to trigger the animation
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <AnimatePresence>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          exit="offscreen"
          viewport={{ once: true, amount: 0 }}
          variants={titleVariants}
          className={`bg-kronos-50/90 bottom-0 lg:absolute flex items-center py-2 px-4 sm:p-4 z-10 lg:justify-center mx-auto text-center w-full ${
            isVisible ? "fixed" : ""
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center text-sm py-2 space-y-1  space-x-1 basis-1/2 sm:basis-2/3 mx-auto justify-center text-stone-700">
            <span className="hidden sm:inline-block max-w-max border-2 font-bold border-kronos-light rounded-full bg-white px-3 py-1">
              もっと詳しく知りたい
            </span>
            <span className="hidden sm:inline-block max-w-max border-2 font-bold border-kronos-light rounded-full bg-white  px-3 py-1 ">
              導入を検討したい
            </span>
            <span className="inline-block max-w-max border-2 font-bold border-kronos-light rounded-full bg-white  px-3 py-1 me-1">
              DXって何？という方
            </span>
            <span> も、まずはご相談を！</span>
          </div>
          <a href="#contact" className="basis-1/2 sm:basis-1/3">
            <button className="prose group relative w-max inline-flex items-center rounded-full bg-primary-dark px-8 py-2 text-white focus:outline-none focus:ring hover:bg-kronos lg:text-center">
              <MdArrowForward
                fill="currentColor"
                className="absolute end-full opacity-0 transition-all group-hover:end-5 group-hover:opacity-100 text-2xl"
              />
              <span className="font-bold transition-all group-hover:me-3">
                お問い合わせ
              </span>
            </button>
          </a>
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default Cta;
