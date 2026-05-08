"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { label: "Languages",        items: ["Python", "C++", "SQL", "HTML"] },
  { label: "Frameworks",       items: ["TensorFlow", "Keras", "FastAPI", "Flask", "OpenCV", "Pandas", "NumPy"] },
  { label: "Tools",            items: ["Git / GitHub", "MySQL", "Power BI", "MS Excel", "AWS Academy"] },
  { label: "Competencies",     items: ["Machine Learning", "Deep Learning", "NLP", "DSA", "Business Analytics", "Product Growth"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 bg-[#121212] py-28 px-4 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-green-400 uppercase tracking-widest mb-3">What I work with</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Technical Arsenal</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="text-xs font-mono text-green-400 uppercase tracking-widest mb-5">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
