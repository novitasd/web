import { useState } from "react";
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

  const siguiente = () => {
    if (inicio < categorias.length - 3) {
      setInicio(inicio + 1);
    }
  };

  const anterior = () => {
    if (inicio > 0) {
      setInicio(inicio - 1);
    }
  };

  return (
    <section className="sliderCategorias">
      <div className="sliderHeader">
        <h2>Compra nuestros iconos</h2>

        <div className="botones">
          <button onClick={anterior}>‹</button>
          <button onClick={siguiente}>›</button>
        </div>
      </div>

      <div className="slider">
        {categorias.slice(inicio, inicio + 3).map((item) => (
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