import React from "react";
import Hero from "../../components/projectpage/Hero";
import Header from "../../components/mainpage/Header";
import MainSection from "../../components/projectpage/MainSection";
import ObjetivoSection from "../../components/projectpage/ObjetivoSection";
import MotivationSection from "../../components/projectpage/MotivationSection";
import ContactSection from "../../components/projectpage/ContactSection";

export default function projeto() {
  return (
    <>
      <Header altUrl={true} />
      <Hero />
      <MainSection />
      <MotivationSection />
      <ObjetivoSection />
      <ContactSection />
    </>
  );
}
