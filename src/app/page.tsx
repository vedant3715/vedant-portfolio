"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Folder, LayoutTemplate, Terminal } from "lucide-react";
import VerticalRollingBar from "@/components/VerticalRollingBar";

export default function Home() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const STAGGER = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="relative min-h-screen bg-[#FBFBFB] text-black overflow-hidden font-sans">
      {/* Global Dither Grain Overlay */}
      <div className="fixed inset-0 bg-dither pointer-events-none opacity-40 z-0"></div>

      {/* Global Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FBFBFB]/50 backdrop-blur-md border-b border-black/5 px-6 py-4 flex justify-between items-center transition-all">
        <div className="font-bold tracking-tight uppercase text-lg hidden sm:block">Vedant Thakur</div>
        <div className="font-bold tracking-tight uppercase text-lg sm:hidden">VT</div>
        
        <div className="flex gap-4 items-center">
          <ul className="hidden md:flex gap-6 text-sm font-medium text-black/60 mr-4">
            <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-black transition-colors">Projects</a></li>
          </ul>
          <a href="#connect" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-all flex items-center gap-1">
            Connect
          </a>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section id="about" className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 px-4 sm:px-8 text-center">
        <motion.div 
          className="max-w-4xl mx-auto flex flex-col items-center"
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h1 
            variants={FADE_UP}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter text-black font-semibold uppercase mb-6"
          >
            Vedant<br />Thakur
          </motion.h1>
          
          <motion.p 
            variants={FADE_UP}
            className="text-lg sm:text-xl md:text-2xl font-sans text-black/70 max-w-2xl text-center mb-10 balanced-wrap"
          >
            A developer crafting modern digital stories through code and creativity.
          </motion.p>
          
          <motion.a 
            variants={FADE_UP}
            href="#projects"
            className="bg-black text-white px-8 py-4 rounded-full text-sm sm:text-base font-medium flex items-center gap-2 hover:bg-black/80 transition-transform active:scale-95 group"
          >
            View My Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          {/* Central Illustration - Creation of Adam hands */}
          <motion.div 
            variants={FADE_UP}
            className="mt-16 sm:mt-24 w-full max-w-3xl aspect-[16/9] relative grayscale contrast-125 saturate-0 opacity-90 mx-auto"
          >
            {/* The image uses our generated hand illustration. It will blend flawlessly due to the monochrome/dither style */}
            <Image 
              src="/hero-hands.png" 
              alt="Human and cybernetic hand touching, representing creation and code."
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-black/50 text-xs font-semibold tracking-widest uppercase"
        >
          <span>Scroll down</span>
          <div className="w-[1px] h-8 bg-black/20 overflow-hidden">
            <motion.div 
              className="w-full h-full bg-black/60"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Section 2: Projects */}
      <section id="projects" className="relative z-10 min-h-screen py-32 px-4 sm:px-8 border-t border-black/10">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={FADE_UP}
            className="font-serif text-5xl sm:text-7xl font-semibold tracking-tight text-center mb-20"
          >
            Selected Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div 
              variants={FADE_UP}
              className="group bg-[#FBFBFB]/40 backdrop-blur-lg border border-black/10 p-8 rounded-2xl hover:bg-white/80 transition-all duration-300 relative overflow-hidden flex flex-col items-start gap-6 cursor-pointer"
            >
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl dither-texture">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:underline underline-offset-4 decoration-1">NEXORA Platform</h3>
                <p className="font-sans text-sm text-black/60 leading-relaxed">
                  A comprehensive design system and component library built for scale. Emphasizing typography and stark contrast.
                </p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              variants={FADE_UP}
              className="group bg-[#FBFBFB]/40 backdrop-blur-lg border border-black/10 p-8 rounded-2xl hover:bg-white/80 transition-all duration-300 relative overflow-hidden flex flex-col items-start gap-6 cursor-pointer"
            >
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl dither-texture">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:underline underline-offset-4 decoration-1">Quantum Engine</h3>
                <p className="font-sans text-sm text-black/60 leading-relaxed">
                  High-performance webGL rendering pipeline for browser-based 3D experiences, optimized for low-end devices.
                </p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              variants={FADE_UP}
              className="group bg-[#FBFBFB]/40 backdrop-blur-lg border border-black/10 p-8 rounded-2xl hover:bg-white/80 transition-all duration-300 relative overflow-hidden flex flex-col items-start gap-6 cursor-pointer"
            >
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl dither-texture">
                <Folder className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:underline underline-offset-4 decoration-1">Monochrome OS</h3>
                <p className="font-sans text-sm text-black/60 leading-relaxed">
                  A conceptual web-based operating system interface exploring brutalist and dithered aesthetics in modern UI.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* Section 3: Connect */}
      <section id="connect" className="relative z-10 min-h-[80vh] border-t border-black/10 flex items-center bg-[#FBFBFB]">
        <div className="absolute inset-0 bg-dither pointer-events-none opacity-40"></div>
        <div className="max-w-5xl mx-auto w-full px-8 pr-[140px] sm:pr-[180px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tighter font-bold uppercase leading-[0.9]">
              Let&apos;s<br />Collaborate
            </h2>
            <p className="mt-8 text-black/60 text-lg max-w-sm font-sans">
              Open for opportunities, creative collaborations, or just a coffee chat. Reach out through my social channels.
            </p>
            <a 
              href="mailto:contact@vedantthakur.com"
              className="inline-flex mt-12 bg-black text-white px-8 py-4 rounded-full font-medium sm:text-lg hover:pr-6 hover:pl-10 transition-all items-center gap-3 group"
            >
              Say Hello
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Custom Vertical Rolling Marquee Component */}
        <VerticalRollingBar />
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-black/10 py-6 px-8 flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#FBFBFB]/80 backdrop-blur-sm top-0 text-sm mb-0">
        <div className="text-black/60 font-medium">
          © {new Date().getFullYear()} Vedant Thakur. All rights reserved.
        </div>
        <div className="flex gap-6 font-semibold">
          <a href="#" className="hover:text-black/60 transition-colors">Resume</a>
          <a href="#connect" className="hover:text-black/60 transition-colors">Contact</a>
          <a href="#" className="hover:text-black/60 transition-colors">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
