import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import AuraButton from './AuraButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'History', path: '/history' },
    { name: 'Leaders', path: '/leaders' },
    { name: 'Sports', path: '/sports' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pune Info', path: '/pune-info' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="bg-emerald-600 w-8 h-8 rounded flex items-center justify-center text-xs font-bold text-white">K</span>
          <span className="font-serif tracking-wide">KSO PUNE</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`hover:text-white transition-colors ${location.pathname === link.path ? 'text-white' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <AuraButton variant="secondary" className="!px-4 !py-2 !text-xs">
            <Heart size={14} />
            Donate
          </AuraButton>
        </div>
        <button className="md:hidden text-white hover:text-emerald-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className={`text-zinc-400 hover:text-white py-2 ${location.pathname === link.path ? 'text-white' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <AuraButton variant="secondary" className="w-full !py-3 !text-xs">
              <Heart size={16} />
              Donate
            </AuraButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
