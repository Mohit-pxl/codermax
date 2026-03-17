import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';
import { Layers, Shield, Database, Smartphone, Globe, Cpu, Cloud, Settings } from 'lucide-react';

const ALL_SERVICES = [
  { icon: Layers, title: "Custom Software", desc: "Tailored software solutions designed to solve complex business challenges with precision." },
  { icon: Smartphone, title: "Mobile Development", desc: "High-performance iOS and Android applications with seamless user experiences." },
  { icon: Globe, title: "Web Development", desc: "Scalable, secure, and lightning-fast web applications built on modern frameworks." },
  { icon: Cloud, title: "Cloud Services", desc: "Expert cloud migration, architecture, and management for maximum scalability." },
  { icon: Settings, title: "DevOps Solutions", desc: "Streamlined development cycles and automated infrastructure for faster delivery." },
  { icon: Cpu, title: "AI & Machine Learning", desc: "Innovative AI-driven solutions that transform data into actionable intelligence." },
  { icon: Shield, title: "Cyber Security", desc: "Zero-Trust protocols and advanced threat detection to protect your digital assets." },
  { icon: Database, title: "Data Analytics", desc: "Real-time insights and data engineering to drive smarter business decisions." }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <PageHeader 
        badge="Our Capabilities"
        title={<>Specialized <span className="text-accent">Services</span></>}
        subtitle="We offer a comprehensive suite of IT services designed to help enterprises innovate and lead in the digital era."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {ALL_SERVICES.map((service, i) => (
            <ServiceCard 
              key={i}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              delay={i * 0.1}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
