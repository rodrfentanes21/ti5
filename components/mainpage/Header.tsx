import React, { useState } from "react";
import Link from "next/link";
import HamburgerDisplay from "./HamburgerDisplay";
import SpecOSLogo from "../../public/logospecos-removebg.png";
import Image from "next/image";

interface headerProps {
  altUrl: boolean;
}

export default function Header(props: headerProps) {
  const [isNavMenu, setNavMenu] = useState(false);

  return props.altUrl ? (
    <header className="flex justify-between lg:justify-start h-16 items-center fixed w-screen lg:w-full bg-opacity-20 backdrop-blur-lg z-20">
      <div className="ml-5">
        <Image
          src={SpecOSLogo}
          alt="Logo"
          width={50}
          height={50}
          className="select-none"
        />
      </div>
      <nav className="grow hidden lg:flex justify-center gap-10">
        <Link
          href="/"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-28 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          Início
        </Link>
        <Link
          href="/projeto"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-28 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          O Projeto
        </Link>
        <Link
          href="/documentacao"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-28 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          SOs
        </Link>
        <Link
          href="/benchmark"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-28 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          Benchmark
        </Link>
      </nav>
      <button className="lg:hidden pr-5" onClick={() => setNavMenu(!isNavMenu)}>
        <svg
          className="fill-black"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
            fill="#1040e2"
          />
          <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
        </svg>
      </button>
      <HamburgerDisplay
        trigger={isNavMenu}
        setTrigger={setNavMenu}
        altUrl={props.altUrl}
      />
    </header>
  ) : (
    <header className="flex justify-between lg:justify-start h-16 items-center fixed w-screen lg:w-full bg-opacity-20 backdrop-blur-lg z-20">
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
      <nav className="grow hidden lg:flex justify-center gap-10">
        <Link
          href="#home"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-28 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          Início
        </Link>
        <Link
          href="#project"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-28 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          O Projeto
        </Link>
        <Link
          href="#so"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-28 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          SOs
        </Link>
        <Link
          href="#benchmark"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-28 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          Benchmark
        </Link>
      </nav>
      <button className="lg:hidden pr-5" onClick={() => setNavMenu(!isNavMenu)}>
        <svg
          className="fill-black"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
            fill="#1040e2"
          />
          <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
        </svg>
      </button>
      <HamburgerDisplay
        trigger={isNavMenu}
        setTrigger={setNavMenu}
        altUrl={props.altUrl}
      />
    </header>
  );
}
