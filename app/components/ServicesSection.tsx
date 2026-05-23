"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Software Development",
    description:
      "We architect and build robust, scalable applications tailored to your exact business needs — from APIs to full-stack platforms.",
    tags: ["React", "Node.js", "Python", "Go"],
    gradient: "from-[#00d4ff] to-[#0088cc]",
    glow: "rgba(0, 212, 255, 0.15)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Infrastructure",
    description:
      "Design, deploy, and optimize your cloud architecture. We make AWS, GCP, and Azure work seamlessly for your scale.",
    tags: ["AWS", "GCP", "Azure", "Terraform"],
    gradient: "from-[#7c3aed] to-[#4f46e5]",
    glow: "rgba(124, 58, 237, 0.15)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "DevOps & CI/CD",
    description:
      "Automate your entire delivery pipeline. From containerization to continuous deployment, we eliminate manual bottlenecks.",
    tags: ["Docker", "K8s", "GitHub Actions", "ArgoCD"],
    gradient: "from-[#06b6d4] to-[#0891b2]",
    glow: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Security & Compliance",
    description:
      "Protect your infrastructure and data with our security audits, penetration testing, and compliance implementation services.",
    tags: ["OWASP", "SOC2", "GDPR", "Pen Testing"],
    gradient: "from-[#f59e0b] to-[#d97706]",
    glow: "rgba(245, 158, 11, 0.15)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps that feel native. We deliver high-performance iOS and Android apps with Flutter.",
    tags: ["Flutter", "iOS", "Android", "React Native"],
    gradient: "from-[#ec4899] to-[#be185d]",
    glow: "rgba(236, 72, 153, 0.15)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data & Analytics",
    description:
      "Turn raw data into business insights. We build data pipelines, warehouses, and real-time dashboards that drive decisions.",
    tags: ["PostgreSQL", "Spark", "dbt", "Grafana"],
    gradient: "from-[#10b981] to-[#059669]",
    glow: "rgba(16, 185, 129, 0.15)",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl glass glow-border p-6 cursor-default overflow-hidden transition-all duration-500 hover:border-[var(--color-primary)]/30"
      style={{
        boxShadow: `0 0 0 transparent`,
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3 },
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${service.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 text-white transition-transform duration-300 group-hover:scale-110`}
      >
        {service.icon}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
          style={{ background: `linear-gradient(135deg, ${service.glow}, transparent)` }}
        />
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-200">
        {service.title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-400 border border-white/5 group-hover:border-[var(--color-border)] transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(0,212,255,0.04),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glow-border text-sm text-[var(--color-primary)] font-medium mb-4"
          >
            <span className="w-4 h-px bg-[var(--color-primary)]" />
            What We Do
            <span className="w-4 h-px bg-[var(--color-primary)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            End-to-end IT{" "}
            <span className="gradient-text">Development Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-slate-400 leading-relaxed"
          >
            From initial concept to production deployment, we cover every layer of your
            technology stack with precision engineering.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
