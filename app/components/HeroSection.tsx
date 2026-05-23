"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, type Variants } from "framer-motion";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("./ThreeBackground"), { ssr: false });

const floatingCards = [
  { icon: "☁️", label: "Cloud Infra", delay: 0, x: -60, y: -30 },
  { icon: "⚡", label: "DevOps", delay: 0.2, x: 60, y: -50 },
  { icon: "🛡️", label: "Security", delay: 0.4, x: -80, y: 40 },
  { icon: "📊", label: "Analytics", delay: 0.6, x: 70, y: 50 },
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), {
    stiffness: 100,
    damping: 30,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: EASE,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[var(--color-bg)]/20 to-[var(--color-bg)] pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,212,255,0.08),transparent)] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glow-border text-sm font-medium text-[var(--color-primary)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]" />
          </span>
          Now accepting new clients — 2026
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6"
        >
          <span className="block text-white">We Build the</span>
          <span className="block gradient-text glow-text">Digital Engine</span>
          <span className="block text-white">Behind Your Vision</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10"
        >
          AnonymousInc crafts scalable software, cloud infrastructure, and DevOps pipelines 
          that power the next generation of digital businesses.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 gradient-primary" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#00b8d9] to-[#0077aa]" />
            <span className="absolute inset-0 group-hover:shadow-[0_0_30px_var(--color-glow)] transition-shadow duration-300 rounded-xl" />
            <span className="relative text-white flex items-center gap-2">
              Start a Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="#services"
            className="px-8 py-4 rounded-xl font-semibold text-base glass glow-border text-slate-300 hover:text-white hover:border-[var(--color-primary)]/30 transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating tech cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 1, 0.8],
            scale: 1,
            y: [0, -8, 0, -4, 0],
          }}
          transition={{
            opacity: { delay: card.delay + 1, duration: 0.5 },
            scale: { delay: card.delay + 1, duration: 0.5 },
            y: { delay: card.delay + 1.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            position: "absolute",
            left: `calc(50% + ${card.x}px)`,
            top: `calc(50% + ${card.y}px)`,
          }}
          className={`hidden xl:flex items-center gap-2 px-3 py-2 rounded-xl glass glow-border text-xs font-medium text-slate-300 z-10`}
        >
          <span>{card.icon}</span>
          {card.label}
        </motion.div>
      ))}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500 text-xs"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 bg-[var(--color-primary)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
