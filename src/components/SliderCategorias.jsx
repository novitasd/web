import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productos from "../data/productos";
import "./SliderCategorias.css";

const categorias = [
  ...new Map(
    productos.map((producto) => [
      producto.categoria,
      {
        id: producto.id,
        nombre: producto.categoria,
        imagen: producto.imagen,
      },
    ])
  ).values(),
];

export default function SliderCategorias() {
  const [inicio, setInicio] = useState(0);
  const [cantidadVisible, setCantidadVisible] = useState(3);

  useEffect(() => {
    const actualizarCantidad = () => {
      if (window.innerWidth <= 768) {
        setCantidadVisible(1);
      } else if (window.innerWidth <= 1024) {
        setCantidadVisible(2);
      } else {
        setCantidadVisible(3);
      }
    };

    actualizarCantidad();

    window.addEventListener("resize", actualizarCantidad);

    return () => {
      window.removeEventListener("resize", actualizarCantidad);
    };
  }, []);

  useEffect(() => {
    if (inicio > categorias.length - cantidadVisible) {
      setInicio(Math.max(0, categorias.length - cantidadVisible));
    }
  }, [cantidadVisible, inicio]);

  const siguiente = () => {
    if (inicio < categorias.length - cantidadVisible) {
      setInicio((prev) => prev + 1);
    }
  };

  const anterior = () => {
    if (inicio > 0) {
      setInicio((prev) => prev - 1);
    }
  };

  return (
    <section className="sliderCategorias">
      <div className="sliderHeader">
        <h2>Compra nuestros iconos</h2>

        <div className="botones">
          <button onClick={anterior} disabled={inicio === 0}>
            ‹
          </button>

          <button
            onClick={siguiente}
            disabled={inicio >= categorias.length - cantidadVisible}
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="slider"
        style={{
          gridTemplateColumns: `repeat(${cantidadVisible}, 1fr)`,
        }}
      >
        {categorias
          .slice(inicio, inicio + cantidadVisible)
          .map((item) => (
            <Link
              key={item.id}
              to={`/catalogo/${encodeURIComponent(item.nombre)}`}
              className="item"
            >
              <img src={item.imagen} alt={item.nombre} />
              <button>{item.nombre}</button>
            </Link>
          ))}
      </div>
    </section>
  );
}