import About from './components/About';
import Contact from './components/Contact';
import Educations from './components/Educations';
import Experience from './components/Experience';
import Home from "./components/Home";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Educations />
      <Contact />
    </div>
  );
}

export default App;
