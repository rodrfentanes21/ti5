import React from "react";
import Image from "next/image";
import PUCMinas from "../../public/PUC-jpg.jpg";

export default function MainSection() {
  return (
    <section className="w-screen lg:w-full flex flex-col lg:flex-row justify-center items-center lg:h-screen px-5 lg:px-20 gap-5">
      <div className="flex flex-col justify-center h-3/4 w-full lg:w-1/2 gap-5">
        <h2 className="text-3xl text-dodgerblue-100">Os Criadores</h2>
        <p className="text-justify">
          Os criadores desse projeto são Caio Massote, Henrique Moura, Rodrigo
          Paiva e Thiago Guerra, alunos do curso de ciências da computação na
          PUC Minas que na disciplina de Trabalho Interdiciplinar 5, que no
          inicio do ano de 2023 tiveram a ideia de criar o SpecOS. Com informações importantes sobre SOs, o projeto veio 
          para ajudar quem ainda tem dúvida sobre qual Sistema Operacional usar.
        </p>
      </div>{" "}
      <div className="w-[20rem] h-[20rem] lg:w-1/2 grid place-items-center select-none rounded-bl-3xl rounded-tr-3xl">
        <Image
          src={PUCMinas}
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
