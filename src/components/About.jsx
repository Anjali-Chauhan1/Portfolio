import React from "react";

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-16 bg-gradient-to-b from-green-50 to-white"
    >
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center mb-12 md:mb-0">
        <div className="relative w-72 h-72 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-green-500 hover:scale-105 transform transition duration-500">
          <img
            src="https://verpex.com/assets/uploads/images/blog/What-is-a-Hero-Section-on-a-Website.webp?v=1682332661"
            alt="About Me"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute top-0 left-0 w-full h-full bg-green-500/10 pointer-events-none"></div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left md:ml-16 space-y-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          I am a passionate <span className="font-semibold text-green-600">Frontend Developer</span> with a love for building modern, responsive web applications. 
          I specialize in <span className="font-semibold text-green-600">JavaScript, React, Tailwind CSS</span>. 
          I thrive on turning ideas into reality with clean, efficient code and innovative solutions.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
          {["React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "C"].map((skill, index) => (
            <span
              key={index}
              className="px-5 py-3 bg-green-600 text-white rounded-full hover:scale-110 transform transition duration-300 cursor-default shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
