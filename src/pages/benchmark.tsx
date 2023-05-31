import React from "react";
import Header from "../../components/mainpage/Header";
import BenchmarkComponent from "../../components/benchmarkpage/BenchmarkComponent";

export default function benchmark() {
  return (
    <>
      <Header altUrl={true} />
      <div className="w-screen h-screen grid place-items-center">
        <BenchmarkComponent />
      </div>
    </>
  );
}
