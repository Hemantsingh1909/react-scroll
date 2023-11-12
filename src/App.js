import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Demo from "./components/Demo/Demo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Testimonials/>
    <Demo/>
    <Footer/>
    </>
  );
}

export default App;
