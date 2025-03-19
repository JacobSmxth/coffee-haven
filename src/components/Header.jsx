import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md z-[100]">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <motion.span 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              className="w-16 hover:rotate-12 transition-transform duration-300" 
              src="/logo.png" 
              alt="logo" 
              whileHover={{ scale: 1.05 }}
            />
            <motion.p 
              className="text-2xl font-bold text-white drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Coffee Haven
            </motion.p>
          </motion.span>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4">
            <ul className="flex gap-8 text-xl">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Link to={item.path}>
                    <motion.span 
                      className={`relative text-white hover:text-gold transition-colors duration-300 drop-shadow-md px-2 py-1 rounded-md block ${
                        location.pathname === item.path ? 'text-gold' : ''
                      }`}
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: "0 0 8px rgba(255, 215, 0, 0.5)"
                      }}
                    >
                      {item.name}
                      <motion.span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                          location.pathname === item.path ? 'w-full' : 'w-0'
                        }`}
                        whileHover={{ width: '100%' }}
                      />
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[9999] md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white p-2 z-[10000]"
              aria-label="Close menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="block w-full h-0.5 bg-white rotate-45" />
                <span className="block w-full h-0.5 bg-white -rotate-45 absolute" />
              </div>
            </button>

            <nav className="h-screen w-screen flex items-center justify-center">
              <ul className="flex flex-col items-center gap-8 text-2xl">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to={item.path}>
                      <motion.span 
                        className={`text-white hover:text-gold transition-colors duration-300 ${
                          location.pathname === item.path ? 'text-gold' : ''
                        }`}
                        whileHover={{ 
                          scale: 1.1,
                          textShadow: "0 0 8px rgba(255, 215, 0, 0.5)"
                        }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;