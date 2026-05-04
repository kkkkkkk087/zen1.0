import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className={`font-serif text-2xl font-bold tracking-wider ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
          EDEN<span className={isScrolled ? 'text-brand-turquoise' : 'text-white/80'}>STAR</span>
        </a>
        
        <nav className="hidden md:flex space-x-8 items-center">
          {['Services', 'Reviews', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm tracking-widest uppercase font-medium transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden md:inline-flex px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
            isScrolled
              ? 'bg-gray-900 text-white hover:bg-gray-800'
              : 'bg-white text-gray-900 hover:bg-gray-100'
          }`}
        >
          Call Us
        </a>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {['Services', 'Reviews', 'FAQ'].map((item) => (
             <a
             key={item}
             href={`#${item.toLowerCase()}`}
             className="text-gray-800 font-medium tracking-wider uppercase text-sm"
             onClick={() => setMobileMenuOpen(false)}
           >
             {item}
           </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
