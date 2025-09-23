import { useMemo } from "react";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { Download, ArrowRight } from "lucide-react";
import AnimatedHeadline, { getLineEndTimes } from "./ui/AnimatedHeadline";

export default function Hero() {
  const lines = useMemo(
    () => ["Design that feels right.", "Code that just works."],
    []
  );

  // slower & smoother than before (≈2x)
  const perLetterDur = 0.5;
  const perLetterStagger = 0.025;
  const startDelay = 0.0;

  // when line 2 ends -> reveal others shortly after
  const [line1End, line2End] = getLineEndTimes(
    lines,
    perLetterDur,
    perLetterStagger,
    startDelay
  );
  const revealAfter = (line2End ?? line1End) + 0.08; // small buffer
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center px-6">
      <div className="mx-auto max-w-6xl text-center pt-28 md:pt-36">
        <AnimatedHeadline
          lines={lines}
          accentWord="works"
          perLetterDur={perLetterDur}
          perLetterStagger={perLetterStagger}
          startDelay={startDelay}
          className="text-zinc-100 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.01em] leading-[0.95]"
        />

        <div className="mx-auto mt-2 h-[2px] w-[min(640px,92%)] rounded-full bg-gradient-to-r from-green-400/0 via-green-400/70 to-green-400/0" />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: revealAfter }}
          className="mt-6 mx-auto max-w-2xl text-lg md:text-xl text-zinc-400 tracking-[0.01em]"
        >
          <Balancer>
            I craft seamless digital experiences where aesthetics meet performance.
          </Balancer>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: revealAfter + 0.06 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg border border-green-400 bg-green-400 px-6 py-3 font-mono text-[#0f1115] transition hover:bg-green-500"
          >
            view work <ArrowRight className="size-4" />
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-green-400 px-6 py-3 font-mono text-green-400 transition hover:bg-green-400 hover:text-[#0f1115]"
          >
            download resume <Download className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
