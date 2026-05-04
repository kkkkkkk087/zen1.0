import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  return (
    <motion.a
      href="#contact" // In a real app this would be a wa.me link
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:bg-[#1ebd57] transition-colors group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" className="group-hover:scale-110 transition-transform" />
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-40" />
    </motion.a>
  );
}
