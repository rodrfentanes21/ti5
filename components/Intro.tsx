import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.section
      className="flex flex-col gap-5 justify-center items-center w-screen lg:w-full h-screen text-center lg:text-start"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
    >
      <h1 className="text-6xl font-bold self-center text-center">
        texto so q preto <span className="text-dodgerblue-100">texto so q colorido</span>
      </h1>
      <p className="text-2xl text-slate-500 font-semibold">
        texto so q menor
      </p>
    </motion.section>
  );
}
