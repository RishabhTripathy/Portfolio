import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";
import { Work } from "./Components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>

      <Skills/>
      <Projects/>
      <Work/>
      <Contact/>
      <SocialLinks />
    </div>
  );
}

export default App;
