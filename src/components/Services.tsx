import { motion } from 'motion/react';
import { Settings, Droplets, PenTool, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Comprehensive Cleaning',
    description: 'Deep tile scrubbing, vacuuming, and surface skimming for pristine water quality.',
    icon: <Droplets className="w-8 h-8 text-[#06b6d4]" />
  },
  {
    title: 'Chemical Balancing',
    description: 'Precise monitoring and adjustment of pH, chlorine, and alkalinity levels.',
    icon: <ShieldCheck className="w-8 h-8 text-[#10b981]" />
  },
  {
    title: 'Equipment Maintenance',
    description: 'Inspection and servicing of pumps, filters, and heating systems to prevent breakdowns.',
    icon: <Settings className="w-8 h-8 text-gray-700" />
  },
  {
    title: 'Repairs & Upgrades',
    description: 'Expert repairs resolving leaks and integrating modern energy-efficient pool technology.',
    icon: <PenTool className="w-8 h-8 text-[#d4af37]" />
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#06b6d4]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#10b981]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
          >
            Uncompromising Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-sans leading-relaxed tracking-wide text-lg"
          >
            We go beyond surface cleaning. Our holistic approach ensures your pool remains a flawless oasis year-round.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#06b6d4] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
