import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projeto() {
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
      id="project"
      className="w-screen lg:w-full grid place-items-center h-screen"
    >
      <div className="flex flex-col lg:flex-row justify-start h-4/5 lg:h-3/4 w-[90%] items-start py-10">
        <div className="h-full w-full lg:w-1/2 flex flex-col gap-5">
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
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
            </span>{" "}
            O Projeto
          </h2>
          <p className="text-xs md:text-sm lg:text-base">
           O projeto SpecOs, foi criado pelos alunos Caio Massote, Henrique Moura, Rodrigo Paiva e Thiago Guerra do curso ciências da computação da PUC Minas.
           Com o objetivo de unir em somente uma plataforma informações sobre arquitetura de computadores e sistemas operacionais e consequentemente poder proporcionar ao usuário conhecimento para 
           poder escolher entre qual sistema operacional seria de bom desempenho para sua máquina em especifíco.
           O projeto foi desenvolvido na linguagem TypeScript, com a biblioteca React e o meta-framework Next.js.
          </p>
          <Link
            href="/projeto"
            className="w-28 h-8 text-xs lg:w-40 lg:h-12 lg:text-base bg-dodgerblue-100 transform ease-in-out transition duration-700 hover:bg-dodgerblue-300 grid place-items-center text-[#f7f7f7] rounded-xl uppercase mb-5"
          >
            Saiba Mais
          </Link>
        </div>
        <div className="h-full w-screen lg:w-1/2 grid place-items-center text-2x1">
        <Image src="/pcgame.png" alt="Descrição da imagem" width={250} height={250} />       
         </div>
      </div>
    </motion.section>
  );
}
