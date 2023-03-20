import React from "react";
import Image from "next/image";
import PUCMinas from "../../public/PUC-jpg.jpg"

export default function MainSection() {
  return (
    <section className="w-screen lg:w-full flex flex-col lg:flex-row justify-center items-center lg:h-screen px-5 lg:px-20 gap-5">
      <div className="flex flex-col justify-center h-3/4 w-full lg:w-1/2 gap-5">
        <h2 className="text-3xl text-dodgerblue-100">Os Desenvolvedores</h2>
        <p className="text-justify">
          (texto sobre pipi popopo alunos puc minas bla bla bla) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi
          esse dolorem doloremque, delectus nisi odio ea tempore vitae commodi
          ratione adipisci illo iusto deserunt velit sit! Magni, et
          reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Distinctio ipsum est possimus, impedit minima porro commodi
          laboriosam? Deleniti, exercitationem! Nemo repellendus quis harum
          inventore qui esse, beatae sapiente in rerum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Praesentium laboriosam a tenetur ab
          optio delectus esse dolor illo rerum labore excepturi, reprehenderit
          fugiat recusandae eos, cumque, aliquid debitis eveniet qui!
        </p>
      </div>
      {/* TODO resolver o object da imagem mas fiquei sem net no meio da  aula */}
      <div className="h-3/4 w-full lg:w-1/2 grid place-items-center object-cover select-none rounded-bl-3xl rounded-tr-3xl">
        <Image src={PUCMinas} alt="puc minas photo" placeholder="blur" width={1000} height={1000} style={{objectFit:"cover"}}/>
      </div>
    </section>
  );
}
