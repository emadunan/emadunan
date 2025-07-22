import React from "react";
import Bio from "../components/home/Bio";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Bio />
      <Skills />
      <Projects />
    </div>
  );
};

export default HomePage;
