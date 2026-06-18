import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Redes from "../components/Redes.jsx";
import Catalogo from "../components/Catalogo.jsx";
import videoFondo from "../assets/video/fondoretro.mp4";
import ShoeViewer from "../components/ShoeViewer";

import "./Home.css";

function Home() {
  return (
    <>
      <Redes />
      <Navbar />

      <main>
        <div className="fondo">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-fondo"
          >
            <source src={videoFondo} type="video/mp4" />
          </video>

          <div className="titulo">
            <h1>SAMU.PE</h1> 
          </div>
        </div>
        <Catalogo/>
        <ShoeViewer />
      </main>

      <Footer />
    </>
  );
}

export default Home;