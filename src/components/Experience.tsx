"use client";

import { motion } from "framer-motion";

const points = [
  "Managed daily inventory tracking, dispatch operations, and raw material procurement ensuring on-time order fulfilment.",
  "Utilized Microsoft Excel for accurate billing, inventory entries, and production-dispatch records.",
  "Handled client communication regarding order issues, missing stock, and resolution updates; reported critical updates to senior management.",
  "Improved client satisfaction through prompt issue handling, directly contributing to increased sales during the internship.",
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-20 bg-[#121212] py-28 px-4 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-green-400 uppercase tracking-widest mb-3">Career</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 rounded-2xl p-6 md:p-10 hover:border-white/20 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
            <div>
              <h3 className="text-2xl font-bold text-white">Operations & Client Relations Intern</h3>
              <p className="text-green-400 font-medium mt-1">Indus Vet Care · Mumbai</p>
            </div>
            <span className="text-xs font-mono text-gray-500 whitespace-nowrap">Nov 2024 – Apr 2025</span>
          </div>
          <ul className="space-y-3">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                <span className="text-green-500 mt-1 shrink-0">▹</span>
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
