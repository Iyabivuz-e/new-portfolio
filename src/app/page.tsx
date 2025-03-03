import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
    </div>
  );
}
