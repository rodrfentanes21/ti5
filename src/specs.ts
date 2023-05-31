import { execSync } from "child_process";

// comando que lista informações sobre a placa de vídeo
const commandGPU = "wmic path win32_videocontroller get name /value";

// comando que lista informações sobre o processador
const commandCPU = "wmic cpu get name /value";

// comando que lista informações sobre a memória RAM
const commandRAM = "wmic ComputerSystem get TotalPhysicalMemory";

// comando que lista informações sobre o disco rígido
const commandHD = "wmic diskdrive get size";

// executa os comandos e captura a saída
const outputGPU: string = execSync(commandGPU).toString().trim();
const outputCPU: string = execSync(commandCPU).toString().trim();
const outputRAM: string = execSync(commandRAM).toString().trim();
const outputHD: string = execSync(commandHD).toString().trim();

// converte o tamanho da memória RAM em GB
const memSizeBytes: number = parseInt(outputRAM.replace(/\D/g, ''));
const memSizeGB: number = memSizeBytes / 1073741824;

// converte o tamanho do disco rígido em GB
const hdSizeBytes: number = parseInt(outputHD.replace(/\D/g, ''));
const hdSizeGB: number = hdSizeBytes / 1073741824;

// imprime as informações na tela
console.log("Placa de vídeo:", outputGPU.replace("Name=", "").trim());
console.log("Processador:", outputCPU.replace("Name=", "").trim());
console.log("Memória RAM:", Math.round(memSizeGB), "GB");
console.log("Tamanho do disco rígido:", Math.round(hdSizeGB), "GB");
