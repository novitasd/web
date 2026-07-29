import { useEffect, useState } from "react";
import {
    Link,
    useParams,
    useSearchParams
} from "react-router-dom";

import { getProducts } from "../services/product.service";
import "./Catalogo.css";
import Loading from "../components/Loading/Loading";


function Catalogo() {

    const { categoria } = useParams();

    // ==========================
    // PARÁMETROS DE URL
    // ==========================

    const [searchParams] = useSearchParams();

    // /catalogo?brand=nike
    const brand = searchParams.get("brand");

    // /catalogo?search=jordan
    const search = searchParams.get("search");


    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);


    // ==========================
    // CARGAR PRODUCTOS
    // ==========================

    useEffect(() => {

        async function cargarProductos() {

            try {

                setLoading(true);

                const response = await getProducts();

                // La tienda pública SOLO muestra
                // productos activos
                const productosActivos =
                    response.data.filter(
                        (producto) =>
                            producto.active === true
                    );

                setProductos(productosActivos);

            } catch (error) {

                console.error(
                    "Error cargando productos:",
                    error
                );

            } finally {

                setLoading(false);

            }

        }

        cargarProductos();

    }, []);


    // ==========================
    // FILTRAR PRODUCTOS
    // ==========================

    const productosFiltrados = productos.filter(
        (producto) => {

            // --------------------------
            // FILTRO POR CATEGORÍA
            // --------------------------

            if (categoria) {

                const categoriaActual =
                    decodeURIComponent(categoria)
                        .toLowerCase()
                        .trim();

                const categoriaProducto =
                    producto.category?.name
                        ?.toLowerCase()
                        .trim() || "";

                if (
                    categoriaProducto !==
                    categoriaActual
                ) {
                    return false;
                }

            }


            // --------------------------
            // FILTRO POR MARCA
            // --------------------------

            if (brand) {

                const brandActual =
                    brand.toLowerCase().trim();

                const brandProducto =
                    producto.brand?.slug
                        ?.toLowerCase()
                        .trim() || "";

                if (
                    brandProducto !==
                    brandActual
                ) {
                    return false;
                }

            }


            // --------------------------
            // FILTRO POR BÚSQUEDA
            // --------------------------

            if (search) {

                const termino =
                    search.toLowerCase().trim();

                const nombre =
                    producto.name
                        ?.toLowerCase() || "";

                const marca =
                    producto.brand?.name
                        ?.toLowerCase() || "";

                const marcaSlug =
                    producto.brand?.slug
                        ?.toLowerCase() || "";

                const categoriaProducto =
                    producto.category?.name
                        ?.toLowerCase() || "";

                const descripcion =
                    producto.description
                        ?.toLowerCase() || "";


                const coincide =
                    nombre.includes(termino) ||
                    marca.includes(termino) ||
                    marcaSlug.includes(termino) ||
                    categoriaProducto.includes(termino) ||
                    descripcion.includes(termino);


                if (!coincide) {
                    return false;
                }

            }


            return true;

        }
    );


    // ==========================
    // LOADING
    // ==========================

     if (loading) {
    return <Loading />;
}


    // ==========================
    // CATÁLOGO
    // ==========================

    return (

        <section className="catalogo">

            <main className="productos">


                {/* ==========================
                    RESULTADO DE BÚSQUEDA
                ========================== */}

                {search && (

                    <div className="catalogo-busqueda">

                        <span>
                            Resultados para:
                        </span>

                        <strong>
                            "{search}"
                        </strong>

                        <span>
                            {productosFiltrados.length}
                            {" "}
                            {productosFiltrados.length === 1
                                ? "producto"
                                : "productos"}
                        </span>

                    </div>

                )}


                {/* ==========================
                    PRODUCTOS
                ========================== */}

                <div className="grid">

                    {productosFiltrados.map((p) => (

                        <Link
                            key={p.id}
                            to={`/producto/${p.slug}`}
                            className="producto-link"
                        >

                            <article className="producto">


                                {/* IMAGEN */}

                                <div className="imagen">

                                    <img
                                        src={
                                            p.images?.find(
                                                (img) => img.isPrimary
                                            )?.url ||
                                            p.images?.[0]?.url ||
                                            "/no-image.png"
                                        }
                                        alt={p.name}
                                        loading="lazy"
                                    />

                                </div>


                                {/* MARCA */}

                                <span className="etiqueta">
                                    {p.brand?.name}
                                </span>


                                {/* NOMBRE */}

                                <h3>
                                    {p.name}
                                </h3>


                                {/* CATEGORÍA */}

                                <p className="descripcion">
                                    {p.category?.name}
                                </p>


                                {/* PRECIO */}

                                <strong>
                                    S/. {p.price}
                                </strong>


                            </article>

                        </Link>

                    ))}

                </div>


                {/* ==========================
                    SIN PRODUCTOS
                ========================== */}

                {productosFiltrados.length === 0 && (

                    <div className="catalogo-vacio">

                        <h2>
                            No encontramos productos
                        </h2>

                        {search ? (

                            <p>
                                No encontramos resultados para
                                {" "}
                                <strong>
                                    "{search}"
                                </strong>
                            </p>

                        ) : (

                            <p>
                                Actualmente no tenemos productos
                                disponibles con este filtro.
                            </p>

                        )}

                        <Link
                            to="/catalogo"
                            className="catalogo-vacio-btn"
                        >
                            Ver todos los productos
                        </Link>

                    </div>

                )}


            </main>

        </section>

    );

}

export default Catalogo;