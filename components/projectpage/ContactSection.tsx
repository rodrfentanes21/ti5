import React from "react";

export default function ContactSection() {
  return (
    <div className="flex flex-col justify-start items-center py-32 w-full">
      <div className="text-center">
        <h2 className="text-dodgerblue-100 text-4xl pb-2">Entre em Contato</h2>
        <p>
          Alguma duvida ou sugestão? Nos mande um email preenchendo o form
          abaixo
        </p>
      </div>
      <form className="grid py-10 gap-2 grow w-4/5 flex-wrap">
        <label htmlFor="name">Nome:</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
          type="text"
          name="name"
          placeholder="Nome"
        />
        <label htmlFor="email">Email:</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
          type="text"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="body">Conteúdo:</label>
        <textarea
          id="message"
          rows={10}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Conteúdo da mensagem"
        />
        <input type="submit" value="Enviar" className="w-28 h-8 text-xs lg:w-40 lg:h-12 lg:text-base bg-dodgerblue-100 transform ease-in-out transition duration-700 hover:bg-dodgerblue-300 grid place-items-center text-[#f7f7f7] rounded-xl uppercase mb-5"/>
      </form>
    </div>
  );
}
