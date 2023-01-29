import React from "react";
import "./App.css";
import About from "./components/container/About/About";
import Contact from "./components/container/Contact/Contact";
import Footer from "./components/container/Footer/Footer";
import Home from "./components/container/Home/Home";
import Skill from "./components/container/Skill/Skill";
import Experience from "./components/container/Experience/Experience";
import Navbar from "./components/Navbar/Navbar";
import Favicon from "react-favicon";

const App = () => {
  return (
    <div>
      {/* <Favicon url={.} /> */}
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
