import "./StyleCategories.css";

import nike from "../assets/categorias/nike.jpg";
import asics from "../assets/categorias/asisc.png";
import adidas from "../assets/categorias/adidas.jpg";
import jordan from "../assets/categorias/jordan.jpg"
import news from "../assets/categorias/new.jpg";

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
    name: "New balance",
    image: news,
  },
  {
    id: 4,
    name: "Asics",
    image: asics,
  },
  {
    id: 5,
    name: "Adidas",
    image: adidas,
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