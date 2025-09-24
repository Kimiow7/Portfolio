// src/pages/projects/Slug.tsx
import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/project";
import { motion } from "framer-motion";

export default function Slug() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-400">
        Project not found
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-zinc-100"
      >
        {project.title}
      </motion.h1>

      <p className="mt-2 font-mono text-green-400">{project.role}</p>

      <div className="mt-6 space-y-4 text-zinc-300 leading-relaxed">
        <p>
          <span className="font-medium text-zinc-100">Problem: </span>
          {project.problem}
        </p>
        <p>
          <span className="font-medium text-zinc-100">Solution: </span>
          {project.solution}
        </p>
      </div>

      {/* Animated CTAs */}
      <motion.div
        className="mt-8 flex flex-wrap gap-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {project.links.map((link, i) => (
          <motion.a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-lg border border-green-400 px-4 py-2 font-mono text-sm text-green-400 transition hover:bg-green-400 hover:text-[#0f1115]"
          >
            {link.label} ↗
          </motion.a>
        ))}
      </motion.div>

      <div className="mt-12">
        <Link
          to="/#work"
          className="font-mono text-sm text-green-400 hover:underline"
        >
          ← Back to Work
        </Link>
      </div>
    </section>
  );
}
