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
              <h1 className="text-2xl bold">Debian</h1>
              <p>
              O sistema Debian é uma distribuição de software livre do sistema operacional GNU/Linux. Foi desenvolvido e é mantido por um grupo de voluntários em todo o mundo, 
              que trabalham juntos sob os princípios do Projeto Debian. O Projeto Debian 
              possui um objetivo central de fornecer um sistema operacional estável, seguro e de alta qualidade, seguindo rigorosamente os princípios de software livre.
                <br />
                O sistema Debian é conhecido por sua estrutura estável e confiável, sua vasta seleção de pacotes de software e sua comunidade ativa de desenvolvedores e usuários. A distribuição é baseada em um modelo de desenvolvimento aberto e transparente, 
                onde os pacotes de software são empacotados e mantidos individualmente por desenvolvedores e equipes específicas.
                <br />
                Além disso, o Debian é conhecido por sua grande diversidade de arquiteturas de hardware suportadas. 
                A distribuição é compatível com uma ampla gama de plataformas, desde desktops e servidores convencionais até sistemas embarcados e supercomputadores.
                <br />
                Para mais informações, visite a 
                <Link href="https://www.debian.org/index.pt.html" target="_blank" className="text-dodgerblue-100"> página principal</Link>
              </p>
              <h1 className="text-2xl bold">Especificações Recomendadas:</h1>
              <ul>
                <li>1GB RAM</li>
                <li>10GB de Espaço em Disco</li>
                <li>CPU com 1GHz velocidade de clock</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}