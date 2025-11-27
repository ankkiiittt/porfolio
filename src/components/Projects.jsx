import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/constants";
import { Github, ExternalLink, Feather } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="text-sm text-white/60">Selected case studies & demos</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-br p-0"
            aria-labelledby={`project-${p.id}`}
          >
            <div className={`p-5 ${p.gradient} bg-opacity-10`}>
              <div className="flex items-center justify-between">
                <h3 id={`project-${p.id}`} className="text-lg font-semibold">
                  {p.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-white/3">{p.tags[0]}</span>
                </div>
              </div>

              <p className="text-sm mt-3 text-slate-200">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/3 text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium backdrop-blur bg-white/3 hover:scale-[1.02] transition"
                >
                  <Github size={14} /> View Code
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border border-white/6 backdrop-blur bg-white/2 hover:bg-white/4 transition"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>

            <div className="p-3 bg-white/3 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Feather size={14} />
                <span className="text-white/80">{p.title}</span>
              </div>
              <div className="text-white/60">{p.tags.length} tech</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
