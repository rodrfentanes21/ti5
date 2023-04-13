import React from "react";

export default function SecondSection() {
  return (
    <section className="w-screen lg:w-full flex flex-col lg:flex-row-reverse justify-center items-center lg:h-screen px-5 lg:px-20 gap-5">
      <div className="flex flex-col justify-center h-3/4 w-full lg:w-1/2 gap-5">
        <h2 className="text-3xl text-dodgerblue-100">
          Nossas motivacoes ou algo do tipo
        </h2>
        <p className="text-justify">
          (texto sobre objetivo do site e funcionalidades finais etc) Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi esse
          dolorem doloremque, delectus nisi odio ea tempore vitae commodi
          ratione adipisci illo iusto deserunt velit sit! Magni, et
          reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Distinctio ipsum est possimus, impedit minima porro commodi
          laboriosam?
        </p>
      </div>

      <div className="w-[20rem] h-[20rem] lg:w-1/2 grid place-items-center select-none rounded-bl-3xl rounded-tr-3xl">
        imagem
      </div>
    </section>
  );
}
