// src/components/Work.tsx
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const projects = [
  {
    title: "Aiwifi — Webhooks & Integrations",
    role: "UX/UI • Lead • Prototyping",
    desc:
      "Designed third-party integration flows that balanced backend constraints with admin usability. Reusable patterns for future connectors.",
  },
  {
    title: "AudienceXQ / GhostLeads — Audiences & Mailers",
    role: "UX/UI • Frontend Prototype",
    desc:
      "Fixed core audience + direct-mailer flows. Streamlined admin tasks and surfaced blockers early with high-fidelity prototypes.",
  },
  {
    title: "LuganoAI — Privacy Layer",
    role: "UX/UI • Systems",
    desc:
      "Exploratory prototype: privacy receipts, audit logs, and toggles. Focus on clarity and trust without sacrificing speed.",
  },
  {
    title: "Landing Pages",
    role: "UX/UI",
    desc:
      "Responsive landing templates optimized for readability, performance, and fast iteration.",
  },
  {
    title: "Google UX Course",
    role: "Research • Flows",
    desc:
      "Exercises in research, IA, and accessible design with pragmatic deliverables.",
  },
  {
    title: "Upwork Client Work",
    role: "UX/UI • Frontend",
    desc:
      "Shipped polished UIs and smooth handoff prototypes across multiple engagements.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }, // cubic-bezier instead of "easeOut"
  },
};

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center font-mono text-sm uppercase tracking-[0.3em] text-green-400"
      >
        Selected Work
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, i) => (
          <motion.article
            key={i}
            variants={item}
            whileHover={{ y: -4 }}
            className="group relative rounded-xl border border-white/10 bg-[#14171c] p-6 shadow-sm backdrop-blur-sm transition will-change-transform
                       before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:opacity-0
                       before:transition before:duration-200 before:content-[''] group-hover:before:opacity-100
                       before:[background:radial-gradient(600px_circle_at_var(--mx,50%)_var(--my,50%),rgba(34,197,94,.10),transparent_60%)]"
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLElement;
              const rect = el.getBoundingClientRect();
              const mx = ((e.clientX - rect.left) / rect.width) * 100;
              const my = ((e.clientY - rect.top) / rect.height) * 100;
              el.style.setProperty("--mx", `${mx}%`);
              el.style.setProperty("--my", `${my}%`);
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.removeProperty("--mx");
              el.style.removeProperty("--my");
            }}
            aria-label={`${p.title} — ${p.role}`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-zinc-100">{p.title}</h3>
              <span className="h-5 w-5 rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-green-400/60 group-hover:bg-green-400/10" />
            </div>
            <p className="mt-2 font-mono text-xs text-green-400">{p.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.desc}</p>

            {/* bottom highlight on hover */}
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-green-400/60 to-transparent" />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
