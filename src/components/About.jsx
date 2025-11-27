import React from "react";
import { motion } from "framer-motion";
import { aboutText } from "../data/constants";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
      >
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-3 text-slate-300">A short overview of who I am and what I build.</p>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white/3 border border-white/4">
              <h3 className="font-semibold">Work</h3>
              <p className="mt-2 text-sm text-slate-200">
                Building fast, resilient web applications, optimizing frontend performance, and
                architecting component systems that scale.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white/3 border border-white/4">
              <h3 className="font-semibold">Education</h3>
              <p className="mt-2 text-sm text-slate-200">B.Tech — Computer Science</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white/3 border border-white/4">
            <h3 className="font-semibold">Bio</h3>
            <p className="mt-2 text-sm text-slate-200">{aboutText}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
