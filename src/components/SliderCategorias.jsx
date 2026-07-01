import { useState } from "react";
import "./SliderCategorias.css";

const categorias = [
  {
    id: 1,
    nombre: "Air Jordan",
    imagen:
      "https://cdn-images.farfetch-contents.com/23/53/42/98/23534298_53693492_1000.jpg",
  },
  {
    id: 2,
    nombre: "Nike",
    imagen:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/air-force-1-07-shoes.png",
  },
  {
    id: 3,
    nombre: "Air Max",
    imagen:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/air-max-dn-shoes.png",
  },
  {
    id: 4,
    nombre: "Dunk",
    imagen:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dunk-low-shoes.png",
  },
  {
    id: 5,
    nombre: "Edición Limitada",
    imagen:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/air-jordan-4-rm-shoes.png",
  },
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
          <div className="item" key={item.id}>
            <img src={item.imagen} alt={item.nombre} />
            <button>{item.nombre}</button>
          </div>
        ))}
      </div>
    </section>
  );
}