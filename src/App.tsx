// src/App.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import BackgroundFX from "./components/BackgroundFX";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-zinc-100">
      {/* Premium background sits behind everything */}
      <BackgroundFX />

      {/* Sticky header across sections */}
      <Header />

      {/* Page sections */}
      <main>
        <Hero />
        <Work />
        <About />
        {/* Contact section will go here next */}
      </main>
    </div>
  );
}
