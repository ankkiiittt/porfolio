import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { EMAIL, socialLinks } from "../data/constants";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl p-8 bg-white/4 border border-white/6 flex flex-col md:flex-row items-center gap-6 justify-between"
      >
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="mt-2 text-slate-300">I&apos;m currently available for new opportunities and freelance projects.</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={socialLinks.email}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 font-medium"
            >
              <Mail size={16} /> Email me
            </a>

            <a href={socialLinks.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/6">
              <Github size={16} /> GitHub
            </a>

            <a href={socialLinks.linkedin} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/6">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 text-sm text-white/60">
          <div className="text-xs">Prefer a quick message?</div>
          <div className="mt-2">
            <a
              href={socialLinks.email}
              className="block break-words font-medium text-white"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
