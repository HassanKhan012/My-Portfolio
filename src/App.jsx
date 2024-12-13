import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { motion } from 'framer-motion';

function App() {
  // Staggered animation for smoother effects
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between child animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // About section animation (fade-in, slide-up)
  const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Projects section animation (staggered)
  const projectsVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="show" variants={containerVariants}>
      {/* Navbar with slide-down effect */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Navbar />
      </motion.div>

      {/* Hero Section with zoom-in effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Hero />
      </motion.div>

      {/* About Section with fade-in and slide-up effect */}
      <motion.div
        variants={aboutVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}  // Animation triggers once when section enters the viewport
      >
        <About />
      </motion.div>

      {/* Projects Section with staggered animations */}
      <motion.div
        variants={projectsVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}  // Ensures animation only triggers once
      >
        <Projects />
      </motion.div>

      {/* Contact Section with slide-up effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
}

export default App;
