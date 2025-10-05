import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 fixed w-full bg-white shadow-md z-50">
      <h1 className="text-2xl mx-3 text-gray-800 font-bold">Anjali Chauhan</h1>
      <div className="space-x-6 flex items-center">
        <a href="/" className=" text-xl mx-4 hover:text-green-600 transition">Home</a>
        <a href="#about" className="text-xl mx-4 hover:text-green-600 transition">About</a>
        <a href="#contact" className="text-xl mx-4 hover:text-green-600 transition">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
