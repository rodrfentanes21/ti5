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
      <div className="flex justify-start h-3/4 w-[90%] items-start py-10">
        <div className="h-full w-1/2 grid place-items-center text-2xl">
          outro conteudo
        </div>
        <div className="h-full w-1/2 flex flex-col gap-5">
          <h2 className=" text-dodgerblue-100 text-6xl font-semibold flex justify-start items-center">
            <span className="mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
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
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            debitis vero architecto sapiente veniam aperiam repellat, ea eveniet
            tenetur minima excepturi temporibus explicabo maxime, commodi
            repudiandae! Ea voluptates neque distinctio? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sunt debitis vero architecto
            sapiente veniam aperiam repellat, ea eveniet tenetur minima
            excepturi temporibus explicabo maxime, commodi repudiandae! Ea
            voluptates neque distinctio? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sunt debitis vero architecto sapiente veniam
            aperiam repellat, ea eveniet tenetur minima excepturi temporibus
            explicabo maxime, commodi repudiandae! Ea voluptates neque
            distinctio?
          </p>
          <Link href="/documentacao" className="w-40 h-12 bg-dodgerblue-100 transform ease-in-out transition duration-700 hover:bg-dodgerblue-300 grid place-items-center text-[#f7f7f7] rounded-xl uppercase">Documentação</Link>
        </div>
      </div>
    </motion.section>
  );
}
