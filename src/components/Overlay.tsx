"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /*
   * The scroll is divided into 4 equal quarters.
   * Each tagline lives in one quarter.
   * Between quarters there is a gap where the screen is empty.
   *
   *  0%  → 22%  : Tagline 1 visible
   *  22% → 25%  : empty
   *  25% → 47%  : Tagline 2 visible
   *  47% → 50%  : empty
   *  50% → 72%  : Tagline 3 visible
   *  72% → 75%  : empty
   *  75% → 97%  : Tagline 4 visible
   *  97% → 100% : empty
   */

  // Tag 1: 0% → 20%
  const o1 = useTransform(scrollYProgress, [0, 0.03, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.03, 0.2], [50, 0, -50]);

  // Tag 2: 20% → 40%
  const o2 = useTransform(scrollYProgress, [0.2, 0.23, 0.35, 0.4], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.23, 0.4], [50, 0, -50]);

  // Tag 3: 40% → 60%
  const o3 = useTransform(scrollYProgress, [0.4, 0.43, 0.55, 0.6], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.43, 0.6], [50, 0, -50]);

  // Tag 4: 60% → 80%
  const o4 = useTransform(scrollYProgress, [0.6, 0.63, 0.75, 0.8], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.63, 0.8], [50, 0, -50]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Tagline 1 — Name & Title */}
        <motion.div
          style={{ opacity: o1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Sujal Pandey
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/70 font-light tracking-widest uppercase">
            Software Engineer&nbsp;•&nbsp;MBA Finance&nbsp;•&nbsp;Product & Growth
          </p>
        </motion.div>

        {/* Tagline 2 */}
        <motion.div
          style={{ opacity: o2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl max-w-2xl leading-tight">
            I build&nbsp;
            <span className="italic text-white/60">AI‑powered</span>
            <br />digital experiences.
          </h2>
        </motion.div>

        {/* Tagline 3 */}
        <motion.div
          style={{ opacity: o3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl max-w-2xl leading-tight">
            Bridging&nbsp;
            <span className="italic text-white/60">technology,</span>
            <br />business, and creativity.
          </h2>
        </motion.div>

        {/* Tagline 4 */}
        <motion.div
          style={{ opacity: o4, y: y4 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl max-w-3xl leading-tight">
            Building&nbsp;
            <span className="italic text-white/60">intelligent products</span>
            <br />for the future.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
