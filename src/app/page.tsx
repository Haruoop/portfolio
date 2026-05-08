import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-white/20">

      {/* Floating Navbar */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 shadow-2xl flex items-center gap-5 md:gap-8">
        {[
          { label: "Skills",      href: "#skills" },
          { label: "Experience",  href: "#experience" },
          { label: "Work",        href: "#work" },
          { label: "Education",   href: "#education" },
          { label: "Contact",     href: "#contact" },
        ].map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-[10px] md:text-xs font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* ── Scrollytelling hero (500vh so frames have room) ── */}
      <section className="relative w-full h-[500vh]">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* ── Content sections ── */}
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      <footer className="py-10 text-center text-gray-600 text-xs border-t border-white/5 bg-[#121212]">
        © {new Date().getFullYear()} Sujal Pandey — Built with Next.js & Framer Motion
      </footer>
    </main>
  );
}
