import React from 'react'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
    className="flex flex-col gap-5 justify-center items-center w-screen lg:w-full h-screen text-center lg:text-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}>
        <h1 className="text-6xl font-bold self-center text-center text-dodgerblue-100">
            Nosso Projeto
        </h1>
    </motion.section>
  )
}
