import { motion } from "framer-motion";

const skills = [
  "UI Systems",
  "React + Tailwind",
  "Interaction Design",
  "Prototyping",
  "Design → Code",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-6 py-24 text-center"
    >
      {/* Section Label */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-mono text-green-400 text-sm tracking-tight"
      >
        damian@portfolio:~$ whoami
      </motion.h2>

      {/* Main Copy */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-4 text-zinc-300 leading-relaxed text-lg"
      >
        I specialize in <span className="text-zinc-100 font-medium">excellent UI building</span> — 
        crafting interfaces that feel natural, consistent, and polished. 
        I bridge design and engineering by turning concepts into 
        scalable design systems and production-ready React components.
      </motion.p>

      {/* Skills */}
      <div className="mt-10 flex flex-wrap justify-center gap-3 font-mono text-sm">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="rounded border border-green-400 px-3 py-1 text-green-400 hover:bg-green-400/10 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}