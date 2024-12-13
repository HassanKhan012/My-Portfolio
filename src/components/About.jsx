import React from "react";
import AboutImage from "../assets/my-pic.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="relative group">
            {/* Image with hover zoom effect */}
            <img
              src={AboutImage}
              alt="About me"
              className="w-72 h-80 rounded object-cover mb-8 md:mb-0 transform transition-all duration-500 group-hover:scale-110"
            />
            {/* Optional: Dark overlay that appears when zoomed */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50 z-0 group-hover:opacity-100 opacity-0 transition-opacity duration-300"
            ></div>
          </div>
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a skilled full-stack developer with expertise in HTML, CSS, JavaScript, TypeScript, React.js, and Next.js. I specialize in building modern, responsive web applications with a focus on clean code and seamless user experiences. With experience in popular UI frameworks and React libraries, I deliver efficient and scalable solutions that meet project goals.
            </p>
            <div className="space-y-4">
              {/* HTML & CSS Progress */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-purple-900 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm">90%</span>
              </div>

              {/* React JS Progress */}
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-purple-900 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm">80%</span>
              </div>

              {/* Next JS Progress */}
              <div className="flex items-center">
                <label htmlFor="nextjs" className="w-2/12">
                  Next JS
                </label>
                <div className="grow bg-purple-900 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm">65%</span>
              </div>

              {/* TypeScript Progress */}
              <div className="flex items-center">
                <label htmlFor="typescript" className="w-2/12">
                  TypeScript
                </label>
                <div className="grow bg-purple-900 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm">60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
