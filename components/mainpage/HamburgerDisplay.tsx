import Link from "next/link";
import React from "react";
import Image from "next/image";
import SpecOSLogo from "../../public/logospecos-removebg.png";

interface hamburgerProps {
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  altUrl: boolean;
}

export default function HamburgerDisplay(props: hamburgerProps) {
  return props.trigger ? (
    props.altUrl ? (
      <div className="z-50 w-full h-screen bg-[#f7f7f7] fixed top-0 left-0 flex flex-col align-middle items-center gap-6">
        <div className="w-[100%] z-50 mx-auto bg-transparent flex flex-row absolute top-0 justify-between lg:justify-center items-center align-middle py-5 h-16">
          <div className="ml-5">
            <Image
              src={SpecOSLogo}
              alt="Site Main Logo"
              width={50}
              height={50}
              className="select-none"
              priority
            />
          </div>
          <button className="pr-5" onClick={() => props.setTrigger(false)}>
            <svg
              className="fill-black"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-center w-screen h-screen items-center gap-20">
          <Link
            onClick={() => props.setTrigger(false)}
            href="/"
            scroll={false}
            className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
          >
            Início
          </Link>
          <Link
            onClick={() => props.setTrigger(false)}
            href="/projeto"
            scroll={false}
            className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
          >
            O Projeto
          </Link>
          <Link
            onClick={() => props.setTrigger(false)}
            href="/documentacao"
            scroll={false}
            className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
          >
            SOs
          </Link>
          <Link
            onClick={() => props.setTrigger(false)}
            href="/benchmark"
            scroll={false}
            className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
          >
            Benchmark
          </Link>
        </div>
      </div>
    ) : (
      <div className="z-50 w-full h-screen bg-[#f7f7f7] fixed top-0 left-0 flex flex-col align-middle items-center gap-6">
        <div className="w-[100%] z-50 mx-auto bg-transparent flex flex-row absolute top-0 justify-between lg:justify-center items-center align-middle py-5 h-16">
          <div className="ml-5">
            <Image
              src={SpecOSLogo}
              alt="Logo"
              width={50}
              height={50}
              className="select-none"
            />
          </div>
          <button className="pr-5" onClick={() => props.setTrigger(false)}>
            <svg
              className="fill-black"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-center w-screen h-screen items-center gap-20">
          <Link
            onClick={() => props.setTrigger(false)}
            href="#home"
            scroll={false}
            className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
          >
            Início
          </Link>
          <Link
            onClick={() => props.setTrigger(false)}
            href="#project"
            scroll={false}
            className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
          >
            O Projeto
          </Link>
          <Link
            onClick={() => props.setTrigger(false)}
            href="#so"
            scroll={false}
            className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
          >
            SOs
          </Link>
          <Link
            onClick={() => props.setTrigger(false)}
            href="#benchmark"
            scroll={false}
            className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
          >
            Benchmark
          </Link>
        </div>
      </div>
    )
  ) : (
    <></>
  );
}
