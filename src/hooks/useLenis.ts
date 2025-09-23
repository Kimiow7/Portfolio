// src/hooks/useLenis.ts
import Lenis from "@studio-freight/lenis"; import { useEffect } from "react";
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    function raf(t:number){ lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf); return () => lenis.destroy();
  }, []);
}
