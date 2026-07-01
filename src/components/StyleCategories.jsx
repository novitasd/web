import "./StyleCategories.css";

import jordan from "../assets/categorias/jordan.png";
import nike from "../assets/categorias/nike.png";
import airmax from "../assets/categorias/airmax.png";
import dunk from "../assets/categorias/dunk.png";
import limitados from "../assets/categorias/limitados.png";

const categories = [
  {
    id: 1,
    name: "Air Jordan",
    image: jordan,
  },
  {
    id: 2,
    name: "Nike",
    image: nike,
  },
  {
    id: 3,
    name: "Air Max",
    image: airmax,
  },
  {
    id: 4,
    name: "Dunk",
    image: dunk,
  },
  {
    id: 5,
    name: "Edición Limitada",
    image: limitados,
  },
];

function StyleCategories() {
  return (
    <section className="style-categories">
      <div className="style-header">
        <span>DESCUBRE</span>
        <h2>ENCUENTRA TU ESTILO</h2>
      </div>

      <div className="style-slider">
        {categories.map((category) => (
          <div key={category.id} className="style-card">
            <div className="style-image">
              <img
                src={category.image}
                alt={category.name}
              />
            </div>

            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StyleCategories;