import React from "react";
import Header from "../../../components/mainpage/Header";
import Link from "next/link";

export default function documentacao() {
  return (
    <>
      <Header altUrl={true} />
      <div className="w-screen h-screen flex justify-center items-center p-20">
        <div className="flex justify-start items-center w-full h-full  rounded-2xl bg-slate-200">
          <ul className="w-48 h-full flex flex-col justify-start items-center border border-[#f7f7f7] border-r-slate-400">
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300 rounded-tl-xl">
              <Link className="w-full h-full grid place-items-center" href="/documentacao/">Introdução</Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link className="w-full h-full grid place-items-center" href="/documentacao/arch">Arch</Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link className="w-full h-full grid place-items-center" href="/documentacao/debian">Debian</Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link className="w-full h-full grid place-items-center" href="/documentacao/fedora">Fedora</Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link className="w-full h-full grid place-items-center" href="/documentacao/garuda">Garuda</Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link className="w-full h-full grid place-items-center" href="/documentacao/mint">Mint</Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link className="w-full h-full grid place-items-center" href="/documentacao/ubuntu">Ubuntu</Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link className="w-full h-full grid place-items-center" href="/documentacao/windows10">Windows 10</Link>
            </li>
            <li className="min-w-full h-12 grid place-items-center border border-[#f7f7f7] border-b-slate-400 hover:bg-slate-300">
              <Link className="w-full h-full grid place-items-center" href="/documentacao/windows11">Windows 11</Link>
            </li>
          </ul>
          <div className="grow h-full flex justify-center items-center">
            garuda
          </div>
        </div>
      </div>
    </>
  );
}
