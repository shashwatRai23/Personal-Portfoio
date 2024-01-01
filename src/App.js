import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
