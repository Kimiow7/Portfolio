import { motion } from "framer-motion";

const skills = [
  "React + TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Figma / Figma Make",
  "Design Systems",
  "UI Architecture",
  "Prototyping",
  "UX Research",
  "Competitive Analysis",
  "Interaction Design",
  "Technical Documentation",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24 font-mono"
    >
      {/* whoami */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-green-400 text-sm tracking-tight"
      >
        damian@portfolio:~$ whoami
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-4 text-zinc-300 leading-relaxed text-lg max-w-3xl"
      >
        I start by understanding the problems at hand and how they impact{" "}
        <span className="text-zinc-100 font-medium">
          users, stakeholders, and teams.
        </span>{" "}
        From there, I spot what to change, add, or streamline — and translate
        those insights into interfaces that make sense and deliver results.
      </motion.p>

      {/* mission */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 text-green-400 text-sm tracking-tight"
      >
        damian@portfolio:~$ mission
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-4 text-zinc-300 leading-relaxed text-lg max-w-3xl"
      >
        My strength comes from knowing both{" "}
        <span className="text-zinc-100 font-medium">design</span> and{" "}
        <span className="text-zinc-100 font-medium">development.</span> With roots
        in design and the ability to ship in React + Tailwind, I bridge creative
        vision with technical execution — ensuring solutions don’t just look
        right, they work in practice.
      </motion.p>

      {/* skills */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-green-400 text-sm tracking-tight"
      >
        damian@portfolio:~$ skills --list
      </motion.h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            className="rounded border border-green-400 px-3 py-1 text-green-400 hover:bg-green-400/10 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
