import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import DarkVeil from "./components/DarkVeil";

export default function App() {
  // optional: shift the veil down a bit (e.g., 50px) so it doesn’t sit under the sticky navbar
  const veilTop = 70; // change to 50 for a slight downward shift

  return (
    <>
      {/* Global background */}
      <div
        style={{
          position: "fixed",
          top: veilTop,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          overflow: "hidden",
          opacity: 0.75, // soften the effect behind content
          pointerEvents: "none", // never block clicks
        }}
      >
        <DarkVeil
          // 🔵 baby-blue / cyan tint that matches your brand
          hueShift={350}
          // subtle film noise + scanlines for texture, not distraction
          noiseIntensity={0.05}
          scanlineIntensity={0.06}
          scanlineFrequency={0.08}
          // gentle warp so it feels alive, not wobbly
          warpAmount={0.08}
          // slightly slower motion
          speed={0.65}
          // drop rendering load a bit on big screens if needed
          resolutionScale={1}
        />
      </div>

      {/* Foreground */}
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}