import React from "react";
import Hero from "../../components/projectpage/Hero";
import Header from "../../components/mainpage/Header";
import MainSection from "../../components/projectpage/MainSection";
import ObjetivoSection from "../../components/projectpage/ObjetivoSection";
import SecondSection from "../../components/projectpage/SecondSection";

export default function projeto() {
  return (
    <>
      <Header altUrl={true} />
      <Hero />
      <MainSection />
      <SecondSection />
      <ObjetivoSection />
    </>
  );
}
