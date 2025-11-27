import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/constants";
import { Layers } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="text-sm text-white/60">Organized by role</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(skills).map(([group, items], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-4 rounded-lg bg-white/3 border border-white/4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-white/5">
                  <Layers size={18} />
                </div>
                <div>
                  <h4 className="font-semibold">{group}</h4>
                  <div className="text-sm text-white/60">{items.length} items</div>
                </div>
              </div>

              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {items.map((s) => (
                  <li key={s} className="text-white/80 px-2 py-1 rounded-md bg-white/2">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
