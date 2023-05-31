import React from "react";

// aqui

const infosOS = [
    {
        name: "debian",
        ram: 1,
        memoria: 1,
        cpu: 1,
    },
    {
        name: "garuda",
        ram: 1,
        memoria: 1,
        cpu: 1,
    },
    {
        name: "fedora",
        ram: 1,
        memoria: 1,
        cpu: 1,
    },
];
    


export default function BenchmarkComponent() {
  const downloadFile = () => {
    // Create a dummy file to download
    const fileContent = "This is the content of the file.";
    const fileName = "example.txt";
    const fileBlob = new Blob([fileContent], { type: "text/plain" });
    const fileUrl = URL.createObjectURL(fileBlob);

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    // Simulate a click on the link to start the download
    link.click();

    // Clean up the temporary link and object URL
    URL.revokeObjectURL(fileUrl);
  };
  return (
    <div className="flex justify-start items-center flex-col h-4/5 w-4/5 bg-slate-200 rounded-xl">
      <form className="border flex flex-col justify-start py-20 items-center gap-2">
        <div className="flex flex-col">
          <label className="self-start" htmlFor="cu1">
            Memória Ram
          </label>
          <input type="text" className="w-96 rounded-xl" name="" id="" placeholder="cu" />
        </div>
        <div className="flex flex-col">
          <label className="self-start" htmlFor="cu2">
            Velocidade do Processador
          </label>
          <input type="text" className="w-96 rounded-xl" name="" id="" placeholder="cu" />
        </div>
        <div className="flex flex-col">
          <label className="self-start" htmlFor="cu3">
            Memória de Disco Disponível
          </label>
          <input type="text" className="w-96 rounded-xl" name="" id="" placeholder="cu" />
        </div>
        <button className="w-28 h-8 text-xs lg:w-40 lg:h-12 lg:text-base bg-dodgerblue-100 transform ease-in-out transition duration-700 hover:bg-dodgerblue-300 grid place-items-center text-[#f7f7f7] rounded-xl uppercase mb-5">
          Calcular
        </button>
      </form>
      <div className="grid place-items-center gap-2">
        <h2>Não sabe as especificações do seu PC? Baixe esse executável para conferir!</h2>
        <button
          className="w-28 h-8 text-xs lg:w-40 lg:h-12 lg:text-base bg-dodgerblue-100 transform ease-in-out transition duration-700 hover:bg-dodgerblue-300 grid place-items-center text-[#f7f7f7] rounded-xl uppercase mb-5"
          onClick={downloadFile}
        >
          Download
        </button>
      </div>
    </div>
  );
}
