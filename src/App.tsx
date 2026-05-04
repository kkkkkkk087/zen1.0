/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import FAQ from './components/FAQ';
import WhatsAppCTA from './components/WhatsAppCTA';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <FAQ />
      
      {/* Simple Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wider text-white mb-2">
              EDEN<span className="text-[#06b6d4]">STAR</span>
            </span>
            <span className="text-sm">Premier Pool Maintenance Abu Dhabi</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} EdenStar Pools. All rights reserved.
          </div>
        </div>
      </footer>

      <WhatsAppCTA />
    </div>
  );
}
