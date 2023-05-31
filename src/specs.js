"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
// comando que lista informações sobre a placa de vídeo
var commandGPU = "wmic path win32_videocontroller get name /value";
// comando que lista informações sobre o processador
var commandCPU = "wmic cpu get name /value";
// comando que lista informações sobre a memória RAM
var commandRAM = "wmic ComputerSystem get TotalPhysicalMemory";
// comando que lista informações sobre o disco rígido
var commandHD = "wmic diskdrive get size";
// executa os comandos e captura a saída
var outputGPU = (0, child_process_1.execSync)(commandGPU).toString().trim();
var outputCPU = (0, child_process_1.execSync)(commandCPU).toString().trim();
var outputRAM = (0, child_process_1.execSync)(commandRAM).toString().trim();
var outputHD = (0, child_process_1.execSync)(commandHD).toString().trim();
// converte o tamanho da memória RAM em GB
var memSizeBytes = parseInt(outputRAM.replace(/\D/g, ''));
var memSizeGB = memSizeBytes / 1073741824;
// converte o tamanho do disco rígido em GB
var hdSizeBytes = parseInt(outputHD.replace(/\D/g, ''));
var hdSizeGB = hdSizeBytes / 1073741824;
// imprime as informações na tela
console.log("Placa de vídeo:", outputGPU.replace("Name=", "").trim());
console.log("Processador:", outputCPU.replace("Name=", "").trim());
console.log("Memória RAM:", Math.round(memSizeGB), "GB");
console.log("Tamanho do disco rígido:", Math.round(hdSizeGB), "GB");
