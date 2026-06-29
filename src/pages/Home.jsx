import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Redes from "../components/Redes.jsx";
import SliderCategorias from "../components/SliderCategorias.jsx";
import videoFondo from "../assets/video/fondoretro.mp4";
import ShoeViewer from "../components/ShoeViewer";
import Explore3D from "../components/Explore3D.jsx";

import "./Home.css";

function Home() {
  return (
    <>
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

  <span className="badge">
    SAMU.PE
  </span>

  <h1>
    ELEVA TU <br />
    ESTILO
  </h1>

  <p>
    Las mejores zapatillas PK con acabados premium,
    envíos a todo el Perú y modelos exclusivos.
  </p>

  <div className="heroButtons">

    <button className="btnPrimary">
      Comprar ahora
    </button>

    <button className="btnSecondary">
      Explorar catálogo
    </button>

  </div>
</div>
        </div>
        <SliderCategorias/>
        <ShoeViewer />
        <Explore3D/>
      </main>
     
    </>
  );
}

export default Home;