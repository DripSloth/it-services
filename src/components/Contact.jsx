import React from "react";

const Contact = () => (
  <section className="py-20 bg-gradient-to-b from-gray-900 to-accent">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-850 rounded-2xl p-8 md:p-12 border border-primary/50 hover:border-secondary hover:shadow-glow transition-all duration-300 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8 text-center">
          Get In Touch
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-lg mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full p-4 bg-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-lg mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full p-4 bg-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 text-lg mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="How can we help you?"
              rows="5"
              className="w-full p-4 bg-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-lg font-semibold hover:scale-105 hover:shadow-glow transition-all animate-pulse-glow"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;