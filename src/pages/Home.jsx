import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Redes from "../components/Redes.jsx";
import SliderCategorias from "../components/SliderCategorias.jsx";
import videoFondo from "../assets/video/fondoretro.mp4";
import ShoeViewer from "../components/ShoeViewer";
import Explore3D from "../components/Explore3D.jsx";
import GallerySection from "../components/GallerySection.jsx";
import StyleCategories from "../components/StyleCategories.jsx";
import "./Home.css";

import { Link } from "react-router-dom";

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
    @SAMU.PE
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
     <a className="btnPrimary" href="https://wa.me/51902824286">
       Comprar ahora
     </a>

    <Link to="/catalogo" className="btnSecondary">
  Explorar catálogo
</Link>

  </div>
</div>
        </div>
        <StyleCategories/>
        <SliderCategorias/>
        <ShoeViewer />
        <Explore3D/>
        <GallerySection/>
        
      </main>
     
    </>
  );
}

export default Home;