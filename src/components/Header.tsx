import { useState } from "react";
import { Menu, X } from "lucide-react";
import ContactDialog from "./ContactDialog";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-black/20 backdrop-blur-sm">
      <span className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* logo/terminal */}
        <span className="font-mono text-sm text-green-400">
          damian@portfolio:~
        </span>

        {/* desktop nav */}
        <nav className="hidden md:flex font-mono text-sm text-zinc-400 gap-6">
          <a href="#about" className="hover:text-green-400">
            about
          </a>
          <a href="#work" className="hover:text-green-400">
            work
          </a>
          <ContactDialog
            triggerClass="inline-flex items-center gap-2 text-green-400 hover:underline"
            triggerLabel="contact"
          />
        </nav>

        {/* mobile menu button */}
        <button
          className="md:hidden text-zinc-400 hover:text-green-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* mobile nav panel */}
      {open && (
        <div className="md:hidden bg-[#0f1115]/95 backdrop-blur-sm px-6 py-4 border-t border-white/10">
          <nav className="flex flex-col gap-4 font-mono text-sm text-zinc-400">
            <a
              href="#about"
              className="hover:text-green-400"
              onClick={() => setOpen(false)}
            >
              about
            </a>
            <a
              href="#work"
              className="hover:text-green-400"
              onClick={() => setOpen(false)}
            >
              work
            </a>
            <ContactDialog
              triggerClass="text-green-400 hover:underline text-left"
              triggerLabel="contact"
            />
          </nav>
        </div>
      )}
    </header>
  );
}
