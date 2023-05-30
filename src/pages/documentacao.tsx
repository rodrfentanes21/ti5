import React from "react";
import Header from "../../components/mainpage/Header";
import DocsNavBar from "../../components/documentationpage/DocsNavBar";

export default function documentacao() {
  return (
    <>
      <Header altUrl={true} />
      <div className="w-screen h-screen flex justify-center items-center p-20">
        <div className="flex justify-start items-center w-full h-full  rounded-2xl bg-slate-200">
          <DocsNavBar />
          <div className="grow h-full flex flex-col justify-start py-10 gap-2 items-center">
            <div className="self-center w-4/5 h-4/5 flex flex-col gap-3 py-3 item-center justify-start">
              <h1 className="text-2xl bold">
                Bem Vindo(a) à nossa Documentação!
              </h1>
              <p>
                Nossa plataforma tem como objetivo sintetizar informações
                disponíveis na internet em um só lugar, assim facilitando a
                pesquisa sobre sistemas operacionais para o usuário médio.
              </p>
              <h1 className="text-2xl bold">Introdução</h1>
              <p className="w-[80%]">
                Nessa documentação, nosso objetivo é sintetizar informações
                gerais e expor qualidades e limitações de diversos sistemas
                operacionais. 
                <br />  
                Para acessar informações sobre um SO específico,
                basta utilizar a barra de navegação à esquerda e selecionar o
                sistema desejado, e caso queira retornar para esta página, basta
                clicar em "Introdução"!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
