"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PrecivisioN",
    category: "AI Healthcare System",
    description: "An AI-enabled medical diagnostic platform using CNN models (VGG16, Sequential) achieving 97%+ accuracy across brain, kidney, lung, and colon disease detection. Built with TensorFlow, Keras, and deployed via Flask.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=100&w=2670&auto=format&fit=crop",
    tech: ["Python", "TensorFlow", "Keras", "Flask"],
  },
  {
    id: 2,
    title: "SAGE",
    category: "AI Desktop Assistant",
    description: "A voice-controlled AI desktop assistant using NLP and speech recognition to automate desktop tasks—app control, file navigation, and web search—hands-free. Built for accessibility and digital inclusion.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=100&w=2670&auto=format&fit=crop",
    tech: ["Python", "NLP", "SpeechRecognition", "OpenAI API"],
  },
  {
    id: 3,
    title: "Lung Disease Detection",
    category: "Deep Learning Research",
    description: "A deep learning system combining SRCNN for image enhancement and CNN for accurate lung disease classification, improving diagnostic precision in resource-limited environments.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=100&w=2564&auto=format&fit=crop",
    tech: ["Python", "CNN", "SRCNN", "TensorFlow"],
  },
  {
    id: 4,
    title: "Vivid Walls",
    category: "Live Wallpapers App",
    description: "A high-performance live wallpaper application featuring dynamic, animated backgrounds with a beautiful and intuitive user interface for a premium desktop experience.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=100&w=2564&auto=format&fit=crop",
    tech: ["React", "Canvas API", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative z-20 bg-[#121212] py-28 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-green-400 uppercase tracking-widest mb-3">Selected Work</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/25 transition-colors duration-500 mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/10">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="px-1 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-green-400 uppercase tracking-widest">{project.category}</span>
                  <span className="text-xs font-mono text-white/30">0{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
