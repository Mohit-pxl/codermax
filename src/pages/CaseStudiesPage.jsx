import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const METHODOLOGIES = [
  {
    title: "Discovery & Blueprinting",
    focus: "Phase 1 / Analysis",
    desc: "We dive deep into your business requirements, existing architecture, and technical challenges to architect a scalable roadmap.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Agile Development Cycles",
    focus: "Phase 2 / Execution",
    desc: "Iterative sprints focused on delivering functional components fast, allowing for continuous integration and immediate feedback.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Testing & Deployment",
    focus: "Phase 3 / Delivery",
    desc: "Rigorous automated testing and secure deployment pipelines ensure a zero-downtime, flawless transition to production.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=800"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <PageHeader 
        badge="How We Work"
        title={<>Our Proven <span className="text-accent">Methodology</span></>}
        subtitle="A strategic, engineering-first approach to delivering high-performance digital ecosystems for modern enterprises."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {METHODOLOGIES.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/5"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={method.img} 
                  alt={method.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
              </div>
              <div className="p-10">
                <span className="text-accent font-bold text-xs uppercase tracking-widest mb-3 block">{method.focus}</span>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{method.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8">{method.desc}</p>
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all cursor-pointer">
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
