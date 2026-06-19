import Product3D from "../components/Product3D";

export default function ProductPage() {
  const product = {
    id: 1,
    name: "Air Runner X",
    price: 129.99,
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111",
      }}
    >
      <Product3D product={product} />
    </div>
  );
}