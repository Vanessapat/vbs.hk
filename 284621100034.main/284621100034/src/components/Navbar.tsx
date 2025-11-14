import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigationLinks = [
    { name: '首页', href: '/' },
     { name: '关于我们', href: '/about' },
    { name: '航运板块', href: '/services#third-service' },
     { name: '主营业务', href: '/about' },
    { name: '联系我们', href: '/contact' }
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-white text-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-2xl font-bold text-blue-700 flex items-center"
            >
              <i className="fa-solid fa-building mr-2"></i>
              <span>VBS GROUP</span>
            </motion.div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-1 py-2 font-medium text-gray-700 hover:text-blue-700 transition-colors duration-200"
              >
                {link.name}
                <motion.span
                  className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-700 transition-all duration-200"
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <i className="fa-solid fa-times text-xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-xl"></i>
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-2 rounded text-gray-700 hover:bg-blue-50"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}