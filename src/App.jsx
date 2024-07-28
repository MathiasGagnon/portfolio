import './App.css';
import AboutMe from './sections/About me/AboutMe';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import SoftSkills from './sections/SoftSkills/SoftSkills';

function App() {
  return (
    <>
      <div className="main"></div>
      <Hero />
      <Projects />
      <Skills />
      <SoftSkills />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
