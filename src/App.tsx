/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { LivestockGallery } from './components/LivestockGallery';
import { Features } from './components/Features';
import { ArrowDown, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-forest-dark text-cream font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-24 overflow-hidden bg-forest-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-transparent to-forest-dark" />
        </div>

        <Hero3D />

        <div className="relative z-10 max-w-7xl mx-auto px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-gold/10 text-gold rounded-full text-[10px] font-bold tracking-[0.3em] uppercase mb-8 border border-gold/20">
              Redefining Quality Farming
            </span>
            <h1 className="font-serif text-7xl md:text-8xl font-bold leading-tight mb-8">
              Premium <br/><span className="gold-gradient italic">Livestock</span> Excellence.
            </h1>
            <p className="text-xl text-cream/60 mb-12 max-w-md leading-relaxed font-light">
              We provide superior breeds raised in an organic environment, ensuring world-class health standards and sustainable agricultural practices.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button className="bg-gold text-white px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-gold-light transition-all">
                Explore Gallery
              </button>
              <div className="flex items-center gap-4 cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold">Virtual Tour</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-green/30"
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-12 overflow-hidden bg-forest-mid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[20px] overflow-hidden rotate-2 card-depth p-1">
                <img 
                  src="https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&q=80&w=1000" 
                  alt="Farmer" 
                  className="w-full h-full object-cover rounded-[18px] grayscale contrast-125"
                />
              </div>
              <div className="absolute -bottom-12 -right-6 w-72 glass p-10 border border-white/5 card-depth rounded-xl -rotate-3 hidden md:block">
                <div className="serif text-6xl font-bold text-gold mb-2 gold-gradient">30+</div>
                <h4 className="font-serif font-bold text-xl mb-4">Years of Heritage</h4>
                <p className="text-[10px] uppercase tracking-widest text-cream/40 leading-relaxed font-bold">Pioneering standard cattle breeding in the region since 1994.</p>
              </div>
            </motion.div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
                   Where <span className="gold-gradient italic">Nature</span> Meets Precision.
                </h2>
                <div className="space-y-6 text-cream/50 text-lg leading-relaxed font-light">
                  <p>
                    Our mission is simple: to produce the healthiest, most genetically superior cattle while maintaining a carbon-negative footprint. Every cow in our herd is part of a larger ecosystem of sustainability.
                  </p>
                  <p>
                    We utilize satellite imagery for pasture management and AI-driven biometrics to track health, ensuring that "Premium" is not just a label, but a verifiable fact.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-xl text-gold">DNA Verified</h4>
                  <p className="text-sm text-cream/40 leading-relaxed">Complete traceability for every breed lineage from birth to delivery.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-xl text-gold">Ethical Care</h4>
                  <p className="text-sm text-cream/40 leading-relaxed">Stress-free open ranges designed for natural movement and growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <LivestockGallery />

      {/* Footer */}
      <footer id="contact" className="bg-forest-dark pt-32 pb-16 px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24 flex-wrap gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
              <div className="space-y-4">
                <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold">Organic Feed</h4>
                <p className="text-xs text-cream/40 leading-relaxed">100% natural grazing in the lush highlands of Veridian Estates.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold">Health Track</h4>
                <p className="text-xs text-cream/40 leading-relaxed">Biometric monitoring for every individual herd member, 24/7 care.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold">Sustainability</h4>
                <p className="text-xs text-cream/40 leading-relaxed">Carbon neutral farming through advanced regenerative practices.</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-serif gold-gradient font-bold mb-2">+1 800 VERIDIAN</div>
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-30 font-bold">North Highlands, Sector 4, Grazing Fields</div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 border border-gold flex items-center justify-center rotate-45">
                <span className="-rotate-45 font-bold text-gold text-xs font-serif">V</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-cream/30 font-bold uppercase">© 2026 Veridian Estates. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] uppercase tracking-widest text-cream/30 hover:text-gold transition-colors font-bold">Instagram</a>
              <a href="#" className="text-[10px] uppercase tracking-widest text-cream/30 hover:text-gold transition-colors font-bold">Facebook</a>
              <a href="#" className="text-[10px] uppercase tracking-widest text-cream/30 hover:text-gold transition-colors font-bold">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
