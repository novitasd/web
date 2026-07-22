import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../services/product.service";
import "./Catalogo.css";

function Catalogo() {
    const { categoria } = useParams();

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function cargarProductos() {

            try {

                const response = await getProducts();

                // response.data contiene los productos
                setProductos(response.data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        }

        cargarProductos();

    }, []);

    const productosFiltrados = categoria
        ? productos.filter(
              (p) =>
                  p.category?.name === decodeURIComponent(categoria)
          )
        : productos;

    if (loading) {

        return (
            <section className="catalogo">
                <p>Cargando productos...</p>
            </section>
        );

    }

    return (
        <section className="catalogo">
            <main className="productos">

                <div className="grid">

                    {productosFiltrados.map((p) => (

                        <Link
                            key={p.id}
                            to={`/producto/${p.slug}`}
                            className="producto-link"
                        >

                            <article className="producto">

                                <div className="imagen">

                                    <img
                                        src={
                                            p.images.length > 0
                                                ? p.images[0].url
                                                : "/no-image.png"
                                        }
                                        alt={p.name}
                                    />

                                </div>

                                <span className="etiqueta">
                                    {p.brand.name}
                                </span>

                                <h3>{p.name}</h3>

                                <p className="descripcion">
                                    {p.category.name}
                                </p>

                                <strong>S/. {p.price}</strong>

                            </article>

                        </Link>

                    ))}

                </div>

            </main>
        </section>
    );
}

export default Catalogo;