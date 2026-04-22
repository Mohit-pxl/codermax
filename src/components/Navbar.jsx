import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when location changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Services", to: "/services" },
    { title: "Industries", to: "/industries" },
    { title: "Methodologies", to: "/case-studies" },
    { title: "Careers", to: "/careers" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-6 py-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-glass rounded-[2rem] px-8 py-2 border border-white/5 shadow-2xl relative">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer no-underline">
          <img src="/logo_high_res_no_bg.png" alt="Codermax Logo" className="h-10 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-md" />
          <span className="text-2xl font-black tracking-tighter text-white">CODERMAX</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`text-sm font-medium transition-colors no-underline ${
                location.pathname === link.to ? 'text-accent' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.title}
            </Link>
          ))}
          <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-xl shadow-accent/20 active:scale-95 no-underline ml-4">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-400 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full mt-4 lg:hidden z-50 overflow-hidden"
            >
              <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block py-3 px-6 rounded-xl transition-all no-underline font-medium ${
                      location.pathname === link.to 
                        ? 'bg-accent/20 text-accent border border-accent/20' 
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent/20 no-underline"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
