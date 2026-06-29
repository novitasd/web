// components/home/Explore3D/Explore3D.jsx

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Explore3D.css";

// Simulación de datos provenientes de la base de datos
const products = [
  {
    id: 1,
    name: "Nike Air Max Plus",
    category: "Running",
    price: "899",
    image: "/images/airmax-plus.png",
  },
  {
    id: 2,
    name: "Nike Air Force 1",
    category: "Lifestyle",
    price: "649",
    image: "/images/airforce1.png",
  },
  {
    id: 3,
    name: "Nike Zoom Vomero",
    category: "Running",
    price: "799",
    image: "/images/vomero.png",
  },
  {
    id: 4,
    name: "Nike Dunk Low",
    category: "Casual",
    price: "699",
    image: "/images/dunklow.png",
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