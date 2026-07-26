import { useCallback, useRef } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import LightRays from "./components/ui/LightRays";
import logo from "./assets/images/club_logo.png";

const LAUNCH_URL = "https://specathon-2026.gradientclub.in";

// Premium palette derived from the project's design tokens
const CONFETTI_COLORS = ["#a4cbeb", "#186275", "#5b7797", "#ededed", "#24015c"];

function fireLaunchCelebration() {
  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const defaults = {
    colors: CONFETTI_COLORS,
    ticks: 90,
    gravity: 0.9,
    scalar: 0.85,
    shapes: ["circle", "square"],
    zIndex: 9999,
  };

  // Two symmetrical bursts from the lower-left and lower-right edges,
  // converging upward — evokes a product-launch reveal, not a party.
  confetti({
    ...defaults,
    particleCount: 55,
    angle: 60,
    spread: 52,
    origin: { x: 0.1, y: 0.72 },
  });

  confetti({
    ...defaults,
    particleCount: 55,
    angle: 120,
    spread: 52,
    origin: { x: 0.9, y: 0.72 },
  });

  // A tighter central burst slightly after — the "unveil" moment
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 35,
      angle: 90,
      spread: 38,
      origin: { x: 0.5, y: 0.58 },
      gravity: 0.7,
      scalar: 0.75,
    });
  }, 160);
}

export default function App() {
  const firedRef = useRef(false);

  const handleLaunch = useCallback(() => {
    if (firedRef.current) return;
    firedRef.current = true;

    fireLaunchCelebration();

    setTimeout(() => {
      window.location.replace(LAUNCH_URL);
    }, 1000);
  }, []);

  return (
    <div className="app">
      <LightRays
        raysOrigin="top-center"
        raysColor="#7b8787"
        raysSpeed={0.18}
        lightSpread={0.85}
        rayLength={2.5}
        followMouse={true}
        mouseInfluence={0.02}
        noiseAmount={0.01}
        distortion={0.01}
        pulsating={false}
        fadeDistance={1}
        saturation={0.8}
      />

      <a href="/" className="logo-link">
        <img
          src={logo}
          alt="Gradient Club"
          className="logo"
        />
      </a>

      <div className="domain">
        GRADIENTCLUB.IN
      </div>

      <main className="hero">
        <button
          className="launch-btn"
          onClick={handleLaunch}
          type="button"
          aria-label="Launch Specathon 2026 website"
        >
          <span className="launch-btn__text">Launch Now</span>
          <span className="launch-btn__shimmer" aria-hidden="true" />
        </button>

        <p className="subtitle">
          Crafted with Passion, Built with Innovation.
        </p>
      </main>

      <footer className="footer">
        <span className="copyright">
          © 2026 · GradientClub.in
        </span>

        <span className="crafted">
          Crafted by Gradient Club
        </span>
      </footer>
    </div>
  );
}