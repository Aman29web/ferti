import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo2.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-orange-50 to-green-200 min-h-screen flex items-center justify-center py-20 overflow-hidden pl-1.5">
      {/* Optional Decorative Background */}
      <div className="absolute inset-0 bg-[url('/leaf-pattern.png')] bg-contain bg-repeat opacity-5 pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Logo */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <img
            src={logo}
            alt="Hemant Fertilizers Logo"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-8 border-[#0B3E2A] shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-green-900 leading-tight mb-6">
            Hemant Fertilizers
            <br />
            <span className="text-green-700">PVT. LTD.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-green-800 mb-4 max-w-2xl font-medium">
            Driving India's agricultural future with{" "}
            <span className="font-semibold text-green-900">
              pure organic farming solutions
            </span>
            . Trusted by farmers. Backed by nature.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-green-800 mb-4 max-w-2xl">
            With years of experience in sustainable agricultural practices, Hemant Fertilizers is committed to improving soil health, enhancing crop yields, and reducing dependency on harmful chemicals.
          </p>

          {/* <p className="text-base sm:text-lg md:text-xl text-green-800 mb-8 max-w-2xl">
            We believe in empowering farmers through education, support, and the highest quality bio-fertilizer products that are environmentally friendly and scientifically proven.
          </p> */}

          <a
            href="#contact"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-[#0B3E2A] text-white font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
