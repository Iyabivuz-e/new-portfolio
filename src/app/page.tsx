import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Projects from "./components/projects/Project";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}
