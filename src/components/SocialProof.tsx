import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Google Reviews */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start shrink-0"
        >
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-gray-900 font-bold text-2xl mb-1">4.9 / 5.0</p>
          <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">Based on 200+ Google Reviews</p>
        </motion.div>

        {/* Divider for mobile */}
        <div className="h-px w-full bg-gray-200 md:hidden" />

        {/* Developer Logos */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center md:items-end w-full md:w-auto"
        >
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">Trusted by residents of leading developers</p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text blocks as stand-ins for logos */}
            <span className="font-serif text-2xl font-bold tracking-widest text-[#1a1a1a]">EMAAR</span>
            <span className="font-sans text-xl font-black tracking-tighter text-[#1a1a1a]">ALDAR</span>
            <span className="font-serif text-xl italic font-bold tracking-wider text-[#1a1a1a]">DAMAC</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
