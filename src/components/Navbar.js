import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // New function to handle link clicks in mobile view
  const handleNavClick = () => {
    if (window.innerWidth < 768) { // md: breakpoint in Tailwind is 768px
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full  backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="bg-blue-600  text-white rounded-xl px-4 py-2 hover:opacity-95 duration-300 hover:scale-105 text-xl lg:text-2xl font-bold tracking-wide">
          KK Jha
        </span>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <RiCloseFill size={30} className="transition-all duration-300" />
          ) : (
            <RiMenu3Fill size={30} className="transition-all duration-300" />
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static w-full md:w-auto bg-[#171d32] md:bg-transparent left-0 md:left-auto top-16 md:top-0 py-4 md:py-0 text-center text-sm md:text-xl lg:text-2xl transition-all duration-300`}
        >
          <li>
            <a
              href="/"
              className="block text-white hover:opacity-95 hover:scale-105 transition-all p-2 md:p-0"
              onClick={handleNavClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-white hover:opacity-95 hover:scale-105 transition-all p-2 md:p-0"
              onClick={handleNavClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block text-white hover:opacity-95 hover:scale-105 transition-all p-2 md:p-0"
              onClick={handleNavClick}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-white hover:opacity-95 hover:scale-105 transition-all p-2 md:p-0"
              onClick={handleNavClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-white hover:opacity-95 hover:scale-105 transition-all p-2 md:p-0"
              onClick={handleNavClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;