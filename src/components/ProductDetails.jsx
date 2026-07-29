import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../components/Loading/Loading";
import Destacados from "../components/SliderCategorias";
import SizeSelector from "../components/Product/SizeSelector/SizeSelector";


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

  // NUEVOS ESTADOS
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { cart, addToCart } = useCart();


  /* ========================================
     CARGAR PRODUCTO
  ======================================== */

  useEffect(() => {

    async function cargarProducto() {

      try {

        setLoading(true);
        setError(false);
        setProduct(null);

        // Limpiamos selecciones si cambia el slug
        setSelectedImage("");
        setSelectedSize("");
        setSelectedStock(null);

        const response = await getProductBySlug(slug);

        const producto = response.product;

        setProduct(producto);

        if (producto.images?.length > 0) {
          setSelectedImage(producto.images[0].url);
        }

      } catch (error) {

        console.error(
          "Error cargando producto:",
          error
        );

        setProduct(null);
        setError(true);

      } finally {

        setLoading(false);

      }

    }

    cargarProducto();

  }, [slug]);


  /* ========================================
     CARGANDO
  ======================================== */

 if (loading) {
    return <Loading />;
}


  /* ========================================
     PRODUCTO NO DISPONIBLE
  ======================================== */

  if (error || !product) {

    return (
      <section className="product-not-found">

        <div className="product-not-found-content">

          <span className="not-found-code">
            404
          </span>

          <h1>
            Producto no disponible
          </h1>

          <p>
            Este producto no está disponible actualmente
            o ha sido retirado de nuestra tienda.
          </p>

          <Link
            to="/catalogo"
            className="back-catalog-btn"
          >
            Ver catálogo
          </Link>

        </div>

      </section>
    );

  }


  /* ========================================
     STOCK
  ======================================== */

  const selectedSizeData = product.sizes.find(
    (item) => item.sizeId === selectedSize
  );

  const cartItem = cart.find(
    (item) =>
      item.productId === product.id &&
      item.sizeId === selectedSize
  );

  const quantityInCart =
    cartItem?.quantity ?? 0;

  const realStock = selectedSizeData
    ? Number(selectedSizeData.stock)
    : 0;

  const availableStock = Math.max(
    0,
    realStock - quantityInCart
  );


  /* ========================================
     AGREGAR AL CARRITO
  ======================================== */

 const handleAddToCart = () => {

  if (!selectedSize) {

    toast.error("Selecciona una talla.");

    return;
  }

  const selectedSizeData = product.sizes.find(
    (item) => item.sizeId === selectedSize
  );

  if (!selectedSizeData) {

    toast.error("Talla no encontrada.");

    return;
  }

  const cartItem = cart.find(
    (item) =>
      item.productId === product.id &&
      item.sizeId === selectedSizeData.sizeId
  );

  const quantityInCart = cartItem?.quantity ?? 0;

  const stock = Number(selectedSizeData.stock);

  const available = stock - quantityInCart;

  if (available <= 0) {

    toast.error(
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

  toast.success("Producto agregado al carrito.");

};


  /* ========================================
     PRODUCTO
  ======================================== */

  return (

    <section className="product-details">


      {/* BREADCRUMB */}

       <nav className="breadcrumb">
  <Link to="/">Inicio</Link>

  <span> / </span>

  <Link to="/catalogo">
    catalogo
  </Link>

  <span> / </span>

  <span>{product.name}</span>
</nav>


      <div className="product-layout">


        {/* =================================
            GALERÍA
        ================================= */}

        <div className="product-left">

          <div className="product-gallery">


            {/* MINIATURAS */}

            <div className="gallery-thumbnails">

              {product.images?.map((image) => (

                <button
                  key={image.id}
                  type="button"
                  className={`thumbnail ${
                    selectedImage === image.url
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedImage(image.url)
                  }
                >

                  <img
                    src={image.url}
                    alt={product.name}
                  />

                </button>

              ))}

            </div>


            {/* IMAGEN PRINCIPAL */}

            <div className="gallery-main">

              {selectedImage && (

                <img
                  className="main-image"
                  src={selectedImage}
                  alt={product.name}
                />

              )}

            </div>

          </div>

        </div>


        {/* =================================
            INFORMACIÓN
        ================================= */}

        <aside className="product-info">


          <button
            className="wishlist"
            type="button"
            aria-label="Agregar a favoritos"
          >

            <FaHeart />

          </button>


          <span className="brand">

            {product.brand?.name}

          </span>


          <h1>

            {product.name}

          </h1>


          <p className="subtitle">

            {product.category?.name}

          </p>


          <h2 className="price">

            S/. {product.price}

          </h2>


          {/* TALLAS */}

          <div className="info-group">
            <SizeSelector
  sizes={product.sizes}
  selectedSize={selectedSize}
  setSelectedSize={setSelectedSize}
  setSelectedStock={setSelectedStock}
/>

          </div>


          {/* BOTÓN CARRITO */}

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


          {/* =================================
              INFORMACIÓN ADICIONAL
          ================================= */}

          <div className="product-notes">


            {/* STOCK */}

            <div className="stock">

              <strong>
                Stock disponible
              </strong>


              {selectedStock !== null && (

                <p>

                  {selectedStock > 0
                    ? `${selectedStock} pares disponibles`
                    : "Agotado"}

                </p>

              )}

            </div>


            {/* ENVÍO */}

            <div className="shipping">

              <FaTruck />

              <div>

                <strong>
                  Entrega estimada
                </strong>

                <span>
                  {" "}1 - 3 días hábiles
                </span>

              </div>

            </div>


            {/* CAMBIOS */}

            <div className="returns">

              <FaShieldAlt />

              <div>

                <strong>
                  Cambios y devoluciones
                </strong>

                <span>
                  {" "}Hasta 1 día.
                </span>

              </div>

            </div>


            {/* PAGOS */}

            <div className="payments">

              <FaCreditCard />

              <div>

                <strong>
                  Métodos de pago
                </strong>

                <span>
                  {" "}Visa · Yape · Plin
                </span>

              </div>

            </div>

          </div>

        </aside>


        {/* =================================
            INFORMACIÓN EXTRA
        ================================= */}

        <section className="product-extra">


          {/* DESCRIPCIÓN */}

          <section className="product-description">

            <h2>
              Descripción
            </h2>

            <p>

              {product.description ||
                "Este producto no tiene descripción."}

            </p>

          </section>


          {/* CARACTERÍSTICAS */}

          <section className="product-features">

            <h2>
              Características
            </h2>

            <ul>

              <li>
                Producto 100% nuevo.
              </li>

              <li>
                Calidad premium.
              </li>

              <li>
                Incluye caja original.
              </li>

              <li>
                Plantilla acolchada.
              </li>

              <li>
                Ideal para uso casual y urbano.
              </li>

            </ul>

          </section>


          {/* ENVÍOS */}

          <section className="product-shipping-info">

            <h2>
              Envíos
            </h2>

            <p>

              Realizamos envíos a todo el Perú.

              <br />

              Tiempo estimado: 24 horas.

            </p>

          </section>

        </section>

      </div>
    <Destacados />
    </section>
    

  );

}

export default ProductDetails;