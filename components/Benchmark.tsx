import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Benchmark() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.8,
        },
      });
    }
  }, [inView, animation]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animation}
      id="benchmark"
      className="w-screen lg:w-full grid place-items-center h-screen"
    >
      <div className="flex flex-col lg:flex-row-reverse justify-start h-4/5 lg:h-3/4 w-[90%] items-start py-10">
        <div className="h-full w-full kg:w-1/2 flex flex-col gap-5">
          <h2 className=" text-dodgerblue-100 text-2xl md:text-3xl lg:text-6xl font-semibold flex justify-start items-center">
            <span className="mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10 lg:w-16 lg:h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                />
              </svg>
            </span>{" "}
            Benchmark
          </h2>
          <p className="text-xs md:text-sm lg:text-base">
            Chegou a hora de você botar na prática a principal funcionalidade do nosso site, tenha em mãos as configurações da sua máquina e deixa a gente fazer o resto por você!
            O benchmark irá analisar suas configurações e te recomendar os melhores sistemas operacionais para melhor desempenho do seu computador. Faça o teste!
          </p>
          <Link
            href="/benchmark"
            className="w-28 h-8 text-xs lg:w-40 lg:h-12 lg:text-base bg-dodgerblue-100 transform ease-in-out transition duration-700 hover:bg-dodgerblue-300 grid place-items-center text-[#f7f7f7] rounded-xl uppercase mb-5"
          >
            Benchmark
          </Link>
        </div>
        <div className="h-full w-full lg:w-1/2 grid place-items-center text-2xl">
        <Image src="/bench-removebg-preview.png" alt="Descrição da imagem" width={200} height={250} />       
        </div>
      </div>
    </motion.section>
  );
}
