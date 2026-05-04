import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2850&q=80")' }}
      >
        <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />
      </div>

      {/* Animated Sub-gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-animate opacity-40 mix-blend-overlay bg-gradient-to-tr from-[#06b6d4]/40 via-transparent to-[#10b981]/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-12 md:mt-0">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-6"
        >
          Premier Pool Maintenance Abu Dhabi
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[0.9] tracking-tight mb-10 text-balance"
        >
          PRISTINE POOLS.<br/>PREMIER CARE.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center shadow-2xl"
        >
          <a 
            href="#contact" 
            className="btn-glow-hover flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105"
          >
            Book Now
            <span className="bg-[#d4af37] text-white rounded-full p-1.5 flex items-center justify-center">
               <ChevronRight size={16} strokeWidth={3} />
            </span>
          </a>
          
          <a 
            href="#services" 
            className="text-white/80 hover:text-white uppercase tracking-widest text-sm font-medium transition-colors border-b border-white/30 hover:border-white pb-1"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />
    </section>
  );
}
