import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Farm Tour', href: '#tour' },
    { name: 'Livestock', href: '#livestock' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex items-center justify-between glass">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 border-2 border-gold flex items-center justify-center rotate-45">
          <span className="-rotate-45 font-bold text-gold text-xl font-serif">V</span>
        </div>
        <span className="font-serif text-2xl font-bold tracking-widest uppercase hidden sm:block">
          VERDIAN <span className="text-gold">ESTATES</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-widest uppercase opacity-80">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:flex px-6 py-2 border border-gold text-gold text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-white transition-all">
          Get a Quote
        </button>

        <button 
          className="md:hidden text-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-full left-0 right-0 mt-2 mx-6 glass rounded-2xl p-8 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif font-bold tracking-widest uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-4 bg-gold text-white text-xs font-bold tracking-widest uppercase">
            Get a Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
};
