import walking from "../assets/balon.svg";
import "./Redes.css";

function TopBar() {
  return (
    <div className="topbar">

      <div className="topbar-track">
        <div className="topbar-runner">

          <div className="speed-line"></div>

          <img
            src={walking}
            alt="Jumpman"
            className="topbar-mascot"
          />

        </div>
      </div>

    </div>
  );
}

export default TopBar;