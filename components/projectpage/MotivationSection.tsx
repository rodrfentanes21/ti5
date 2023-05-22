import React from "react";
import Image from "next/image";
import MotivacaoImg from "../../public/motivacao-removebg-preview.png"

export default function MotivationSection() {
  return (
    <section className="w-screen lg:w-full flex flex-col lg:flex-row-reverse justify-center items-center lg:h-screen px-5 lg:px-20 gap-5">
      <div className="flex flex-col justify-center h-3/4 w-full lg:w-1/2 gap-5">
        <h2 className="text-3xl text-dodgerblue-100">Nossas Motivações</h2>
        <p className="text-justify">
          O desenvolvimento do SpecOS foi motivado por diversas razões,
          incluindo a necessidade de informação para a tomada de decisão e a
          busca por soluções mais eficientes e econômicas. Atualmente existe uma
          crescente demanda por tecnologia e informação no mundo moderno. Com
          tantas opções de sistemas operacionais disponíveis, muitas pessoas e
          empresas podem ficar confusas sobre qual escolher. Nesse sentido, o
          SpecOS pode ser uma ferramenta útil para ajudar a tomar uma decisão
          informada. Além disso existe a necessidade de encontrar soluções mais
          eficientes e econômicas. À medida que as empresas crescem, elas podem
          precisar lidar com sistemas operacionais que não estão mais atendendo
          às suas necessidades. Assim o SpecOS pode ajudar as empresas a
          encontrar uma solução mais adequada para suas necessidades. Por fim, a
          motivação por trás do desenvolvimento do SpecOS foi simplesmente
          ajudar as pessoas a se manterem atualizadas sobre as tendências e
          inovações na tecnologia. À medida que novos sistemas operacionais são
          desenvolvidos, buscamos ajudar os usuários a entender melhor as
          diferenças e benefícios de cada um.
        </p>
      </div>

      <div className="w-[20rem] h-[20rem] lg:w-1/2 grid place-items-center select-none rounded-bl-3xl rounded-tr-3xl">
        <Image
          src={MotivacaoImg}
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
