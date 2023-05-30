import React from "react";
import Header from "../../../components/mainpage/Header";
import DocsNavBar from "../../../components/documentationpage/DocsNavBar";
import Link from "next/link";

export default function documentacao() {
  return (
    <>
      <Header altUrl={true} />
      <div className="w-screen h-screen flex justify-center items-center p-20">
        <div className="flex justify-start items-center w-full h-full  rounded-2xl bg-slate-200">
          <DocsNavBar />
          <div className="grow h-full flex justify-center items-center">
            <div className="self-center w-4/5 h-4/5 flex flex-col gap-3 py-3 item-center justify-start">
              <h1 className="text-2xl bold">Ubuntu</h1>
              <p>
                Ubuntu é uma distribuição Linux rápida, popular, funcional e
                gratuita, voltada para criadores, desenvolvedores entre outros,
                apesar de não ser tão noob-friendly como o Mint ainda é uma boa
                opção para usuários comuns, devido a sua segurança,
                confiabilidade e ambiente de conteúdos online.
                <br />
                Para mais informações, visite a
                <Link
                  href="https://ubuntu.com/download"
                  target="_blank"
                  className="text-dodgerblue-100"
                >
                  {" "}
                  página principal
                </Link>
              </p>
              <h1 className="text-2xl bold">Especificações Recomendadas:</h1>
              <ul>
                <li>4GB RAM</li>
                <li>25GB de Espaço em Disco</li>
                <li>CPU 2GHz velocidade de clock</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
