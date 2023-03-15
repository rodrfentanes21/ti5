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
        Informações de diversos SOs <span className="text-dodgerblue-100">em uma só plataforma</span>
      </h1>
      <p className="text-xl text-slate-500 font-semibold w-3/4 text-center">
        Está tendo problemas com seu para rodar seu Sistema Operacional e está considerando uma troca? Em nossa plataforma você poderá descobrir mais informações sobre diversos sistemas operacionais, seus requisitos e recomendações e muito mais!
      </p>
    </motion.section>
  );
}
