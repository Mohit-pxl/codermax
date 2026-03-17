import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const CASE_STUDIES = [
  {
    title: "Legacy to Cloud Transition",
    industry: "Manufacturing",
    desc: "Migrated a monolithic legacy system to a modern microservices architecture on AWS, increasing performance by 300%.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Global Supply Chain AI",
    industry: "Logistics",
    desc: "Developed an AI-driven predictive analytics platform for a global logistics provider to optimize route planning.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "DeFi Payment Gateway",
    industry: "Fintech",
    desc: "Built a secure, automated crypto payment gateway for decentralized finance applications with zero-trust security.",
    img: "https://images.unsplash.com/photo-1621761191319-c6fb6200404a?auto=format&fit=crop&q=80&w=800"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <PageHeader 
        badge="Success Stories"
        title={<>Impact through <span className="text-accent">Innovation</span></>}
        subtitle="Explore how we have helped global enterprises transform their digital presence and operations."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/5"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={study.img} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>
              <div className="p-10">
                <span className="text-accent font-bold text-xs uppercase tracking-widest mb-3 block">{study.industry}</span>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{study.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8">{study.desc}</p>
                <div className="flex items-center gap-2 text-white font-bold group/link cursor-pointer">
                  Learn More <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
