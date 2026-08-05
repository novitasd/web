import walking from "../assets/lufy.svg";

import "./Redes.css";

function TopBar() {
  return (
    <div className="topbar">

      <img
        src={walking}
        alt=""
        className="topbar-mascot"
      />

    </div>
  );
}

export default TopBar;