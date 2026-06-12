import ScrollProgress from "./components/ScrollProgress";
import SocialSidebar from "./components/SocialSidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import SkillsMarquee from "./components/SkillsMarquee";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollProgress />
      <SocialSidebar />
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <SkillsMarquee />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
