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
          className={`bottom-0 z-10 mx-auto flex w-full items-center bg-kronos-50/90 px-4 py-2 text-center sm:p-4 lg:absolute lg:justify-center ${
            isVisible ? "fixed" : ""
          }`}
        >
          <div className="mx-auto flex basis-1/2 flex-col items-center justify-center space-x-1 space-y-1  py-2 text-sm text-stone-700 sm:basis-2/3 sm:flex-row sm:flex-wrap">
            <span className="hidden max-w-max rounded-full border-2 border-kronos-light bg-white px-3 py-1 font-bold sm:inline-block">
              もっと詳しく知りたい
            </span>
            <span className="hidden max-w-max rounded-full border-2 border-kronos-light bg-white px-3 py-1  font-bold sm:inline-block ">
              導入を検討したい
            </span>
            <span className="me-1 inline-block max-w-max rounded-full border-2 border-kronos-light bg-white  px-3 py-1 font-bold">
              DXって何？という方
            </span>
            <span> も、まずはご相談を！</span>
          </div>
          <a href="#contact" className="basis-1/2 sm:basis-1/3">
            <button className="group prose relative inline-flex w-max items-center rounded-full bg-primary-dark px-8 py-2 text-white hover:bg-kronos focus:outline-none focus:ring lg:text-center">
              <MdArrowForward
                fill="currentColor"
                className="absolute end-full text-2xl opacity-0 transition-all group-hover:end-5 group-hover:opacity-100"
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
