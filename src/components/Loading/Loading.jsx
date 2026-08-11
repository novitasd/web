import "./Loading.css";

export default function Loading({
  text = "Cargando",
  fullScreen = true,
}) {
  return (
    <div className={`loading ${fullScreen ? "fullscreen" : ""}`}>

      <div className="loading-logo-wrapper">

        {/* Anillo exterior */}
        <div className="loading-ring loading-ring-outer"></div>

        {/* Anillo interior */}
        <div className="loading-ring loading-ring-inner"></div>

        {/* Logo */}
        <div className="loading-logo">
          <span>TNIS</span>
        </div>

        {/* Punto de luz */}
        <div className="loading-orbit-dot"></div>

      </div>

      <div className="loading-text">
        <span>{text}</span>

        <span className="loading-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </div>

    </div>
  );
}