import React, { useState } from "react";

const services = [
  {
    icon: "fas fa-headset",
    title: "Remote Support Services",
    desc: "24/7 technical support and troubleshooting for your IT infrastructure",
    details: "Our remote support team is available around the clock to resolve any technical issues you may encounter. We provide fast and efficient solutions to minimize downtime and keep your business running smoothly."
  },
  {
    icon: "fas fa-code",
    title: "Software Development",
    desc: "Custom software solutions tailored to your business needs",
    details: "We specialize in creating custom software that aligns with your business goals. From web applications to mobile apps, our development team ensures high-quality, scalable, and secure solutions."
  },
  {
    icon: "fas fa-robot",
    title: "AI & Automation Solutions",
    desc: "Leverage the power of AI to streamline your operations and enhance efficiency",
    details: "Our AI and automation solutions help you automate repetitive tasks, analyze data, and make informed decisions. We implement cutting-edge technologies to optimize your business processes."
  },
  {
    icon: "fas fa-building",
    title: "Onsite Services",
    desc: "Local Brisbane support team available for physical IT solutions",
    details: "For issues that require hands-on attention, our onsite team is ready to assist. We provide hardware installation, network setup, and other physical IT services to ensure your infrastructure is in top shape."
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-accent">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-12">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-850 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:bg-accent hover:shadow-glow"
            >
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl shadow-glow">
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-lg">{service.desc}</p>
                  {expandedIndex === index && (
                    <p className="mt-2 text-gray-200 fade-in">{service.details}</p>
                  )}
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="mt-2 text-primary hover:text-secondary focus:outline-none animate-pulse-glow"
                  >
                    <i
                      className={`fas fa-chevron-${expandedIndex === index ? "up" : "down"} text-xl transition-transform duration-300`}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;