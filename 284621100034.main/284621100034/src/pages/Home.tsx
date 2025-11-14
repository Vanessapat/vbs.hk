import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { useTheme } from '../hooks/useTheme';

export default function Home() {
  // 使用原始颜色方案
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to top button */}
      <motion.a
        href="#"
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-lg z-40 hover:bg-blue-800 transition-all duration-300"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </motion.a>
    </div>
  );
}