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
              <h1 className="text-2xl bold">Windows 11</h1>
              <p>
                Windows 11 é a versão mais atual do sistema operacional mais
                popular para o usuário médio.
                <br />
                Apesar de dispensar apresentação, vale ressaltar que nessa
                versão, o SO apresenta diversas atualizações de QOL e interface,
                assim como novas ferramentas, contudo, requer uma máquina mais
                poderosa que as versões anteriores.
                <br />
                Para mais informações, visite a
                <Link
                  href="https://www.microsoft.com/pt-br/software-download/windows11"
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
                <li>64GB de Espaço em Disco</li>
                <li>CPU 1GHz velocidade de clock ccom 2 ou mais <i>cores</i></li>
                <li>Placa de vídeo compatível com DirectX 12 ou posterior</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
