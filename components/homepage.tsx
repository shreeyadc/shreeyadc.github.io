"use client";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="homepage-container relative overflow-hidden">
      {/* Image Background */}
      <div className="homepage-image-background" />

      {/* Main Section Content */}
      <div
        className="home-section min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12 relative z-10"
        id="home"
      >
        {/* Left Side */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left gap-6 w-full max-w-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-extrabold mb-2 text-white text-shadow-glow">
            Hey! I'm Shreeya
          </h1>
          <p className="text-lg text-gray-400">
            I'm a Systems Design Engineering student at the University of Waterloo passionate about leveraging tech for social good. I'm interested software development, product management, and emerging tech! In my free time, you'll find me working on new projects, practicing dance, biking, or painting. Feel free to reach out, I'd love to chat or discuss opportunities!
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="/pdf/Shreeya-Champaneri-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300 hover:scale-108 transition-transform duration-300"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-2 rounded-full hover:bg-neutral-900 hover:scale-108 transition-transform duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 0.96 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/shreeya.jpg"
            alt="Profile Picture"
            className="profile-image w-72 h-72 rounded-full border-8 border-gray-600 shadow-xl transform transition duration-500 hover:scale-110 cursor-pointer object-cover cursor-heart"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
