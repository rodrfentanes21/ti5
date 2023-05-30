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
              <h1 className="text-2xl bold">Arch</h1>
              <p>
                Arch Linux é uma distribuição com o objetivo de "keep it
                simple", não é uma opção amigável para o usuário médio (não
                mesmo), e geralmente é exclusiva para desenvolvedores, ou
                pessoas da área, que possuem um conhecimento maior sobre coisas
                relacionadas, geralmente é utilizado por usuários que buscam um
                maior controle das coisas contidas em seu computador, mas
                tambem, por conter o mínimo de carga inicial, pode ser uma
                alternativa para máquinas pouco potentes.
                <br />
                Para mais informações, visite a
                <Link
                  href="https://archlinux.org/"
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
                <li>CPU 1GHz velocidade de clock</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
