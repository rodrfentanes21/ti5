import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import Image from "next/image";

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
      <div className="flex justify-start h-3/4 w-[90%] items-start py-10">
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
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
            </span>{" "}
            O Projeto
          </h2>
          <p className="grow">
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
        </div>
        <div className="h-full w-1/2 grid place-items-center text-2xl">
          imagem
        </div>
      </div>
    </motion.section>
  );
}
