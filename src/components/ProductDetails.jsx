import { useEffect, useState } from "react";
import {
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
} from "react-icons/fa";

import { getProductBySlug } from "../services/product.service";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails({ slug }) {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
 const { cart, addToCart } = useCart();

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
    return <h2>Cargando producto...</h2>; }

    
    const selectedSizeData = product.sizes.find(
  (item) => item.sizeId === selectedSize
);

const cartItem = cart.find(
  (item) =>
    item.productId === product.id &&
    item.sizeId === selectedSize
);

const quantityInCart = cartItem?.quantity ?? 0;

const realStock = selectedSizeData
  ? Number(selectedSizeData.stock)
  : 0;

const availableStock = Math.max(
  0,
  realStock - quantityInCart
);
  

const handleAddToCart = () => {
  if (!selectedSize) {
    alert("Selecciona una talla.");
    return;
  }

  const selectedSizeData = product.sizes.find(
    (item) => item.sizeId === selectedSize
  );

  if (!selectedSizeData) {
    alert("Talla no encontrada.");
    return;
  }

  const cartItem = cart.find(
    (item) =>
      item.productId === product.id &&
      item.sizeId === selectedSizeData.sizeId
  );

  const quantityInCart =
    cartItem?.quantity ?? 0;

  const stock =
    Number(selectedSizeData.stock);

  const available =
    stock - quantityInCart;

  if (available <= 0) {
    alert(
      "Ya agregaste todo el stock disponible de esta talla."
    );
    return;
  }

  addToCart({
    productId: product.id,
    sizeId: selectedSizeData.sizeId,
    quantity: 1,
    stock,

    product: {
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: Number(product.price),
      image: selectedImage,
      brand: product.brand?.name,
      size: selectedSizeData.size,
    },
  });

  alert("Producto agregado al carrito.");
};
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

         {product.sizes.map((size) => {
  const outOfStock = Number(size.stock) <= 0;

  return (
    <option
      key={size.id}
      value={size.sizeId}
      disabled={outOfStock}
    >
      {size.size}
      {outOfStock ? " — Agotado" : ""}
    </option>
  );
})}

        </select>

      </div>

<button
  type="button"
  className="buy-btn"
  onClick={handleAddToCart}
  disabled={
    !selectedSize ||
    availableStock <= 0
  }
>
  {!selectedSize
    ? "Selecciona una talla"
    : availableStock <= 0
      ? "Agotado"
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