import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Users, Target, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <PageHeader 
        badge="Who We Are"
        title={<>Engineering the <span className="text-accent">Future</span></>}
        subtitle="Codermax is a global leader in digital transformation, helping businesses scale through innovative technology and strategic engineering."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: Users, 
              title: "Our Mission", 
              desc: "To empower enterprises with high-performance digital ecosystems that drive sustainable growth." 
            },
            { 
              icon: Target, 
              title: "Our Vision", 
              desc: "To be the most trusted technical partner for global leaders, setting benchmarks in innovation." 
            },
            { 
              icon: Rocket, 
              title: "Our Values", 
              desc: "Excellence, Transparency, and a relentless focus on client success and technical precision." 
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-10 bg-white/5 border border-white/5 rounded-3xl"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
