import React from "react";
import { Mail, Code } from "lucide-react";
import { motion } from "framer-motion";
import { NAME, aboutText, ROLE_TITLES, socialLinks } from "../data/constants";
import useTypewriter from "../hooks/useTypewriter";

export default function Hero() {
  const typed = useTypewriter(ROLE_TITLES, 80, 1400);

  return (
    <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-400/8 to-cyan-300/6 px-3 py-1 rounded-full text-sm font-medium text-emerald-300 w-max">
            <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-200 text-xs font-semibold">Open to Work</span>
            Seeking opportunities · Remote friendly
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-cyan-200">{NAME}</span>
            <span className="block text-xl sm:text-2xl font-medium text-white/70 mt-2">
              <span className="mr-2">—</span>
              <span className="inline-block border-r border-white/20 pr-3">{typed}</span>
            </span>
          </h1>

          <p className="text-slate-300 max-w-2xl">
            {aboutText} I build user interfaces with a strong focus on performance, accessibility, and delightful micro-interactions.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={socialLinks.email}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-md hover:scale-[1.01] transform transition"
            >
              <Mail size={16} /> Get in touch
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-white/6 backdrop-blur bg-white/2 hover:bg-white/4 transition"
            >
              <Code size={16} /> View projects
            </a>
          </div>

          <div className="pt-2 text-sm text-white/60">
            <strong>Currently:</strong> Freelancing · Open to collaboration
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative"
        >
          <div className="rounded-2xl p-6 shadow-2xl border border-white/6 bg-gradient-to-br from-slate-800/60 to-zinc-900/60">
            <div className="h-64 sm:h-72 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 via-slate-800 to-rose-700 flex items-center justify-center">
              <div className="w-full max-w-md mx-auto px-4">
                <div className="flex justify-between items-center text-xs text-white/70 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <div className="text-[11px]">Portfolio · preview</div>
                </div>

                <pre className="bg-transparent text-sm text-white/90 font-mono rounded-md p-4">
{`> git clone https://github.com/your-username
> cd portfolio
> npm run dev

Welcome — explore projects and case studies 👋`}
                </pre>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/3 text-center">
                <div className="text-sm font-semibold">150+</div>
                <div className="text-[11px] text-white/60">Commits</div>
              </div>
              <div className="p-3 rounded-lg bg-white/3 text-center">
                <div className="text-sm font-semibold">12</div>
                <div className="text-[11px] text-white/60">Projects</div>
              </div>
              <div className="p-3 rounded-lg bg-white/3 text-center">
                <div className="text-sm font-semibold">4 yrs</div>
                <div className="text-[11px] text-white/60">Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
