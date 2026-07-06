import { Link, useParams } from "react-router-dom";
import productos from "../data/productos";
import "./Catalogo.css";

function Catalogo() {
  const { categoria } = useParams();

  const productosFiltrados = categoria
    ? productos.filter(
        (p) => p.categoria === decodeURIComponent(categoria)
      )
    : productos;

  return (
    <section className="catalogo">
      <main className="productos">

        <div className="grid">
          {productosFiltrados.map((p) => (
            <Link
              key={p.id}
              to={`/producto/${p.id}`}
              className="producto-link"
            >
              <article className="producto">

                <div className="imagen">
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                  />
                </div>

                <span className="etiqueta">
                  {p.marca}
                </span>

                <h3>{p.nombre}</h3>

                <p className="descripcion">
                  {p.categoria}
                </p>

                <strong>S/. {p.precio}</strong>

              </article>
            </Link>
          ))}
        </div>

      </main>
    </section>
  );
}

export default Catalogo;