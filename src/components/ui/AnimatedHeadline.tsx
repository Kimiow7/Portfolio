import { motion, useReducedMotion } from "framer-motion";

type Props = {
  lines: string[];
  className?: string;
  perLetterDur?: number;      // default 0.5s (smoother)
  perLetterStagger?: number;  // default 0.025s
  startDelay?: number;        // initial delay before line 1
  accentWord?: string;        // one word to color (case-sensitive)
};

export function getLineEndTimes(
  lines: string[],
  perLetterDur = 0.5,
  perLetterStagger = 0.025,
  startDelay = 0
) {
  const ends: number[] = [];
  let acc = startDelay;
  for (const line of lines) {
    const letters = line.replace(/\s/g, "").length;
    const lineDur =
      (Math.max(letters - 1, 0) * perLetterStagger) + perLetterDur;
    acc += lineDur;
    ends.push(acc);
  }
  return ends; // seconds when each line ends (cumulative)
}

export default function AnimatedHeadline({
  lines,
  className = "",
  perLetterDur = 0.5,
  perLetterStagger = 0.025,
  startDelay = 0,
  accentWord,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <h1 className={className}>
      {lines.map((line, li) => {
        const words = line.split(" ");
        // when this line starts (sum of previous lines' durations)
        const lineStart =
          li === 0
            ? startDelay
            : getLineEndTimes(lines.slice(0, li), perLetterDur, perLetterStagger, startDelay).slice(-1)[0];

        return (
          <span key={li} className="inline-block">
            {words.map((word, wi) => {
              const clean = word.replace(/[^\w]/g, "");
              const isAccent = accentWord && clean === accentWord;
              const letters = Array.from(word);
              return (
                <span
                  key={`${li}-${wi}`}
                  className={`inline-block ${isAccent ? "text-green-400" : ""}`}
                >
                  {letters.map((ch, ci) => {
                    const delay =
                      lineStart + (wi * letters.length + ci) * perLetterStagger;
                    return (
                      <motion.span
                        key={`${li}-${wi}-${ci}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: reduce
                            ? { duration: 0 }
                            : { duration: perLetterDur, delay, ease: [0.22, 1, 0.36, 1] }, // smooth easeOutQuint-ish
                        }}
                        className="inline-block will-change-transform"
                      >
                        {ch}
                      </motion.span>
                    );
                  })}
                  {wi < words.length - 1 ? <span aria-hidden>&nbsp;</span> : null}
                </span>
              );
            })}
            {li < lines.length - 1 ? <br className="hidden sm:block" /> : null}
          </span>
        );
      })}
    </h1>
  );
}
