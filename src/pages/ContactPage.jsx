import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Send, User, Mail, Building2, MessageSquare, Briefcase, DollarSign, Globe, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const INTERESTS = [
  "Custom Software Development",
  "AI & Machine Learning",
  "Cloud Solutions",
  "Cyber Security",
  "Enterprise Security",
  "Data & AI",
  "Mobile App Development",
  "Other"
];

const BUDGETS = [
  "< $20,000",
  "$20,000 - $100,000",
  "$100,000 - $250,000",
  "> $250,000",
  "Non-disclosure"
];

const INDUSTRIES = [
  "Healthcare",
  "Fintech",
  "E-commerce",
  "Education",
  "Real Estate",
  "Manufacturing",
  "Technology",
  "Other"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    interest: '',
    budget: '',
    industry: '',
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Check if any credentials are still placeholders
      const isConfigured = 
        serviceId && serviceId !== 'your_service_id' &&
        templateId && templateId !== 'your_template_id' &&
        publicKey && publicKey !== 'your_public_key';

      if (!isConfigured) {
        throw new Error('EmailJS credentials are not configured. Please update your .env file with real values from EmailJS dashboard.');
      }





      const detailedMessage = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Interest: ${formData.interest}
Budget: ${formData.budget}
Industry: ${formData.industry}

Message:
${formData.message}`;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          interest: formData.interest,
          budget: formData.budget,
          industry: formData.industry,
          message: detailedMessage,
          original_message: formData.message,
          company: formData.company || 'Not provided'
        }
      );

      setSubmitted(true);
    } catch (err) {
      // console.error('EmailJS Error:', err);
      
      let errorMessage = 'Failed to send message. Please try again later.';
      
      // Specifically handle fetch errors which are often caused by ad-blockers
      if (err instanceof TypeError && err.message.includes('fetch')) {
        errorMessage = 'Network Error: Failed to connect to email service. Please disable any ad-blockers and try again.';
      } else if (err.text) {
        errorMessage = `EmailJS Error: ${err.text}`;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column: Branding & Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.3em] inline-block mb-8">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
            Let's <span className="text-accent">Connect</span> &<br />
            Build Something Great.
          </h1>
          <p className="text-xl text-slate-400 max-w-lg mb-12 font-light leading-relaxed">
            Send us a message, and we'll promptly discuss your requirements with our expert technical team.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-4xl font-black text-white mb-2">150+</div>
              <div className="text-accent uppercase tracking-widest text-[10px] font-bold">Successful Deployments</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">99.9%</div>
              <div className="text-accent uppercase tracking-widest text-[10px] font-bold">Client Satisfaction</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Mail size={20} />
              </div>
              <span className="text-lg font-light break-all">codermaxtechnologies@gmail.com</span>
            </div>
            <div className="flex items-start gap-4 text-slate-400">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Phone size={20} />
              </div>
              <div className="text-lg font-light flex flex-col">
                <span>+91 8982269890</span>
                <span>+91 7509108861</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Globe size={20} />
              </div>
              <span className="text-lg font-light">Indore, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-glass/30 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white/5 relative"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-10"
              >
                {/* INTERESTS */}
                <div>
                  <label className="block text-white font-bold text-lg mb-6 flex items-center gap-3">
                    <Briefcase className="text-accent" size={20} />
                    What you are interested in*
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {INTERESTS.map(item => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleSelect('interest', item)}
                        className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                          formData.interest === item 
                            ? 'bg-accent border-accent text-white shadow-lg shadow-accent/30' 
                            : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:border-white/10'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* BUDGET */}
                <div>
                  <label className="block text-white font-bold text-lg mb-6 flex items-center gap-3">
                    <DollarSign className="text-accent" size={20} />
                    Your budget*
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {BUDGETS.map(item => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleSelect('budget', item)}
                        className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                          formData.budget === item 
                            ? 'bg-accent border-accent text-white shadow-lg shadow-accent/30' 
                            : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:border-white/10'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* INDUSTRY */}
                <div>
                  <label className="block text-white font-bold text-lg mb-6 flex items-center gap-3">
                    <Building2 className="text-accent" size={20} />
                    Your industry*
                  </label>
                  <select
                    required
                    value={formData.industry}
                    onChange={(e) => handleSelect('industry', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-light"
                  >
                    <option value="" disabled className="bg-[#020617]">Select Industry</option>
                    {INDUSTRIES.map(item => (
                      <option key={item} value={item} className="bg-[#020617]">{item}</option>
                    ))}
                  </select>
                </div>

                {/* PERSONAL INFO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      required
                      type="text"
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={(e) => handleSelect('name', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:border-accent transition-all font-light"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      required
                      type="email"
                      placeholder="Your Email*"
                      value={formData.email}
                      onChange={(e) => handleSelect('email', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:border-accent transition-all font-light"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input
                    type="text"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={(e) => handleSelect('company', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:border-accent transition-all font-light"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-6 top-6 text-slate-500" size={18} />
                  <textarea
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleSelect('message', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-6 text-white focus:outline-none focus:border-accent transition-all font-light resize-none"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm font-medium">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-accent/20 active:scale-[0.98] transition-all text-lg group overflow-hidden relative"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  {!isSubmitting && <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-accent/40 animate-bounce">
                  <Check size={48} strokeWidth={3} />
                </div>
                <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Message Received!</h2>
                <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm">
                  Thank you for reaching out. Our team will review your details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-accent font-bold hover:text-accent-hover transition-colors uppercase tracking-widest text-sm"
                >
                  Go Back
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
