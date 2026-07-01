import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

function ProductPage() {
  const { id } = useParams();

  return (
    <main className="product-page">
      <ProductDetails id={id} />
    </main>
  );
}

export default ProductPage;