"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "CTO, FinTech Startup",
    avatar: "SM",
    text: "AnonymousInc rebuilt our entire backend in 3 months. The new architecture handles 10x the load at half the cost. Genuinely impressive engineering team.",
    rating: 5,
  },
  {
    name: "Alexandre Dubois",
    role: "Founder, SaaS Platform",
    avatar: "AD",
    text: "They don't just write code — they think about the business impact of every technical decision. That mindset is rare and incredibly valuable.",
    rating: 5,
  },
  {
    name: "Léa Rousseau",
    role: "VP Engineering, E-commerce",
    avatar: "LR",
    text: "Our CI/CD pipeline went from 45 minutes to under 4 minutes. The DevOps work they did saved us thousands of hours per year.",
    rating: 5,
  },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="group relative p-6 rounded-2xl glass glow-border hover:border-[var(--color-primary)]/25 transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      {/* Quote mark */}
      <div className="absolute top-4 right-5 text-5xl font-black text-[var(--color-primary)]/10 leading-none select-none">
        &quot;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-slate-300 leading-relaxed mb-5 text-sm">&ldquo;{t.text}&rdquo;</p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
          {t.avatar}
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{t.name}</div>
          <div className="text-slate-500 text-xs">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const [formState, setFormState] = useState({ name: "", email: "", project: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(124,58,237,0.06),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Testimonials */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glow-border text-sm text-[var(--color-accent)] font-medium mb-4"
          >
            <span className="w-4 h-px bg-[var(--color-accent)]" />
            Client Stories
            <span className="w-4 h-px bg-[var(--color-accent)]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Trusted by <span className="gradient-text">ambitious teams</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glow-border text-sm text-[var(--color-primary)] font-medium mb-6">
              <span className="w-4 h-px bg-[var(--color-primary)]" />
              Let&apos;s Talk
              <span className="w-4 h-px bg-[var(--color-primary)]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Ready to build<br />
              something <span className="gradient-text">great?</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Tell us about your project. We&apos;ll get back to you within 24 hours with a tailored
              proposal and a free technical consultation.
            </p>

            <div className="space-y-4">
              {[
                { icon: "📧", label: "Email", value: "hello@anonymousinc.io" },
                { icon: "📍", label: "Location", value: "Paris, France" },
                { icon: "⏱️", label: "Response time", value: "< 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass glow-border flex items-center justify-center text-base">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                    <div className="text-sm text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl glass glow-border p-8 text-center"
              >
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl glass glow-border p-6 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[var(--color-primary)]/50 focus:bg-white/8 transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[var(--color-primary)]/50 focus:bg-white/8 transition-all"
                      placeholder="jean@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Project Type</label>
                  <select
                    id="contact-project"
                    value={formState.project}
                    onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--color-primary)]/50 transition-all"
                  >
                    <option value="" className="bg-[var(--color-bg-2)]">Select a service</option>
                    <option value="software" className="bg-[var(--color-bg-2)]">Custom Software</option>
                    <option value="cloud" className="bg-[var(--color-bg-2)]">Cloud Infrastructure</option>
                    <option value="devops" className="bg-[var(--color-bg-2)]">DevOps & CI/CD</option>
                    <option value="mobile" className="bg-[var(--color-bg-2)]">Mobile App</option>
                    <option value="other" className="bg-[var(--color-bg-2)]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Tell us about your project</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[var(--color-primary)]/50 transition-all resize-none"
                    placeholder="We want to build a platform that..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 rounded-xl font-semibold text-sm gradient-primary text-white hover:brightness-110 hover:shadow-[0_0_25px_var(--color-glow)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
