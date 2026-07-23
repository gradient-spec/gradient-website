import "./App.css";
import LightRays from "./components/ui/LightRays";
import logo from "./assets/images/club_logo.png";

export default function App() {
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
    <h1>Launching Soon</h1>

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