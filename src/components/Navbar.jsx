import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50 shadow-lg font-sans">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <Typography variant="h5" component="a" href="#home" className="hover:text-gray-400 transition duration-300">
            Hassan
          </Typography>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Typography variant="body1" component="a" href="#home" className="hover:text-gray-400 transition duration-300">
            Home
          </Typography>
          <Typography variant="body1" component="a" href="#about" className="hover:text-gray-400 transition duration-300">
            About Me
          </Typography>
          <Typography variant="body1" component="a" href="#service" className="hover:text-gray-400 transition duration-300">
            Resume
          </Typography>
          <Typography variant="body1" component="a" href="#project" className="hover:text-gray-400 transition duration-300">
            Projects
          </Typography>
          <Typography variant="body1" component="a" href="#contact" className="hover:text-gray-400 transition duration-300">
            Contact
          </Typography>
        </div>

        {/* Smaller Animated Connect Button */}
        <div className="hidden md:inline-flex relative group">
          {/* Animated Background */}
          <div
            className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-green-400 
              to-green-600 rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 
              group-hover:duration-200 animate-tilt"
          ></div>
          {/* Button */}
          <a
            href="#contact"
            title="Connect Me"
            className="relative z-10 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full 
              text-sm font-semibold shadow-lg transition-all duration-300 focus:outline-none hover:scale-105"
            role="button"
          >
            Connect Me
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 flex flex-col items-center space-y-4 py-6 text-lg font-semibold">
          <Typography variant="body1" component="a" href="#home" className="hover:text-gray-400 transition duration-300">
            Home
          </Typography>
          <Typography variant="body1" component="a" href="#about" className="hover:text-gray-400 transition duration-300">
            About Me
          </Typography>
          <Typography variant="body1" component="a" href="#service" className="hover:text-gray-400 transition duration-300">
            Resume
          </Typography>
          <Typography variant="body1" component="a" href="#project" className="hover:text-gray-400 transition duration-300">
            Projects
          </Typography>
          <Typography variant="body1" component="a" href="#contact" className="hover:text-gray-400 transition duration-300">
            Contact
          </Typography>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
