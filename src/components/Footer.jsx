import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-32 pb-16 px-6 bg-slate-950/50 border-t border-white/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mb-20 text-white"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="col-span-1 md:col-span-1"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-black italic text-sm">C</div>
            <span className="text-xl font-black tracking-tighter">CODERMAX</span>
          </div>
          <p className="text-slate-500 font-light leading-relaxed mb-10">
            Global HQ: Tech District, Silicon Valley <br />
            Strategic technical partnership for the modern enterprise.
          </p>
          <div className="flex gap-6">
            {[Linkedin, Github, Twitter].map((Icon, i) => (
              <motion.div key={i} whileHover={{ y: -5, color: '#22D3EE' }} className="text-slate-600 cursor-pointer transition-colors">
                <Icon size={22} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-300">Services</h4>
          <ul className="space-y-4 text-slate-500 font-light">
            {['Cloud Solutions', 'Cyber Defense', 'API Engineering', 'UX/UI Systems'].map(l => (
              <li key={l} className="hover:text-accent cursor-pointer transition-colors">{l}</li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-300">Company</h4>
          <ul className="space-y-4 text-slate-500 font-light">
            {['About Codermax', 'Case Studies', 'Career', 'Newsroom'].map(l => (
              <li key={l} className="hover:text-accent cursor-pointer transition-colors">{l}</li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-300">Get in Touch</h4>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-slate-500">
              <Mail size={18} className="text-accent" /> hello@codermax.tech
            </li>
            <li className="flex items-center gap-4 text-slate-500">
              <Phone size={18} className="text-accent" /> +1 (800) COD-ERMAX
            </li>
            <li className="flex items-center gap-4 text-slate-500">
              <MapPin size={18} className="text-accent" /> Global Operations
            </li>
          </ul>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-xs font-bold uppercase tracking-widest"
      >
        <p>© 2026 Codermax IT Services. All Rights Reserved.</p>
        <div className="flex gap-12">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </motion.div>
    </footer>
  );
}
