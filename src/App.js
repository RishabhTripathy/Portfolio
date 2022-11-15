import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />


      <About/>
      <Skills/>
      <Contact/>
      <SocialLinks />
    </div>
  );
}

export default App;
