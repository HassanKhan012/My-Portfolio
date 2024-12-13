import React from 'react'
import HeroImage from '../assets/my-face.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
<img 
  src={HeroImage} 
  alt="Your Image" 
  className="mx-auto mb-8 w-48 h-48 rounded-full object-contain transform 
  transition-transform duration-300 hover:scale-105" 
/>

        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500'>
  Mohammad Hassan Khan
</span>


            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
        <div className="relative inline-flex items-center justify-center group">
  {/* Gradient Animated Background */}
  <div
    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-green-400 
      to-green-600 rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 
      group-hover:duration-200 animate-tilt"
  ></div>
  {/* Connect Me Button */}
  <button
    className="relative z-10 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full 
      text-sm font-semibold shadow-lg transition-all duration-300 focus:outline-none hover:scale-105"
  >
    Connect Me
  </button>
</div>

<div className="relative inline-flex items-center justify-center group mt-4">
  {/* Gradient Animated Background */}
  <div
    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-red-400 
      to-red-600 rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 
      group-hover:duration-200 animate-tilt"
  ></div>
  {/* Resume Button */}
  <button
    className="relative z-10 bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-full 
      text-sm font-semibold shadow-lg transition-all duration-300 focus:outline-none hover:scale-105"
  >
    Resume
  </button>
</div>



        </div>

    </div>
  )
}

export default Hero