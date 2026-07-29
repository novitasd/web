import "./Loading.css";

export default function Loading({ text = "Cargando...", fullScreen = true }) {
  return (
    <div className={`loading ${fullScreen ? "fullscreen" : ""}`}>
      <div className="loading-logo-wrapper">

        <div className="loading-ring"></div>

        <div className="loading-logo">
          TNIS
        </div>

      </div>

      <p>{text}</p>
    </div>
  );
}