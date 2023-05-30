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
              <h1 className="text-2xl bold">Windows 10</h1>
              <p>
                Windows 10 é uma versão muito popular do sistema operacional
                mais popular, apesar de não ter algumas das features da versão
                mais recente, é ideal para máquinas menos potentes e alguns
                casos específicos de softwares não compatíveis com a versão mais
                recente.
                <br />
                Para mais informações, visite a
                <Link
                  href="https://www.microsoft.com/pt-br/software-download/windows10"
                  target="_blank"
                  className="text-dodgerblue-100"
                >
                  {" "}
                  página principal
                </Link>
              </p>
              <h1 className="text-2xl bold">Especificações Recomendadas:</h1>
              <ul>
                <li>2GB RAM</li>
                <li>20GB de Espaço em Disco</li>
                <li>
                  CPU 1GHz velocidade de clock
                </li>
                <li>Placa de vídeo compatível com DirectX 9 ou posterior</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
