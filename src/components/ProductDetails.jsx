import { useEffect, useState } from "react";
import {
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
} from "react-icons/fa";

import { getProductBySlug } from "../services/product.service";
import "./ProductDetails.css";

function ProductDetails({ slug }) {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);

useEffect(() => {
  async function cargarProducto() {
    try {
      const response = await getProductBySlug(slug);

      const producto = response.product;

      setProduct(producto);

      if (producto.images?.length > 0) {
        setSelectedImage(producto.images[0].url);
      }
    } catch (error) {
      console.error("Error cargando producto:", error);
    }
  }

  cargarProducto();
}, [slug]);

  if (!product) {
    return <h2>Cargando producto...</h2>;
  }
  return (
 <section className="product-details">

  <div className="breadcrumb">
    Inicio / {product.category?.name} / {product.name}
  </div>

  <div className="product-layout">

    {/* GALERÍA */}

    <div className="product-left">

      <div className="product-gallery">

        <div className="gallery-thumbnails">

           {product.images.map((image) => (
            <button
              key={image.id}
              type="button"
              className={`thumbnail ${
                selectedImage === image.url ? "active" : ""
              }`}
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={product.name}
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

    </div>

    {/* INFORMACIÓN */}

    <aside className="product-info">

      <button className="wishlist" type="button">
        <FaHeart />
      </button>

      <span className="brand">
        {product.brand?.name}
      </span>

      <h1>{product.name}</h1>

      <p className="subtitle">
         {product.category?.name}
      </p>

      <h2 className="price">
        S/. {product.price}
      </h2>

      <div className="info-group">

        <label>Talla</label>

        <select
          className="size-select"
          value={selectedSize}
          onChange={(e) => {
  const sizeId = e.target.value;

  setSelectedSize(sizeId);

  const talla = product.sizes.find(
    (item) => item.sizeId === sizeId
  );

  setSelectedStock(talla ? talla.stock : null);
}}
        >
          <option value="">
            Selecciona una talla
          </option>

          {product.sizes.map((size) => (
            <option
              key={size.id}
              value={size.sizeId}
            >
              {size.size}
            </option>
          ))}

        </select>

      </div>

      <button
  className="buy-btn"
  disabled={selectedStock === 0}
>
  {selectedStock === 0
    ? "Sin stock"
    : "Añadir al carrito"}
</button>

      <div className="product-notes">

      <div className="stock">

  <strong>Stock disponible</strong>

  {selectedStock !== null && (
    <p>
      {selectedStock > 0
        ? `${selectedStock} pares disponibles`
        : "Agotado"}
    </p>
  )}

</div>

        <div className="shipping">

          <FaTruck />

          <div>

            <strong>Entrega estimada</strong>

            <span> 1 - 3 días hábiles</span>

          </div>

        </div>

        <div className="returns">

          <FaShieldAlt />

          <div>

            <strong>Cambios y devoluciones</strong>

            <span> Hasta 1 dia.</span>

          </div>

        </div>

        <div className="payments">

          <FaCreditCard />

          <div>

            <strong>Métodos de pago</strong>

            <span> Visa · Yape · Plin</span>

          </div>

        </div>

      </div>

    </aside>
      <section className="product-extra">

    <section className="product-description">

      <h2>Descripción</h2>

      <p>{product.description || "Este producto no tiene descripción."}</p>

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
        Tiempo estimado: 24 horas.
      </p>

    </section>

  </section>

  </div>

  {/* DESCRIPCIÓN */}

</section>
);

}

export default ProductDetails;