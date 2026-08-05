import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Loading from "../components/Loading/Loading";
import Destacados from "../components/SliderCategorias";

import ProductBreadcrumb from "./Product/ProductBreadcrumb";
import ProductGallery from "./Product/ProductGallery";
import ProductInfo from "./Product/ProductInfo";
import ProductExtra from "./Product/ProductExtra";

import ProductRelated from "../components/ProductRelated/ProductRelated";

import {
  calculateStock,
  addProductToCart,
} from "../utils/product.utils";

import { getProductBySlug } from "../services/product.service";
import { useCart } from "../context/CartContext";

import "./ProductDetails.css";

function ProductDetails({ slug }) {
  const [product, setProduct] = useState(null);

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

const navigate = useNavigate();

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
        console.error("Error cargando producto:", error);

        setProduct(null);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    cargarProducto();
  }, [slug]);

  useEffect(() => {
  if (selectedSize) {
    setAddedToCart(false);
  }
}, [selectedSize]);
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

          <h1>Producto no disponible</h1>

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

  const { availableStock } = calculateStock(
    product,
    selectedSize,
    cart
  );

  /* ========================================
     AGREGAR AL CARRITO
  ======================================== */
const handleAddToCart = () => {

  if (addedToCart) {
    navigate("/checkout");
    return;
  }

  addProductToCart({
    product,
    selectedSize,
    selectedImage,
    cart,
    addToCart,
  });

  setAddedToCart(true);

  setSelectedSize("");
  setSelectedStock(null);
};

  /* ========================================
     PRODUCTO
  ======================================== */

  return (
    <section className="product-details">

      <ProductBreadcrumb product={product} />

      <div className="product-layout">

        <ProductGallery
          images={product.images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          productName={product.name}
        />

       <ProductInfo
  product={product}
  selectedSize={selectedSize}
  setSelectedSize={setSelectedSize}
  selectedStock={selectedStock}
  setSelectedStock={setSelectedStock}
  availableStock={availableStock}
  handleAddToCart={handleAddToCart}
  addedToCart={addedToCart}
/>

        <ProductExtra product={product} />

      </div>
    <ProductRelated
    product={product}
/>
      <Destacados />

    </section>
  );
}

export default ProductDetails;