import React from "react";
import Image from "next/image";
import ObjetivoImg from "../../public/goal-removebg-preview.png";

export default function ObjetivoSection() {
  return (
    <section className="w-screen lg:w-full flex flex-col lg:flex-row first-letter:justify-center items-center lg:h-screen px-5 lg:px-20 gap-5">
      <div className="flex flex-col justify-center h-3/4 w-full lg:w-1/2 gap-5">
        <h2 className="text-3xl text-dodgerblue-100">Nosso Objetivo</h2>
        <p className="text-justify">
          O Objetivo final de nossa equipe é criar uma plataforma aberta e
          global, que permita ao usuário médio conferir as capacidades de seu
          computador no que tange a sistemas operacionais, e guiar uma tomada de
          decisão mais consciente (uma vez que de desempenhos mais tímidos nem
          sempre serão capazes de rodar a versão mais recente do Windows).
          <br />
          Tambem buscamos criar uma plataforma que possibilite ao usuário médio
          ter acesso a informações e vantagens de sistemas alternativos, que
          apesar de sua eficiência e capacidade, muitas vezes não são sequer
          conhecidos por grande parte da população.
        </p>
        <ul className="list-disc px-5">
          <li>
            Fornecer informações precisas e atualizadas sobre os diferentes
            tipos de sistemas de informações disponíveis, incluindo sistemas de
            gestão empresarial, sistemas de gestão de banco de dados, sistemas
            de informação de marketing, sistemas de informação de recursos
            humanos e muito mais.{" "}
          </li>
          <li>
            Manter a plataforma atualizada e relevante, incorporando feedback
            dos usuários e se adaptando às mudanças no mercado e na tecnologia
            de sistemas de informações.{" "}
          </li>
          <li>
            Oferecer amplas comparações entre Sistemas Operacionais diferentes{" "}
          </li>
        </ul>
      </div>

      <div className="w-[20rem] h-[20rem] lg:w-1/2 grid place-items-center select-none rounded-bl-3xl rounded-tr-3xl">
      <Image
          src={ObjetivoImg}
          alt="puc minas photo"
          placeholder="blur"
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
