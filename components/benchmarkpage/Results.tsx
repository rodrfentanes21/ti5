import React from "react";

const infosOS = [
  {
    name: "Debian",
    ram: 1,
    memoria: 10,
    cpu: 1,
  },
  {
    name: "Arch",
    ram: 2,
    memoria: 10,
    cpu: 1,
  },
  {
    name: "Mint",
    ram: 4,
    memoria: 100,
    cpu: 2,
  },
  {
    name: "Ubuntu",
    ram: 4,
    memoria: 25,
    cpu: 2,
  },
  {
    name: "Windows10",
    ram: 2,
    memoria: 20,
    cpu: 1,
  },
  {
    name: "Windows11",
    ram: 4,
    memoria: 64,
    cpu: 1,
  },
  {
    name: "Garuda",
    ram: 4,
    memoria: 30,
    cpu: 2,
  },
  {
    name: "Fedora",
    ram: 4,
    memoria: 20,
    cpu: 1,
  },
];

export default function Results(props: any) {
  const ram = props.inputValues.input1;
  const cpu = props.inputValues.input2;
  const storage = props.inputValues.input3;
  console.log(ram + " ->" + storage + " ->" + cpu);

  const resultados = () => {
    const lowerElements = infosOS.filter((info) => {
      return info.ram <= ram && info.memoria <= storage && info.cpu <= cpu;
    });

    if (lowerElements.length === 0) {
      return false;
    }

    return (
      <ul className="grid place-items-center py-1">
        {lowerElements.map((element, index) => (
          <li key={index}>{element.name}</li>
        ))}
      </ul>
    );
  };

  if (!props.resultsShow) {
    return null;
  }
  return (
    <div className="w-96 h-96">
      {resultados() ? (
        <div className="w-full h-full">
          <h3 className="text-lg">Seu pc consegue rodar os seguintes SOs:</h3>
          <br />
          {resultados()}
        </div>
      ) : (
        <p>Seu PC não consegue rodar nenhum dos SOs documentados em nosso site 😭</p>
      )}
    </div>
  );
}
