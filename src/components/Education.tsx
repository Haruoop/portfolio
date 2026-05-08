"use client";

import { motion } from "framer-motion";

const edu = [
  {
    degree: "Master of Business Administration",
    school: "Dr D.Y. PATIL VIJAY PATIL SCHOOL OF MANAGEMENT",
    location: "Navi Mumbai",
    period: "Ongoing",
    detail: "Specialisation: Finance",
  },
  {
    degree: "B.Tech in Computer Engineering",
    school: "Dr D.Y. PATIL INSTITUTE OF TECHNOLOGY",
    location: "Navi Mumbai",
    period: "Aug 2021 – Jun 2025",
    detail: "CGPA: 8.2 · ML, Deep Learning, NLP, Cloud Computing",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    school: "Lakshya Institute",
    location: "Thane",
    period: "2021",
    detail: "Percentage: 88.5%",
  },
  {
    degree: "State Secondary Certificate (10th)",
    school: "New English School",
    location: "Kalwa",
    period: "2019",
    detail: "Percentage: 80.4%",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative z-20 bg-[#121212] py-28 px-4 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-green-400 uppercase tracking-widest mb-3">Academic Background</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {edu.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              <p className="text-xs font-mono text-green-400 mb-2">{e.period}</p>
              <h3 className="text-lg font-bold text-white leading-tight mb-1">{e.degree}</h3>
              <p className="text-gray-300 text-sm font-medium mb-2">{e.school}</p>
              <p className="text-gray-500 text-sm">{e.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
