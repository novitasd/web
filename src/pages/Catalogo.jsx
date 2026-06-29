import { useEffect, useState } from "react";
import "./Catalogo.css";
import Navbar from "../components/Navbar";

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
  <aside className="sidebar">
    <h3>Categorías</h3>

    <ul>
      <li>Nike</li>
      <li>Jordan</li>
      <li>Adidas</li>
      <li>New Balance</li>
      <li>Puma</li>
    </ul>

    <hr />

    <h3>Talla</h3>

    <h3>Precio</h3>

    <h3>Color</h3>

  </aside>

  <main className="productos">

    <div className="top">
      <h2>Catálogo ({productos.length})</h2>

      <select>
        <option>Más recientes</option>
        <option>Menor precio</option>
        <option>Mayor precio</option>
      </select>
    </div>

    <div className="grid">
      {productos.map((p)=>(
        <article className="producto" key={p.id}>

          <div className="imagen">
            <img src={p.imagen} alt={p.nombre}/>
          </div>

          <span className="etiqueta">Superventas</span>

          <h3>{p.nombre}</h3>

          <p className="descripcion">
            Zapatillas deportivas
          </p>

          <strong>${p.precio}</strong>

        </article>
      ))}
    </div>

  </main>

</section>
  );
}

export default Catalogo;