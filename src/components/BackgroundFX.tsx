export default function BackgroundFX() {
  return (
    <>
      <style>{`
        :root{
          --bg:#0f1115;
          --accent:34,197,94;
          --glow:0.16;        /* spotlight strength */
          --wash:0.08;        /* animated wash strength */
          --grid:0.10;        /* grid visibility */
          --grain:0.06;       /* grain visibility */
        }
        @keyframes glowShift{0%{transform:translateY(0) scale(1)}50%{transform:translateY(10px) scale(1.02)}100%{transform:translateY(0) scale(1)}}
        @keyframes pan{0%{background-position:0% 0%}100%{background-position:200% 0%}}
        @media (prefers-reduced-motion: reduce){
          .fx-anim{animation:none!important}
          .fx-wash{animation:none!important}
        }
      `}</style>

      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none" style={{ background:"var(--bg)" }}>
        {/* top spotlight, wider + softer */}
        <div
          className="absolute inset-0 fx-anim"
          style={{
            background: `radial-gradient(1100px 520px at 50% 18%,
              rgba(var(--accent), var(--glow)) 0%,
              rgba(var(--accent), .08) 20%,
              rgba(255,255,255,.05) 34%,
              transparent 64%)`,
            filter: "blur(14px)",
            animation: "glowShift 14s ease-in-out infinite",
            WebkitMask:
              "radial-gradient(1500px 800px at 50% 38%, #000 60%, transparent 100%)",
            mask:
              "radial-gradient(1500px 800px at 50% 38%, #000 60%, transparent 100%)",
          }}
        />

        {/* subtle animated wash */}
        <div
          className="absolute inset-0 fx-wash"
          style={{
            opacity: "var(--wash)",
            background:
              "linear-gradient(90deg, rgba(var(--accent),0.22), rgba(255,255,255,0.10), rgba(var(--accent),0.22))",
            backgroundSize: "200% 100%",
            animation: "pan 36s linear infinite",
            mixBlendMode: "soft-light",
          }}
        />

        {/* faint matrix-like grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg,
                rgba(255,255,255,var(--grid)) 0px,
                rgba(255,255,255,var(--grid)) 1px,
                transparent 1px,
                transparent 12px),
              repeating-linear-gradient(90deg,
                rgba(255,255,255,calc(var(--grid)*.7)) 0px,
                rgba(255,255,255,calc(var(--grid)*.7)) 1px,
                transparent 1px,
                transparent 12px)
            `,
            mixBlendMode: "overlay",
          }}
        />

        {/* soft grain */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 25% 25%, rgba(255,255,255,var(--grain)) 0, transparent 100%), radial-gradient(1px 1px at 75% 35%, rgba(255,255,255,var(--grain)) 0, transparent 100%), radial-gradient(1px 1px at 45% 70%, rgba(255,255,255,var(--grain)) 0, transparent 100%)",
            mixBlendMode: "soft-light",
          }}
        />

        {/* bottom vignette to balance weight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            WebkitMask:
              "radial-gradient(1200px 520px at 50% 110%, #000 30%, transparent 100%)",
            mask:
              "radial-gradient(1200px 520px at 50% 110%, #000 30%, transparent 100%)",
            background:
              "radial-gradient(1200px 520px at 50% 110%, rgba(255,255,255,.05), transparent 60%)",
          }}
        />
      </div>
    </>
  );
}
