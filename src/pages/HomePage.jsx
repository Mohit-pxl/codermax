import React, { Suspense, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ServiceCard } from '../components/ServiceCard';
import { Section } from '../components/Section';
import { ArrowRight, Zap, Layers, Shield, Database, ExternalLink, Globe, Cpu, Quote, MessageSquare, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';



const HERO_TITLES = [
  "Digital Excellence Redefined.",
  "Innovation Engineered for Scale.",
  "Future-Ready IT Ecosystems.",
  "Your Vision, Our Engineering."
];

const FlipCard = ({ industry, index }) => {
  const [isFlipped, React_useState] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="relative h-[400px] w-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => React_useState(!isFlipped)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div 
          className="absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden border border-white/5 group"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={industry.img} alt={industry.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-30 group-hover:opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="w-12 h-12 shrink-0 bg-accent rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
              <industry.icon size={20} />
            </div>
            <h3 className="text-2xl font-black text-white tracking-tighter">{industry.title}</h3>
            <div className="mt-4 flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
              LEARN MORE <ArrowRight size={14} />
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 backface-hidden p-8 bg-accent/10 border border-accent/20 rounded-[2.5rem] flex flex-col items-center justify-center text-center w-full h-full"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-16 h-16 shrink-0 bg-[#020617] rounded-2xl flex items-center justify-center text-accent mb-6 shadow-xl shadow-accent/20">
            <industry.icon size={32} />
          </div>
          <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">{industry.title}</h3>
          <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 px-4">Engineered to drive transformation in the {industry.title} sector.</p>
          <button className="text-white bg-accent/20 hover:bg-accent hover:text-[#020617] px-6 py-3 border border-transparent hover:border-accent/50 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
            Go Back
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

function HeroContent() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_TITLES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-[100vh] text-white overflow-hidden pt-24 pb-10">
      {/* Background Layers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        {/* Parallax Image Background */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 1000], [0, 400]) }}
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 opacity-60"
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        </motion.div>

        {/* Dynamic Glows */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent/8 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/8 blur-[150px] rounded-full" />
      </motion.div>

      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-4"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-left"
        >
          <span className="px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.3em] inline-block mb-8 backdrop-blur-sm">
            Innovation Engineered
          </span>
          <div className="h-[200px] md:h-[250px] mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9]"
              >
                {HERO_TITLES[index].split(' ').map((word, i) => (
                  <span key={i} className={word === "Excellence" || word === "Innovation" || word === "Future-Ready" || word === "Vision," ? "text-accent" : "text-white"}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>
          <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-12 font-light leading-relaxed">
            We architect high-performance digital ecosystems that empower global enterprises to lead, scale, and transform.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Link to="/contact" className="btn-primary px-10 py-5 text-lg flex items-center gap-3 group shadow-2xl decoration-none">
              Start Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="btn-secondary px-10 py-5 text-lg backdrop-blur-md decoration-none">
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* The 3D element area has been removed as per core layout simplification */}
      </motion.div>
    </section>
  );
}

const STRATEGIC_APPROACH = [
  {
    title: "Agile Development",
    category: "Methodology",
    icon: Zap,
    desc: "Rapid, iterative development cycles that ensure your product evolves with market demands and user feedback."
  },
  {
    title: "Technical Excellence",
    category: "Quality",
    icon: Shield,
    desc: "Clean, maintainable codebases built with the latest industry standards and rigorous security protocols."
  }
];

const INDUSTRIES = [
  { title: "Healthcare", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=60&w=800", icon: Globe },
  { title: "Fintech", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=60&w=800", icon: Shield },
  { title: "E-Commerce", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=60&w=800", icon: Layers },
  { title: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=60&w=800", icon: Cpu },
];

const VALUE_PROPOSITIONS = [
  {
    name: "Strategic Partnership",
    role: "Our Commitment",
    content: "We don't just build software; we become your technical partners, aligning our engineering with your business goals.",
    initials: "SP"
  },
  {
    name: "Scalable Solutions",
    role: "Our Guarantee",
    content: "Every system we architect is designed for horizontal scalability, ensuring your infrastructure grows with your success.",
    initials: "SS"
  }
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <HeroContent />

      {/* Technology Stack Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] block mb-4">Stack</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Built with <span className="text-accent">Precision.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">We utilize industry-standard, high-performance technologies to build resilient digital systems.</p>
            </div>
            <div className="flex-[1.5] grid grid-cols-2 md:grid-cols-3 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               {["REACT", "NODE.JS", "PYTHON", "AWS", "DOCKER", "KUBERNETES"].map((m) => (
                 <div key={m} className="h-16 flex items-center justify-center font-black text-white text-xl border border-white/5 rounded-xl hover:bg-white/5 cursor-default transition-colors">{m}</div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Expertise Section */}
      <Section>
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black uppercase tracking-[0.5em] text-[10px]"
          >
            Sectors We Empower
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mt-6 tracking-tight text-white mb-6"
          >
            Industries We <span className="text-accent">Serve.</span>
          </motion.h2>
          <div className="w-24 h-[3px] bg-accent-hover mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <FlipCard key={i} industry={ind} index={i} />
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-transparent to-cyan-950/20">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black uppercase tracking-[0.5em] text-[10px]"
          >
            Our Core Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mt-6 tracking-tight text-white mb-6"
          >
            Advanced <span className="text-accent">Solutions</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-24 h-[3px] bg-accent-hover mx-auto rounded-full origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard
            icon={Layers}
            delay={0.1}
            title="Full-Stack Engineering"
            desc="End-to-end development of modern web and mobile applications using state-of-the-art architectures."
          />
          <ServiceCard
            icon={Shield}
            delay={0.2}
            title="Enterprise Security"
            desc="Hardening your digital perimeter with Zero-Trust protocols and AI-driven threat intelligence."
          />
          <ServiceCard
            icon={Database}
            delay={0.3}
            title="Data & AI"
            desc="Transforming raw data into strategic assets through custom ML models and real-time analytics."
          />
        </div>
      </Section>

      {/* Strategic Approach Section */}
      <Section>
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] block mb-4">How We Work</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">Strategic <span className="text-accent">Approach.</span></h2>
          </div>
          <Link to="/services" className="hidden md:flex items-center gap-3 text-white font-bold group decoration-none mb-4">
            Our Services <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {STRATEGIC_APPROACH.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative h-[400px] rounded-[3rem] overflow-hidden bg-white/5 border border-white/5 p-12 flex flex-col justify-end"
            >
              <div className="absolute top-12 left-12 w-16 h-16 shrink-0 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <div className="relative z-10">
                <span className="px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] font-black uppercase tracking-widest inline-block mb-6 backdrop-blur-md">
                  {item.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 group-hover:text-accent transition-colors tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Value Proposition Section */}
      <Section className="bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] block mb-4">Our Commitment</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">What We <span className="text-accent">Deliver.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VALUE_PROPOSITIONS.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-glass p-12 rounded-[3.5rem] border border-white/10 relative group"
            >
              <Quote className="text-accent-hover mb-8 w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-white text-2xl font-medium leading-relaxed mb-10 italic">"{prop.content}"</p>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 shrink-0 rounded-full border-2 border-accent flex items-center justify-center text-accent font-black text-xl bg-accent/10">
                  {prop.initials}
                </div>
                <div>
                  <div className="text-white font-black text-xl">{prop.name}</div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">{prop.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>


      <section className="py-24 relative overflow-hidden group max-w-6xl mx-auto rounded-[2rem] my-24 bg-glass border border-white/10 shadow-[0_0_100px_rgba(34,211,238,0.1)]">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
          className="text-[6rem] md:text-[10rem] font-black text-white/5 whitespace-nowrap leading-none absolute top-1/2 -translate-y-1/2 select-none"
        >
          CODERMAX INNOVATION GROWTH SCALE PERFORMANCE
        </motion.div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-white">
          {[
            { val: "150+", label: "Successful Deployments" },
            { val: "99.9%", label: "System Uptime" },
            { val: "24/7", label: "Expert Support" },
            { val: "20+", label: "Tech Partners" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-md"
            >
              <div className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.val}</div>
              <div className="text-accent uppercase tracking-widest text-[9px] font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <Section>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight tracking-tight"
            >
              Unlocking <br />
              <span className="text-accent italic">Technological</span><br />
              Potential.
            </motion.h2>
            <div className="space-y-10">
              {[
                { t: "Strategic Architecture", d: "Highly decoupled systems designed for horizontal scalability." },
                { t: "Clean Code Philosophy", d: "Maintainable, tested, and optimized codebases that endure." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-lg">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.t}</h4>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex-1 relative w-full mt-10 md:mt-0"
          >
            <div className="absolute -inset-10 bg-accent/20 blur-[100px] rounded-full" />
            <div className="bg-glass p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/10 relative z-10 shadow-2xl overflow-hidden group">
               <div className="w-full aspect-square md:aspect-video rounded-xl md:rounded-[2rem] bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-1000 border border-white/5">
                 <Cpu className="text-accent w-16 h-16 md:w-24 md:h-24 opacity-20 group-hover:opacity-40 transition-opacity" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6 md:p-10">
                 <div>
                    <div className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1 md:mb-2">Our Workflow</div>
                    <div className="text-xl md:text-2xl font-black text-white leading-tight drop-shadow-md">Innovation Powered by Data.</div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <section className="py-24 px-6 max-w-4xl mx-auto rounded-[2rem] text-center my-24 relative overflow-hidden group bg-glass border border-accent/20 shadow-[0_0_100px_rgba(34,211,238,0.15)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] border border-accent/20 rounded-full group-hover:border-accent/30 transition-colors pointer-events-none"
        />
        <div className="relative z-10 flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            Start Your Journey
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Ready to accelerate?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed"
          >
            Join 50+ industry leaders who trust Codermax for mission-critical IT infrastructure and high-speed delivery.
          </motion.p>
          <Link to="/contact" className="btn-primary px-10 py-4 text-[15px] shadow-2xl decoration-none">
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
