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
              <h1 className="text-2xl bold">Fedora</h1>
              <p>
              O sistema Fedora é uma distribuição de software livre baseada em Linux, desenvolvida pela comunidade Fedora e apoiada pela Red Hat. 
              É conhecido por seu foco em inovação, segurança e desempenho, oferecendo uma experiência de usuário atualizada e confiável. 
              O Fedora suporta uma ampla variedade de arquiteturas de hardware e oferece várias edições para atender às necessidades dos diferentes tipos de usuários.
                <br />
                O objetivo principal do sistema Fedora é fornecer uma distribuição de software livre estável, confiável e atualizada, promovendo a inovação, 
                a segurança e o desempenho. O projeto busca impulsionar o desenvolvimento de tecnologias de código aberto e contribuir para o avanço do ecossistema de software livre.
                <br />
                Para mais informações, visite a 
                <Link href="https://fedoraproject.org/" target="_blank" className="text-dodgerblue-100"> página principal</Link>
              </p>
              <h1 className="text-2xl bold">Especificações Recomendadas:</h1>
              <ul>
                <li>4GB RAM</li>
                <li>20GB de Espaço em Disco</li>
                <li>CPU com 1GHz velocidade de clock</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
