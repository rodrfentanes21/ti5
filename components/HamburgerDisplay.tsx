import Link from "next/link";
import React from "react";

export default function HamburgerDisplay(props: any) {
  return props.trigger ? (
    <div className="z-50 w-full h-screen bg-[#f7f7f7] fixed top-0 left-0 flex flex-col align-middle items-center gap-6">
      <div className="w-[100%] z-50 mx-auto bg-transparent flex flex-row absolute top-0 justify-between lg:justify-center items-center align-middle py-5">
        <a href="/home" className=" select-none flex items-center pl-5">
          logo do site
        </a>
        <button className="pr-5" onClick={() => props.setTrigger(false)}>
          <svg
            className="fill-black"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-center w-screen h-screen items-center gap-20">
        <Link
          onClick={() => props.setTrigger(false)}
          href="#"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          topico
        </Link>
        <Link
          onClick={() => props.setTrigger(false)}
          href="#"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          topico
        </Link>
        <Link
          onClick={() => props.setTrigger(false)}
          href="#"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          topico
        </Link>
        <Link
          onClick={() => props.setTrigger(false)}
          href="#"
          scroll={false}
          className="font-semibold grid place-items-center rounded-lg w-24 h-10 transform ease-in-out transition duration-700 hover:bg-slate-200"
        >
          topico
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
}
