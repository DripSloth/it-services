import React from "react";

const Hero = () => (
  <header className="relative bg-gradient-to-br from-gray-900 to-accent text-white py-32 overflow-hidden">
    <div className="px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Brisbane's Premier IT Solutions
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Transform your business with cutting-edge technology solutions and expert support
      </p>
      <div className="flex justify-center space-x-4">
        <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-lg font-semibold hover:scale-105 hover:shadow-glow transition-all animate-pulse-glow">
          Get Started
        </button>
        <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl text-lg font-semibold hover:bg-primary/20 hover:shadow-glow transition-all animate-pulse-glow">
          Contact Us
        </button>
      </div>
    </div>
  </header>
);

export default Hero;