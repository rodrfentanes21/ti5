import React from "react";

export default function MainSection() {
  return (
    <section className="w-screen lg:w-full flex flex-col lg:flex-row justify-center items-center lg:h-screen px-5 lg:px-20 gap-5">
      <div className="flex flex-col justify-center h-3/4 w-full lg:w-1/2 gap-5">
        <h2 className="text-3xl text-dodgerblue-100">titulo</h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi
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
      <div className="h-3/4 w-full lg:w-1/2 grid place-items-center">imagem</div>
    </section>
  );
}
