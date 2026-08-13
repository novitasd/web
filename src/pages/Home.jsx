import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import SliderCategorias from "../components/SliderCategorias.jsx";
import StyleCategories from "../components/StyleCategories.jsx";
import GallerySection from "../components/GallerySection.jsx";

import videoFondo from "../assets/video/fondoretro.mp4";
import heroPoster from "../assets/video/heroposter.png";

import "./Home.css";

function Home() {
  const [videoReady, setVideoReady] = useState(false);

  const homeTitle =
    "TNIS.PE | Jordan, Nike, ASICS y Sneakers en Perú";

  const homeDescription =
    "Los tenis más buscados en Perú: Jordan, Nike, ASICS y más. Descubre nuestra colección de modelos exclusivos, tallas disponibles y compra online en TNIS.PE.";

  const homeUrl =
    "https://www.tnisperu.com/";

  return (
    <>
      {/* ========================================
          SEO - PÁGINA PRINCIPAL
      ======================================== */}

      <Helmet>
        <title>{homeTitle}</title>

        <meta
          name="description"
          content={homeDescription}
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={homeUrl}
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content={homeTitle}
        />

        <meta
          property="og:description"
          content={homeDescription}
        />

        <meta
          property="og:url"
          content={homeUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="TNIS.PE"
        />

        <meta
          property="og:locale"
          content="es_PE"
        />

        <meta
          property="og:image"
          content={heroPoster}
        />

        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={homeTitle}
        />

        <meta
          name="twitter:description"
          content={homeDescription}
        />

        <meta
          name="twitter:image"
          content={heroPoster}
        />

        {/* WebSite Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TNIS.PE",
            url: homeUrl,
            description: homeDescription,
          })}
        </script>
      </Helmet>

      <main>
        <div className="fondo">

          <div className="hero-media">

            <img
              src={heroPoster}
              alt="TNIS.PE - Sneakers Jordan, Nike y ASICS"
              className={`hero-poster ${videoReady ? "hide" : ""}`}
            />

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="video-fondo"
              onPlaying={() => {
                setTimeout(() => {
                  setVideoReady(true);
                }, 250);
              }}
            >
              <source
                src={videoFondo}
                type="video/mp4"
              />
            </video>

          </div>

          <div className="titulo">

            <span className="badge">
              @TNISPERU
            </span>

            <h1>
              ELEVA TU <br />
              ESTILO
            </h1>

            <p>
              Las mejores zapatillas con acabados premium,
              envíos a todo el Perú y modelos exclusivos.
            </p>

            <div className="heroButtons">

              <a
                className="btnPrimary"
                href="https://wa.me/51902824286"
              >
                Comprar ahora
              </a>

              <Link
                to="/catalogo"
                className="btnSecondary"
              >
                Explorar catálogo
              </Link>

            </div>

          </div>

        </div>

        <StyleCategories />

        <SliderCategorias />

        <GallerySection />

      </main>
    </>
  );
}

export default Home;