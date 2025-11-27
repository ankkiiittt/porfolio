import React from "react";
import { NAME } from "../data/constants";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-white/60">
        <div>© {new Date().getFullYear()} {NAME}. Built with React · Tailwind · Framer Motion.</div>
        <div className="mt-2">
          <a href="#" className="inline-flex items-center gap-2">
            <Github size={14} /> View source
          </a>
        </div>
      </div>
    </footer>
  );
}
