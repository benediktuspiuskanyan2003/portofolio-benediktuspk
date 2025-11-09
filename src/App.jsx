import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About"; 
import MySkills from "./components/Myskills.jsx";
import Footer from "./components/Footer";

function App() {
  // Efek scroll untuk navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-glass");
      if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MySkills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
