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
              <h1 className="text-2xl bold">Garuda</h1>
              <p>
              O Garuda Linux é uma distribuição de software baseada em Linux que se destaca pela sua abordagem focada na velocidade, desempenho e estética visual. Com um ambiente de desktop personalizado, 
              atualizações contínuas e uma seleção abrangente de aplicativos pré-instalados, o Garuda Linux oferece aos usuários uma experiência completa e pronta para uso.
                <br />
                O objetivo principal do Garuda Linux é fornecer uma distribuição Linux completa, pronta para uso e altamente personalizada. Com um ambiente de desktop visualmente atraente, desempenho otimizado, uma seleção de software abrangente 
                e opções de personalização flexíveis, o Garuda Linux busca atender às necessidades e preferências dos usuários, oferecendo uma experiência completa e satisfatória.
                Para mais informações, visite a
                <br />
                <Link
                  href="https://garudalinux.org/downloads.html"
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
                <li>30GB de Espaço em Disco</li>
                <li>Sistema de 64 bits com 2 ghz de clock</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
