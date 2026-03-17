import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const JOBS = [
  { title: "Senior React Engineer", type: "Full-Time", loc: "Remote / USA" },
  { title: "AI Solutions Architect", type: "Full-Time", loc: "Hybrid / London" },
  { title: "DevOps Specialist", type: "Contract", loc: "Remote" },
  { title: "Data Scientist", type: "Full-Time", loc: "USA" }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <PageHeader 
        badge="Join The Team"
        title={<>Build your <span className="text-accent">Global</span> Career</>}
        subtitle="Work with bleeding-edge technologies and help global enterprises lead in the digital era."
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-6 text-white">
          <h2 className="text-4xl font-black mb-12 tracking-tight">Open Positions</h2>
          {JOBS.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{job.title}</h3>
                <div className="flex items-center gap-4 text-slate-500 text-sm">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.loc}</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
