import React from "react";

const Footer = () => (
  <footer className="bg-gradient-to-br from-gray-900 to-accent text-white py-12">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            FlexTech Solutions
          </h3>
          <p className="text-gray-300">
            Empowering businesses with innovative IT solutions since 2025.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-primary">Quick Links</h4>
          <nav className="space-y-2">
            <a href="#services" className="text-gray-300 hover:text-secondary transition-colors animate-pulse-glow block">
              Services
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-secondary transition-colors animate-pulse-glow block">
              Pricing
            </a>
            <a href="#contact" className="text-gray-300 hover:text-secondary transition-colors animate-pulse-glow block">
              Contact
            </a>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-primary">Contact Us</h4>
          <div className="text-gray-300 space-y-2">
            <p>Email: info@flextech.com</p>
            <p>Phone: +61 7 1234 5678</p>
            <p>Address: 123 Tech St, Brisbane, QLD</p>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-primary/50 text-center">
        <p className="text-gray-300">
          © 2025 FlexTech Solutions. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;