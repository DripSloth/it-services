module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4", // cyan-500
        secondary: "#ec4899", // pink-500
        accent: "#9333ea", // purple-600
        "gray-850": "#1a1e24", // Custom darker gray for contrast
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        glow: "0 0 15px rgba(6, 182, 212, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "pulse-glow": "pulseGlow 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};