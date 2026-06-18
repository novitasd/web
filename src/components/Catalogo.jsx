import { useEffect, useState } from "react";
import "./Catalogo.css";

function Catalogo() {
  const [productos, setProductos] = useState([]);

  // Simulando API (como si viniera de backend)
  useEffect(() => {
    const dataSimulada = [
      {
        id: 1,
        nombre: "Nike Air Force",
        precio: 120,
        imagen:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      },
      {
        id: 2,
        nombre: "Adidas Samba",
        precio: 110,
        imagen:
          "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      },
      {
        id: 3,
        nombre: "Puma RS-X",
        precio: 95,
        imagen:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      },
      {
        id: 4,
        nombre: "New Balance 550",
        precio: 130,
        imagen:
          "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
      },
      {
        id: 5,
        nombre: "Nike Air Force",
        precio: 120,
        imagen:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      },
      {
        id: 6,
        nombre: "Adidas Samba",
        precio: 110,
        imagen:
          "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      },
      {
        id: 7,
        nombre: "Puma RS-X",
        precio: 95,
        imagen:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      },
      {
        id: 8,
        nombre: "New Balance 550",
        precio: 130,
        imagen:
          "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
      },
    ];

    // simulamos delay de API
    setTimeout(() => {
      setProductos(dataSimulada);
    }, 500);
  }, []);

  return (
    <section className="catalogo">
      <h2>CATÁLOGO</h2>

      <div className="grid">
        {productos.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.imagen} alt={p.nombre} className="img" />

            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>

            <button>Ver producto</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;