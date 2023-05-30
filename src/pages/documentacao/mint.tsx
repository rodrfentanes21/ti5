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
              <h1 className="text-2xl bold">Mint</h1>
              <p>
                Linux Mint é um sistema operacional feito para funcionar assim
                que instalado, contendo os aplicativos que um usuário médio
                normalmente necessita desde o momento de sua instalação.
                <br />
                Seu objetivo principal é ser um sistema Linux amigável, seguro e
                com uma curva de aprendizado quase nula para novos usuários de
                Linux, um SO ideal para alguem que não tem experiência com
                outras distros e usou Windows/Mac a vida toda e está tentando entrar no mundo Linux
                <br />
                Para mais informações, visite a 
                <Link href="https://linuxmint.com/" target="_blank" className="text-dodgerblue-100"> página principal</Link>
              </p>
              <h1 className="text-2xl bold">Especificações Recomendadas:</h1>
              <ul>
                <li>4GB RAM</li>
                <li>100GB de Espaço em Disco</li>
                <li>CPU 64 bits com 2GHz velocidade de clock</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
