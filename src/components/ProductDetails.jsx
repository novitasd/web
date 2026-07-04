import { useEffect, useState } from "react";
import {
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
} from "react-icons/fa";

import productos from "../data/productos";
import "./ProductDetails.css";

function ProductDetails({ id }) {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

useEffect(() => {
  const productoEncontrado = productos.find(
    (item) => item.id === Number(id)
  );

  if (productoEncontrado) {
    setProduct(productoEncontrado);

    setSelectedImage(
      productoEncontrado.imagenes?.[0] ||
      productoEncontrado.imagen
    );
  }
}, [id]);

  if (!product) {
    return <h2>Cargando producto...</h2>;
  }
  return (
  <section className="product-details">

    <div className="breadcrumb">
      Inicio / {product.categoria} / {product.nombre}
    </div>

    <div className="product-layout">

      {/* GALERÍA */}

      <div className="product-left">

        <div className="product-gallery">

          <div className="gallery-thumbnails">

            {(product.imagenes || [product.imagen]).map((image, index) => (
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
                  alt={`${product.nombre} ${index + 1}`}
                />

              </button>

            ))}

          </div>

          <div className="gallery-main">

            <img
              className="main-image"
              src={selectedImage}
              alt={product.nombre}
            />

          </div>

        </div>

        {/* DESCRIPCIÓN */}

        <section className="product-extra">

          <section className="product-description">

            <h2>Descripción</h2>

            <p>
  Zapatilla 100% original confeccionada con materiales de alta calidad.
  Ideal para uso diario, colección y estilo urbano.
</p>

          </section>

          <section className="product-features">

            <h2>Características</h2>

            <ul>
              <li>Producto 100% nuevo.</li>
              <li>Calidad premium.</li>
              <li>Incluye caja original.</li>
              <li>Plantilla acolchada.</li>
              <li>Ideal para uso casual y urbano.</li>
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

      </div>

      {/* INFORMACIÓN */}

      <aside className="product-info">

        <button className="wishlist" type="button">
          <FaHeart />
        </button>

        <span className="brand">
          {product.marca}
        </span>

        <h1>{product.nombre}</h1>

        <p className="subtitle">
          {product.categoria}
        </p>

        <h2 className="price">
          S/. {product.precio}
        </h2>

        <div className="info-group">

          <label>Talla</label>

<select
  className="size-select"
  value={selectedSize}
  onChange={(e) => setSelectedSize(e.target.value)}
>
  <option value="">
    Selecciona una talla
  </option>

  {[38, 39, 40, 41, 42, 43].map((size) => (
    <option
      key={size}
      value={size}
    >
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
            <strong>Stock disponible</strong>
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

  </section>
);

}

export default ProductDetails;