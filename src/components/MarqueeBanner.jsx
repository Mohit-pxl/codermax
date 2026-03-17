import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function MarqueeBanner() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="w-full py-8 bg-accent/10 border-y border-white/5 overflow-hidden flex whitespace-nowrap backdrop-blur-sm relative z-20">
      <motion.div
        className="flex gap-24 items-center pl-24"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-3xl font-black text-white/50 italic tracking-widest">CODERMAX</span>
            <span className="text-xl text-accent font-bold">•</span>
            <span className="text-3xl font-black text-white/50 italic tracking-widest">INNOVATION</span>
            <span className="text-xl text-accent font-bold">•</span>
            <span className="text-3xl font-black text-white/50 italic tracking-widest">PERFORMANCE</span>
            <span className="text-xl text-accent font-bold">•</span>
            <span className="text-3xl font-black text-white/50 italic tracking-widest">SCALE</span>
            <span className="text-xl text-accent font-bold">•</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
