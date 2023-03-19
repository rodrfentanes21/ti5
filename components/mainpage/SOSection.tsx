import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SOSection() {
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
      id="so"
      className="w-screen lg:w-full grid place-items-center h-screen"
    >
      <div className="flex flex-col lg:flex-row-reverse justify-start h-4/5 lg:h-3/4 w-[90%] items-start py-10">
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
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>
            </span>{" "}
            Sobre Os SOs
          </h2>
          <p className="text-xs md:text-sm lg:text-base">
            Vamos lá, antes de tudo, você sabe o quê é um sistema operacional? 
            Um sistema operacional é um software fundamental que controla e gerencia os recursos de hardware e software de um computador ou dispositivo móvel. Ele é responsável por permitir que aplicativos e programas possam ser executados, acessando os recursos de hardware do computador, como o processador, memória, disco rígido, monitor e outros periféricos.
            Os sistemas operacionais são desenvolvidos para atender às necessidades específicas de diferentes tipos de dispositivos e plataformas, como desktops, laptops, smartphones e tablets. Eles fornecem uma interface para que os usuários possam interagir com o computador, permitindo que eles executem tarefas de forma eficiente e eficaz.
            Existem vários tipos de sistemas operacionais disponíveis atualmente, incluindo sistemas operacionais de desktop, como Windows, macOS e Linux, e sistemas operacionais móveis, como iOS e Android.
          </p>
          <Link
            href="/documentacao"
            className="w-28 h-8 text-xs lg:w-40 lg:h-12 lg:text-base bg-dodgerblue-100 transform ease-in-out transition duration-700 hover:bg-dodgerblue-300 grid place-items-center text-[#f7f7f7] rounded-xl uppercase mb-5"
          >
            Documentação
          </Link>
        </div>
        <div className="h-full w-full lg:w-1/2 grid place-items-center text-2xl">
        <Image src="/sos-removebg-preview.png" alt="Descrição da imagem" width={500} height={500} />   
        </div>
      </div>
    </motion.section>
  );
}
