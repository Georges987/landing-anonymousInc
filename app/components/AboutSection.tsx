"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "Rust", "NestJS"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "PlanetScale"] },
  { category: "Cloud", items: ["AWS", "GCP", "Azure", "Vercel", "Cloudflare"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "ArgoCD"] },
  { category: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin", "Expo"] },
];

const timeline = [
  {
    year: "2020",
    title: "Founded",
    desc: "AnonymousInc was born from a passion for engineering excellence and a belief that technology should amplify human potential.",
  },
  {
    year: "2021",
    title: "First Enterprise Client",
    desc: "Delivered a full-stack SaaS platform for a €10M Series A startup, reducing their infrastructure costs by 40%.",
  },
  {
    year: "2022",
    title: "Cloud Practice Launched",
    desc: "Expanded our expertise with dedicated cloud architecture and DevOps teams, becoming certified AWS and GCP partners.",
  },
  {
    year: "2024",
    title: "50+ Projects",
    desc: "Crossed 50 successful deliveries across Europe, maintaining a 100% client satisfaction rate.",
  },
  {
    year: "2026",
    title: "AI-Powered Services",
    desc: "Integrating AI and ML capabilities into our development workflow to deliver smarter, faster solutions.",
  },
];

function TechPill({ item, delay }: { item: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="px-3 py-1.5 rounded-lg text-sm font-medium glass glow-border text-slate-300 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-all duration-200 cursor-default"
    >
      {item}
    </motion.span>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} id="about" className="relative section-padding overflow-hidden">
      {/* Parallax background element */}
      <motion.div
        style={{ y: bgY }}
        className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[var(--color-secondary)] blur-[120px]" />
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glow-border text-sm text-[var(--color-secondary)] font-medium mb-4"
          >
            <span className="w-4 h-px bg-[var(--color-secondary)]" />
            Our Story
            <span className="w-4 h-px bg-[var(--color-secondary)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Built by engineers,{" "}
            <span className="gradient-text">for builders</span>
          </motion.h2>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-slate-400 leading-relaxed mb-6">
              AnonymousInc was founded by a team of senior engineers who were tired of seeing great
              ideas fail due to poor technical execution. We believe that solid engineering
              foundations are not a luxury — they&apos;re a strategic advantage.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              We work as embedded partners, not vendors. Our team integrates with yours,
              speaks your language, and is committed to delivering outcomes — not just code.
            </p>

            {/* Value props */}
            <div className="space-y-4">
              {[
                { icon: "🎯", title: "Outcome-focused", desc: "We measure success by business impact, not lines of code." },
                { icon: "🔬", title: "Engineering excellence", desc: "Clean architecture, thorough testing, and continuous improvement." },
                { icon: "🤝", title: "True partnership", desc: "Transparent communication and long-term commitment to your success." },
              ].map((v) => (
                <div key={v.title} className="flex gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{v.icon}</span>
                  <div>
                    <div className="font-semibold text-white text-sm">{v.title}</div>
                    <div className="text-slate-400 text-sm">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute left-[calc(3rem-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)]/50 via-[var(--color-secondary)]/30 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex gap-4 pb-8 last:pb-0"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl gradient-primary flex items-center justify-center text-xs font-bold text-[var(--color-bg)] z-10">
                  {item.year.slice(2)}
                </div>
                <div className="pt-2">
                  <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tech stack section */}
      <div id="stack" className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glow-border text-sm text-[var(--color-accent)] font-medium mb-4"
          >
            <span className="w-4 h-px bg-[var(--color-accent)]" />
            Our Stack
            <span className="w-4 h-px bg-[var(--color-accent)]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-white"
          >
            Technologies we{" "}
            <span className="gradient-text">master</span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {techStack.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest w-20 flex-shrink-0">
                {cat.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, ii) => (
                  <TechPill key={item} item={item} delay={ci * 0.05 + ii * 0.03} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
