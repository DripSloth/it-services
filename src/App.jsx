import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App = () => (
  <div className="font-poppins bg-gray-900 min-h-screen w-full">
    <Hero />
    <Services />
    <Contact />
    <Footer />
  </div>
);

export default App;