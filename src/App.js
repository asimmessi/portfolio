import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Works from "./components/Works"
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
        <Hero />
        <Info />
        <Skills />
        <Works />
        <About />
        <Contact />
      </div>
    </>
  )
}

export default App
