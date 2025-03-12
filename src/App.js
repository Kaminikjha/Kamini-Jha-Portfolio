import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Expirence";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
  <Navbar/>
  <Home/>
  <About/>
  <Experience/>
  <Project/>
  <Contact/>
    </div>
  );
}

export default App;
