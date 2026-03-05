import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Cars from "./components/Cars";
import About from "./components/About";
import Contact from "./components/Contact";
import Booking from "./components/Booking";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Cars />
      <Booking/>
      <About />
      <Contact />
   
     
    </>
  );
}

export default App;