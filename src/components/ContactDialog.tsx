// src/components/ContactDialog.tsx
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Copy } from "lucide-react";
import { useState } from "react";

const EMAIL = "damiandevux@gmail.com";

export default function ContactDialog({
  triggerClass = "",
  triggerLabel = "contact me",
}: { triggerClass?: string; triggerLabel?: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className={triggerClass}
          aria-label="Open contact dialog"
        >
          {triggerLabel}
          <Mail className="size-4" />
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Backdrop */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            {/* Content */}
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="fixed left-1/2 top-1/2 w-[min(560px,92vw)] -translate-x-1/2 -translate-y-1/2
                           rounded-2xl border border-white/10 bg-[#111418] p-6 shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <Dialog.Title className="font-mono text-sm text-green-400">
                    damian@portfolio:~$ contact
                  </Dialog.Title>
                  <Dialog.Close
                    className="rounded-lg p-1 text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                    aria-label="Close"
                  >
                    <X className="size-4" />
                  </Dialog.Close>
                </div>

                <p className="mt-4 text-zinc-300">
                  I’m currently open to roles and collaborations. Reach me at:
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <code className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm text-zinc-100">
                    {EMAIL}
                  </code>

                  <button
                    onClick={copy}
                    className="inline-flex items-center gap-2 rounded-lg border border-green-400 px-3 py-2 font-mono text-green-400
                               transition hover:bg-green-400 hover:text-[#0f1115]"
                  >
                    {copied ? "copied" : "copy"}
                    <Copy className="size-4" />
                  </button>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 font-mono text-zinc-200
                               hover:bg-white/5 transition"
                  >
                    open mail app
                  </a>
                </div>

                <div className="pointer-events-none mt-6 h-px bg-gradient-to-r from-transparent via-green-400/60 to-transparent" />
                <p className="mt-4 text-sm text-zinc-500">
                  Tip: include a brief intro and the role/project context.
                </p>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
