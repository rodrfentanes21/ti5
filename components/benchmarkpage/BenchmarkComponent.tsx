import React, { useState } from "react";
import Results from "./Results";

export default function BenchmarkComponent() {
  const [resultsShow, setResultsShow] = useState(false);
  const [inputValues, setInputValues] = useState({
    input1: "1",
    input2: "0",
    input3: "10",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const downloadFile = () => {
    window.location.href = "documentacao";
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setResultsShow(true);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-start items-center flex-col h-4/5 w-4/5 bg-slate-200 rounded-xl grow">
        <form
          onSubmit={handleSubmit}
          className="border flex flex-col justify-start py-20 items-center gap-2"
        >
          <h1 className="text-2xl">Benchmark</h1>
          <div className="flex flex-col">
            <label htmlFor="input1" className="mr-2">
              Memória RAM
            </label>
            <select
              id="input1"
              name="input1"
              value={inputValues.input1}
              onChange={handleChange}
              className="p-2 border rounded w-96"
            >
              <option value="1">1 GB</option>
              <option value="2">2 GB</option>
              <option value="4">4 GB</option>
              <option value="8">8 GB</option>
              <option value="16">16+ GB</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="input2" className="mr-2">
              CPU
            </label>
            <select
              id="input2"
              name="input2"
              value={inputValues.input2}
              onChange={handleChange}
              className="p-2 border rounded w-96"
            >
              <option value="0">0 a 1 GHZ</option>
              <option value="1">1 a 2 GHZ (1 incluso)</option>
              <option value="2">2 a 3 GHz (2 incluso)</option>
              <option value="3">3+ GHz (3 incluso)</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="input3" className="mr-2">
              Espaço em Disco
            </label>
            <select
              id="input3"
              name="input3"
              value={inputValues.input3}
              onChange={handleChange}
              className="p-2 border rounded w-96"
            >
              <option value="0">0 GB</option>
              <option value="10">10 GB</option>
              <option value="20">20 GB</option>
              <option value="30">30 GB</option>
              <option value="40">40 GB</option>
              <option value="50">50 GB</option>
              <option value="60">60 GB</option>
              <option value="70">70 GB</option>
              <option value="80">80 GB</option>
              <option value="90">90 GB</option>
              <option value="101">+ de 100 GB</option>
            </select>
          </div>
          <input
            type="submit"
            value="Calcular"
            className="w-28 h-8 text-xs lg:w-40 lg:h-12 lg:text-base bg-dodgerblue-100 transform ease-in-out transition duration-700 hover:bg-dodgerblue-300 grid place-items-center text-[#f7f7f7] rounded-xl uppercase mb-5"
          />
        </form>
        <Results resultsShow={resultsShow} inputValues={inputValues} />
      </div>
      <div className="grid place-items-center gap-2">
        <h2>
          Não sabe as especificações do seu PC? Baixe esse programa simples para
          conferir!
        </h2>
        <a
          className="w-28 h-8 text-xs lg:w-40 lg:h-12 lg:text-base bg-dodgerblue-100 transform ease-in-out transition duration-700 hover:bg-dodgerblue-300 grid place-items-center text-[#f7f7f7] rounded-xl uppercase mb-5"
          download
          href="teste.exe"
        >
          Download
        </a>
      </div>
    </div>
  );
}
