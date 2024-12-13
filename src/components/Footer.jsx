import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Yousaf</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in Pakistan specializing in Web and
              App development.
            </p>
          </div>
          <div className="flex-1 w-full ml-4"> {/* Added left margin here */}
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-3/4 md:w-1/2 p-1 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <div className="relative inline-flex items-center justify-center group">
                {/* Gradient background div */}
                <div
                  className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-green-400 
                    to-green-600 rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 
                    group-hover:duration-200 animate-tilt"
                ></div>
                {/* Button */}
                <button
                  type="submit"
                  className="relative z-10 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-r-lg text-sm font-semibold shadow-lg transition-all duration-300 focus:outline-none hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400">
            Made with ❤️ by Hassan &copy; {new Date().getFullYear()}
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.facebook.com/profile.php?id=100077995803632"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a href="https://x.com/HassanKhan6918" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/m-hassan-khan-ab05472b7/"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/HassanKhan012" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
