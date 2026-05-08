import React from 'react';
import { motion } from 'motion/react';
import { FEATURES } from '@/src/constants';
import { BookOpen, Leaf, Activity, Video } from 'lucide-react';

const iconMap = {
  'book-open': BookOpen,
  'leaf': Leaf,
  'activity': Activity,
  'video': Video,
};

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-forest-dark text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold block">Redefining Excellence</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
              Uncompromising <span className="gold-gradient italic">Standards</span> In Every Detail
            </h2>
            <div className="space-y-8">
              <p className="text-cream/50 text-lg leading-relaxed max-w-lg">
                We believe that premium output requires premium input. From our proprietary organic feed mix to real-time health biometrics, we leave nothing to chance.
              </p>
              <div className="flex gap-8">
                <div className="space-y-2">
                  <span className="block text-4xl font-serif font-bold text-gold tracking-tighter">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-cream/30 font-bold">Organic Feed</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="space-y-2">
                  <span className="block text-4xl font-serif font-bold text-gold tracking-tighter">24/7</span>
                  <span className="text-[10px] uppercase tracking-widest text-cream/30 font-bold">Vet Monitoring</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-depth border border-white/5 p-10 rounded-[40px] group hover:border-gold/30 transition-all"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-forest-dark transition-all duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4">{feature.title}</h3>
                  <p className="text-cream/40 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
