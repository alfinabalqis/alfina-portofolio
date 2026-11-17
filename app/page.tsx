import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OtherWork from "@/components/OtherWork";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OtherWork />
        <Education />
        <Contact />
      </main>
    </>
  );
}
