import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ServiceCard({ icon: Icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full perspective-[1000px]"
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: delay * 2 }}
        whileHover={{
          scale: 1.05,
          rotateX: 10,
          rotateY: -10,
          boxShadow: "0 20px 50px -10px rgba(34, 211, 238, 0.5), 0 0 30px rgba(34, 211, 238, 0.4)"
        }}
        className="group h-full p-10 bg-glass/60 backdrop-blur-xl rounded-[2.5rem] border border-white/5 hover:border-accent/40 transition-colors duration-500 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        <div className="w-16 h-16 shrink-0 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-accent/50 relative z-10">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-accent transition-colors tracking-tight relative z-10">{title}</h3>
        <p className="text-slate-400 mb-8 font-light leading-relaxed text-lg group-hover:text-slate-300 transition-colors relative z-10">{desc}</p>
        <div className="flex items-center gap-3 text-accent font-bold group-hover:gap-5 transition-all cursor-pointer relative z-10">
          <span className="text-sm uppercase tracking-widest">Learn More</span>
          <ArrowRight size={16} />
        </div>
      </motion.div>
    </motion.div>
  );
}
