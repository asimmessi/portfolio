import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Works from "./components/Works"
import { Footer } from "./components/Footer"
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode" className="dark-mode-toggle">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Works/>}/>
          <Route path="/about-me" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        {/* <Info />
        <Skills />
        <Works />
        <About />
        <Contact /> */}
        <Footer/>
      </div>
    </>
  )
}

export default App
