import React from "react";
import Header from "../../../components/mainpage/Header";
import DocsNavBar from "../../../components/documentationpage/DocsNavBar";

export default function documentacao() {
  return (
    <>
      <Header altUrl={true} />
      <div className="w-screen h-screen flex justify-center items-center p-20">
        <div className="flex justify-start items-center w-full h-full  rounded-2xl bg-slate-200">
        <DocsNavBar />
          <div className="grow h-full flex justify-center items-center">
            mint
          </div>
        </div>
      </div>
    </>
  );
}
