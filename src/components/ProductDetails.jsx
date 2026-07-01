import { useEffect, useState } from "react";
import {
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
  FaStar,
} from "react-icons/fa";

import "./ProductDetails.css";

function ProductDetails({ id }) {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    // Simulación del backend
    const data = [
      {
        id: 1,
        brand: "Nike",
        name: "Nike Air Force",
        price: 120,
        description:
          "Un clásico que combina historia, comodidad y estilo urbano para cualquier ocasión.",
        images: [
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
          "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
          "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        ],
        colors: ["#000000", "#ffffff", "#8b5cf6"],
        sizes: [38, 39, 40, 41, 42, 43],
      },
      {
        id: 2,
        brand: "Adidas",
        name: "Adidas Samba",
        price: 110,
        description:
          "Uno de los modelos más icónicos de Adidas Originals.",
        images: [
          "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
          "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        ],
        colors: ["#ffffff", "#000000"],
        sizes: [38, 39, 40, 41, 42],
      },
    ];

    const productoEncontrado = data.find(
      (item) => item.id === Number(id)
    );

    if (productoEncontrado) {
      setProduct(productoEncontrado);
      setSelectedImage(productoEncontrado.images[0]);
      setSelectedColor(productoEncontrado.colors[0]);
    }
  }, [id]);

  if (!product) {
    return <h2>Cargando producto...</h2>;
  }

 return (
  <section className="product-details">

    {/* Breadcrumb */}

    <div className="breadcrumb">
      Inicio / {product.brand} / {product.name}
    </div>

    {/* Layout principal */}

    <div className="product-layout">

      {/* =======================
          GALERÍA
      ======================= */}

      <div className="product-gallery">

        <div className="gallery-thumbnails">

          {product.images.map((image, index) => (

            <button
              key={index}
              type="button"
              className={`thumbnail ${
                selectedImage === image ? "active" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
              />
            </button>

          ))}

        </div>

        <div className="gallery-main">

          <img
            className="main-image"
            src={selectedImage}
            alt={product.name}
          />

        </div>

      </div>

      {/* =======================
          PANEL DERECHO
      ======================= */}

      <aside className="product-info">

        <button className="wishlist" type="button">
          <FaHeart />
        </button>

        <span className="brand">
          {product.brand}
        </span>

        <h1>{product.name}</h1>

        <p className="subtitle">
          Sneakers
        </p>

        <h2 className="price">
          S/. {product.price}
        </h2>

        <div className="info-group">

          <label>Color</label>

          <div className="colors">

            {product.colors.map((color) => (

              <button
                key={color}
                type="button"
                className={`color ${
                  selectedColor === color ? "active" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />

            ))}

          </div>

        </div>

        <div className="info-group">

          <label>Talla</label>

          <select className="size-select" defaultValue="">

            <option value="" disabled>
              Selecciona una talla
            </option>

            {product.sizes.map((size) => (

              <option key={size} value={size}>
                {size}
              </option>

            ))}

          </select>

        </div>

        <button className="buy-btn">
          Añadir al carrito
        </button>

        <div className="product-notes">

          <div className="stock">
            <strong>Última unidad disponible</strong>
          </div>

          <div className="shipping">
            <FaTruck />
            <div>
              <strong>Entrega estimada</strong>
              <span>2 - 5 días hábiles</span>
            </div>
          </div>

          <div className="returns">
            <FaShieldAlt />
            <div>
              <strong>Cambios y devoluciones</strong>
              <span>Hasta 7 días después de la compra.</span>
            </div>
          </div>

          <div className="payments">
            <FaCreditCard />
            <div>
              <strong>Métodos de pago</strong>
              <span>Visa · Mastercard · Yape · Plin</span>
            </div>
          </div>

        </div>

      </aside>

    </div>

    {/* =======================
        INFORMACIÓN
    ======================= */}

    <section className="product-extra">

      <section className="product-description">

        <h2>Descripción</h2>

        <p>
          {product.description}
        </p>

      </section>

      <section className="product-features">

        <h2>Características</h2>

        <ul>

          <li>Exterior de cuero premium.</li>
          <li>Suela de goma resistente.</li>
          <li>Tecnología Air.</li>
          <li>Plantilla acolchada.</li>
          <li>Uso casual y deportivo.</li>

        </ul>

      </section>

      <section className="product-shipping-info">

        <h2>Envíos</h2>

        <p>
          Realizamos envíos a todo el Perú.
          <br />
          Tiempo estimado: 24 - 72 horas.
        </p>

      </section>

    </section>

  </section>
);
}

export default ProductDetails;