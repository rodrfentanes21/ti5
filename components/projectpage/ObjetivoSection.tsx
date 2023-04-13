import React from "react";
import Image from "next/image";
import PUCMinas from "../../public/PUC-jpg.jpg";

export default function ObjetivoSection() {
  return (
    <section className="w-screen lg:w-full flex flex-col lg:flex-row first-letter:justify-center items-center lg:h-screen px-5 lg:px-20 gap-5">
      <div className="flex flex-col justify-center h-3/4 w-full lg:w-1/2 gap-5">
        <h2 className="text-3xl text-dodgerblue-100">Nosso Objetivo</h2>
        <p className="text-justify">
          (texto sobre objetivo do site e funcionalidades finais etc) Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi esse
          dolorem doloremque, delectus nisi odio ea tempore vitae commodi
          ratione adipisci illo iusto deserunt velit sit! Magni, et
          reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Distinctio ipsum est possimus, impedit minima porro commodi
          laboriosam?
        </p>
        <ul className="list-disc px-5">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            natus optio consequuntur obcaecati, neque{" "}
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            natus optio consequuntur obcaecati, neque{" "}
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            natus optio consequuntur obcaecati, neque{" "}
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            natus optio consequuntur obcaecati, neque{" "}
          </li>
        </ul>
      </div>

      <div className="w-[20rem] h-[20rem] lg:w-1/2 grid place-items-center select-none rounded-bl-3xl rounded-tr-3xl">
        imagem
      </div>
    </section>
  );
}
