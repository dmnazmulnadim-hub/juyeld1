import React from 'react';
import { motion } from 'motion/react';
import { LIVESTOCK } from '@/src/constants';
import { ChevronRight } from 'lucide-react';

export const LivestockGallery = () => {
  return (
    <section id="livestock" className="py-24 px-6 bg-forest-mid">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Premium <span className="gold-gradient italic">Livestock</span> Catalog
            </h2>
            <p className="text-cream/60 text-lg">
              Each animal in our facility is hand-selected and nurtured under strict biological standards to ensure the highest quality genetics and health.
            </p>
          </div>
          <button className="flex items-center gap-2 text-gold font-bold tracking-widest uppercase text-xs group">
            View Full Catalog
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {LIVESTOCK.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl card-depth border border-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-gold font-bold text-[10px] tracking-widest uppercase">
                      {item.breed}
                    </span>
                    <h3 className="text-2xl font-serif font-bold mt-1">{item.name}</h3>
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold border border-white/10">
                    {item.age}
                  </div>
                </div>
                <p className="text-cream/40 text-xs mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[10px] uppercase font-medium text-cream/30 tracking-widest">Weight: <span className="text-gold font-bold">{item.weight}</span></span>
                  <button className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
