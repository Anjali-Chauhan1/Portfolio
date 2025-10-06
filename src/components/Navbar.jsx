import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-6 md:px-12 py-4 fixed w-full z-50 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-green-700">
        Anjali Chauhan
      </h1>

      <div className="flex items-center space-x-2 md:space-x-4">
        <a
          href="#hero"
          className="text-base md:text-lg font-medium px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-base md:text-lg font-medium px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-base md:text-lg font-medium px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
