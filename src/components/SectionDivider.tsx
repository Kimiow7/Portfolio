import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto my-24 h-px w-2/3 origin-left bg-gradient-to-r from-green-400/0 via-green-400/60 to-green-400/0"
    />
  );
}
