import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Ship, GraduationCap, Home, HardHat, Car, Smartphone } from 'lucide-react';

const ALL_INDUSTRIES = [
  { icon: Heart, title: "Healthcare", desc: "Next-gen healthtech solutions for patient care and data management." },
  { icon: Briefcase, title: "Fintech", desc: "Secure and innovative financial systems for the digital economy." },
  { icon: Ship, title: "Logistics", desc: "Advanced supply chain and tracking systems for global trade." },
  { icon: GraduationCap, title: "Education", desc: "Interactive e-learning platforms and institutional management." },
  { icon: Home, title: "Real Estate", desc: "Proptech solutions for smart property management and sales." },
  { icon: HardHat, title: "Construction", desc: "Digital infrastructure for large-scale project tracking." },
  { icon: Car, title: "Automotive", desc: "Smart vehicle systems and manufacturing automation." },
  { icon: Smartphone, title: "Hi-Tech", desc: "Bleeding-edge software for technology-driven enterprises." }
];

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
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                <industry.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
