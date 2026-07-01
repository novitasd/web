import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Explore3D.css";

import jordan from "../assets/categorias/jordan.png";
import nike from "../assets/categorias/nike.png";
import airmax from "../assets/categorias/airmax.png";
import dunk from "../assets/categorias/dunk.png";

const products = [
  {
    id: 1,
    name: "Air Jordan 4 Black Cat",
    category: "Jordan",
    price: "899",
    image: jordan,
  },
  {
    id: 2,
    name: "Nike Air Force 1",
    category: "Nike",
    price: "649",
    image: nike,
  },
  {
    id: 3,
    name: "Nike Air Max",
    category: "Air Max",
    price: "799",
    image: airmax,
  },
  {
    id: 4,
    name: "Nike Dunk Low",
    category: "Dunk",
    price: "699",
    image: dunk,
  },
];

const Explore3D = () => {
  return (
    <section className="explore3d">
      <div className="explore3d-slider-wrapper">

        <button className="slider-arrow left">
          <FaArrowLeft />
        </button>

        <div className="explore3d-slider">
          {products.map((product) => (
            <div className="product3d-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />

                <span className="badge3d">
                  3D
                </span>
              </div>

              <div className="product-info">
                <small>{product.category}</small>

                <h3>{product.name}</h3>

                <h4>S/. {product.price}</h4>

                <Link
                  to={`/producto/${product.id}`}
                  className="view3d"
                >
                  Ver en 3D →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-arrow right">
          <FaArrowRight />
        </button>

      </div>

      <div className="slider-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Explore3D;