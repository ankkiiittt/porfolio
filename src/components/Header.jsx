import React, { useState, useEffect, useRef } from "react";
import { Github, Menu, X } from "lucide-react";
import { NAME, socialLinks } from "../data/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/4"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3" aria-label={`${NAME} - Home`}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-black font-semibold shadow-md">
              AD
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-semibold">{NAME}</div>
              <div className="text-[11px] text-white/60">Computer Science Engineer</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-4">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Tech</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-md text-sm font-medium backdrop-blur bg-white/3 hover:bg-white/5 transition flex items-center gap-2"
              aria-label="GitHub"
            >
              <Github size={16} /> Code
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 rounded-md backdrop-blur bg-white/3 hover:bg-white/5"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-white/4 bg-black/40"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a href="#about" onClick={() => setMenuOpen(false)} className="block">About</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="block">Tech</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="block">Projects</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="block">Contact</a>
              <div className="flex items-center gap-3 pt-2">
                <a href={socialLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link {
          color: rgba(255,255,255,0.85);
          padding: 8px 12px;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
        }
        .nav-link:hover {
          background: rgba(255,255,255,0.03);
        }
      `}</style>
    </header>
);
}
