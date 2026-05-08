"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 bg-[#121212] py-32 px-4 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-mono text-green-400 uppercase tracking-widest mb-4">Let&apos;s connect</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Get in Touch</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Open to software engineering roles, AI collaborations, and product partnerships. Let&apos;s build something great.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="mailto:Sujalpandey8897@gmail.com"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 active:scale-95 transition-all w-full sm:w-auto"
            >
              Send an Email
            </a>
            <a
              href="tel:+919867138898"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 active:scale-95 transition-all w-full sm:w-auto"
            >
              +91 9867138898
            </a>
          </div>

          <div className="flex justify-center gap-10 border-t border-white/10 pt-10">
            <a
              href="https://www.linkedin.com/in/sjal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:Sujalpandey8897@gmail.com"
              className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
            >
              Email ↗
            </a>
            <a
              href="tel:+919867138898"
              className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
            >
              Phone ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
