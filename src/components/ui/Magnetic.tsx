// src/components/ui/Magnetic.tsx
import React, { useRef } from "react";

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px)`;
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `translate(0,0)`;
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="will-change-transform"
    >
      {children}
    </div>
  );
}
