import Hero from "@/components/home/Hero";
import Bio from "@/components/home/Bio";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import MainCarousel from "@/components/home/MainCarousel";
import GraduationCertificate from "@/components/home/GraduationCertificate";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bio />
      <Skills />
      <Projects />
      <MainCarousel />
      <GraduationCertificate />
    </div>
  );
}
