import React from "react";
import { FaLinkedin, FaGithub, FaInstagram , FaTwitter, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/portfolioImg.jpg"; // your profile image

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-green-50 to-white px-8 md:px-16"
    >
      
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800">
          <span className="block"> Hi There,</span>
          <span className="block mt-6">
            {" "}
            I'm
            <span className="text-green-700 "> Anjali Chauhan</span>
          </span>
        </h1>
        <p className="text-xl md:text-3xl mt-2 text-gray-700">
          Frontend Developer | Tech Explorer | Innovator
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 mt-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold hover:from-emerald-700 hover:to-green-800 shadow-lg hover:shadow-green-500/50 transition-transform hover:scale-105"
        >
          Contact Me
        </a>
        <div className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/anjali-chauhan-2aba50319/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-green-700 transition-colors "
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Anjali-Chauhan1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-green-700 transition-colors "
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/anja1i310/ "
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-green-700 transition-colors "
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:anjalichauhan1036@gmail.com"
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-green-700 transition-colors "
          >
            <FaEnvelope />
          </a>
           <a
            href="https://x.com/anjal1_tweets"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-green-700 transition-colors "
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="w-64 h-64 md:w-100 md:h-100 rounded-full overflow-hidden shadow-2xl border-4 border-green-500 hover:scale-110 transform transition duration-300">
          <img
            src={profileImg}
            alt="Anjali Chauhan"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
