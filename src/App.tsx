// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import BackgroundFX from "./components/BackgroundFX";
import Slug from "./pages/projects/Slug";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg text-zinc-100">
        {/* Premium background sits behind everything */}
        <BackgroundFX />

        {/* Sticky header across sections */}
        <Header />

        {/* Routes */}
        <main>
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Work />
                  <About />
                  {/* Contact section will go here next */}
                </>
              }
            />

            {/* Dynamic project detail page */}
            <Route path="/projects/:slug" element={<Slug />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
