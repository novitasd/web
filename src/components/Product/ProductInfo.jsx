import { FaHeart } from "react-icons/fa";
import SizeSelector from "./SizeSelector/SizeSelector";
import ProductNotes from "./ProductNotes";

import "./ProductInfo.css";

function ProductInfo({
  product,
  selectedSize,
  setSelectedSize,
  selectedStock,
  setSelectedStock,
  availableStock,
  handleAddToCart,
  addedToCart,
})  {
  return (
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

      <h1>{product.name}</h1>

      <p className="subtitle">
        {product.category?.name}
      </p>

      <h2 className="price">
        S/. {product.price}
      </h2>

      <div className="info-group">
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          setSelectedStock={setSelectedStock}
        />
      </div>

       <button
  type="button"
  className="buy-btn"
  onClick={handleAddToCart}
  disabled={
    !addedToCart &&
    (!selectedSize || availableStock <= 0)
  }
>
  {addedToCart
    ? "Ver carrito"
    : !selectedSize
      ? "Selecciona una talla"
      : availableStock <= 0
        ? "Agotado"
        : "Añadir al carrito"}
</button>

      <ProductNotes
        selectedStock={selectedStock}
      />

    </aside>
  );
}

export default ProductInfo;