import React from "react";
import Header from "../../components/mainpage/Header";
import Link from "next/link";

export default function documentacao() {
  return (
    <>
      <Header altUrl={true} />
      <div className="w-screen h-screen flex justify-center items-center p-20">
        <div className="flex justify-start items-center w-full h-full  rounded-2xl bg-slate-200">
          <ul className="w-64 h-full flex flex-col justify-start items-center border border-[#f7f7f7] border-r-slate-400">
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300 rounded-tl-xl">
              <Link
                className="w-full h-full grid place-items-center"
                href="/documentacao/"
              >
                Introdução
              </Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link
                className="w-full h-full grid place-items-center"
                href="/documentacao/arch"
              >
                Arch
              </Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link
                className="w-full h-full grid place-items-center"
                href="/documentacao/debian"
              >
                Debian
              </Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link
                className="w-full h-full grid place-items-center"
                href="/documentacao/fedora"
              >
                Fedora
              </Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link
                className="w-full h-full grid place-items-center"
                href="/documentacao/garuda"
              >
                Garuda
              </Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link
                className="w-full h-full grid place-items-center"
                href="/documentacao/mint"
              >
                Mint
              </Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link
                className="w-full h-full grid place-items-center"
                href="/documentacao/ubuntu"
              >
                Ubuntu
              </Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link
                className="w-full h-full grid place-items-center"
                href="/documentacao/windows10"
              >
                Windows 10
              </Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link
                className="w-full h-full grid place-items-center"
                href="/documentacao/windows11"
              >
                Windows 11
              </Link>
            </li>
          </ul>
          <div className="grow h-full flex flex-col justify-start py-10 gap-2 items-center">
            <div className="self-center w-4/5 h-4/5 flex flex-col gap-3 py-3 item-center justify-start">
              <h1 className="text-2xl bold">
                Bem Vindo(a) à nossa Documentação!
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel
                harum aliquam? Cum architecto repellat et iusto adipisci. Neque
                aliquid ad exercitationem beatae repudiandae odio perspiciatis
                perferendis voluptatum deserunt mollitia. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nisi explicabo ipsum nesciunt
                facilis ut vero qui nobis consequatur nam expedita ullam harum,
                quibusdam dolore dolor molestiae similique autem repellat!
                Dignissimos?
              </p>
              <h1 className="text-2xl bold">
                Outro Paragrafo!
              </h1>
              <p className="w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel
                harum aliquam? Cum architecto repellat et iusto adipisci. Neque
                aliquid ad exercitationem beatae repudiandae odio perspiciatis
                perferendis voluptatum deserunt mollitia. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nisi explicabo ipsum nesciunt
                facilis ut vero qui nobis consequatur nam expedita ullam harum,
                quibusdam dolore dolor molestiae similique autem repellat!
                Dignissimos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
