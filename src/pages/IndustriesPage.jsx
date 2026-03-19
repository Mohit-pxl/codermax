import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Ship, GraduationCap, Home, HardHat, Car, Smartphone, ArrowRight } from 'lucide-react';

const ALL_INDUSTRIES = [
  { icon: Heart, title: "Healthcare", desc: "Next-gen healthtech solutions for patient care and data management." },
  { icon: Briefcase, title: "Fintech", desc: "Secure and innovative financial systems for the digital economy." },
  { icon: Ship, title: "Logistics", desc: "Advanced supply chain and tracking systems for global trade." },
  { icon: GraduationCap, title: "Education", desc: "Interactive e-learning platforms and institutional management." },
  { icon: Home, title: "Real Estate", desc: "Proptech solutions for smart property management and sales." },
  { icon: HardHat, title: "Construction", desc: "Digital infrastructure for large-scale operations tracking." },
  { icon: Car, title: "Automotive", desc: "Smart vehicle systems and manufacturing automation." },
  { icon: Smartphone, title: "Hi-Tech", desc: "Bleeding-edge software for technology-driven enterprises." }
];

const FlipCard = ({ industry, index }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="relative h-[300px] w-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div 
          className="absolute inset-0 backface-hidden p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-accent/30 transition-all flex flex-col items-center justify-center text-center w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
            <industry.icon size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
          <div className="text-accent text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            Learn More <ArrowRight size={16} />
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 backface-hidden p-8 bg-accent/10 border border-accent/20 rounded-[2rem] flex flex-col items-center justify-center text-center w-full h-full"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold text-white mb-4">{industry.title} Solutions</h3>
          <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">{industry.desc}</p>
          <button className="text-white bg-accent/20 hover:bg-accent hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors">
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <PageHeader 
        badge="Domain Expertise"
        title={<>Tailored for your <span className="text-accent">Industry</span></>}
        subtitle="Deep vertical expertise to help you navigate industry-specific challenges with technical excellence."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {ALL_INDUSTRIES.map((industry, i) => (
            <FlipCard key={i} industry={industry} index={i} />
          ))}
        </div>
      </Section>
    </div>
  );
}
