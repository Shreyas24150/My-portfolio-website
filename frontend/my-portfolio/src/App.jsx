import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Media from "./components/Media";

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      <Navbar />
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
      <section id="media"><Media /></section>
    </div>
  );
}

export default App;
