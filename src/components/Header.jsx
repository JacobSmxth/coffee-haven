import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md z-50">
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
        
        <nav className="flex gap-4">
          <ul className="flex gap-8 text-xl">
            {['Home', 'About', 'Menu', 'Contact'].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.a 
                  className="relative text-white hover:text-gold transition-colors duration-300 drop-shadow-md px-2 py-1 rounded-md"
                  href="#"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 8px rgba(255, 215, 0, 0.5)"
                  }}
                >
                  {item}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;