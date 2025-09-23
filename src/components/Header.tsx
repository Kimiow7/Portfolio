import * as Tooltip from "@radix-ui/react-tooltip";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-black/20 backdrop-blur-sm">
      {/* full-width bottom line */}
      <span className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-mono text-sm text-green-400">
          damian@portfolio:~
        </span>

        <nav className="font-mono text-sm text-zinc-400">
          <a href="#about" className="hover:text-green-400">
            about
          </a>
          <span className="mx-3 text-zinc-600">|</span>
          <a href="#work" className="hover:text-green-400">
            work
          </a>
          <span className="mx-3 text-zinc-600">|</span>
          <a href="#contact" className="hover:text-green-400">
            contact
          </a>

          <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
              <Tooltip.Trigger className="ml-4 inline-flex items-center gap-2 text-green-400 outline-none">
                <span className="size-2 rounded-full bg-green-400" />
                available
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  sideOffset={8}
                  className="rounded border border-white/10 bg-[#1a1f26] px-2 py-1 text-xs text-zinc-300 shadow-md"
                >
                  Open to Senior UX/UI + Frontend roles
                  <Tooltip.Arrow className="fill-[#1a1f26]" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </nav>
      </div>
    </header>
  );
}
