import { useEffect, useState } from "react";
import {
    Link,
    useParams,
    useSearchParams,
    useNavigate,
} from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { getProducts } from "../services/product.service";
import "./Catalogo.css";
import Loading from "../components/Loading/Loading";

import BrandTabs from "../components/Product/BrandTabs/BrandTabs";


function Catalogo() {

    const {
        categoria,
        marca,
    } = useParams();


    // ==========================
    // PARÁMETROS DE URL
    // ==========================

    const [searchParams] =
        useSearchParams();

    const navigate =
        useNavigate();


    // /catalogo?search=jordan
    const search =
        searchParams.get("search");


    const [productos, setProductos] =
        useState([]);

    const [loading, setLoading] =
        useState(true);


    // ==========================
    // CARGAR PRODUCTOS
    // ==========================

    useEffect(() => {

        async function cargarProductos() {

            try {

                setLoading(true);

                const response =
                    await getProducts();


                // La tienda pública SOLO muestra
                // productos activos

                const productosActivos =
                    response.data.filter(
                        (producto) =>
                            producto.active === true
                    );


                setProductos(
                    productosActivos
                );


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

    const productosFiltrados =
        productos.filter(
            (producto) => {


                // --------------------------
                // FILTRO POR CATEGORÍA
                // --------------------------

                if (categoria) {

                    const categoriaActual =
                        decodeURIComponent(
                            categoria
                        )
                            .toLowerCase()
                            .trim();


                    const categoriaProducto =
                        producto.category?.slug
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

                if (marca) {

                    const marcaActual =
                        decodeURIComponent(
                            marca
                        )
                            .toLowerCase()
                            .trim();


                    const marcaProducto =
                        producto.brand?.slug
                            ?.toLowerCase()
                            .trim() || "";


                    if (
                        marcaProducto !==
                        marcaActual
                    ) {

                        return false;

                    }

                }


                // --------------------------
                // FILTRO POR BÚSQUEDA
                // --------------------------

                if (search) {

                    const termino =
                        search
                            .toLowerCase()
                            .trim();


                    const nombre =
                        producto.name
                            ?.toLowerCase() || "";


                    const marcaProducto =
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
                        nombre.includes(
                            termino
                        ) ||

                        marcaProducto.includes(
                            termino
                        ) ||

                        marcaSlug.includes(
                            termino
                        ) ||

                        categoriaProducto.includes(
                            termino
                        ) ||

                        descripcion.includes(
                            termino
                        );


                    if (!coincide) {

                        return false;

                    }

                }


                return true;

            }
        );


    // ==========================
    // MARCAS
    // ==========================

    const marcas = [
        ...new Map(
            productos
                .filter(
                    (p) => p.brand
                )
                .map(
                    (p) => [
                        p.brand.id,
                        {
                            id: p.brand.id,
                            name: p.brand.name,
                            slug: p.brand.slug,
                        },
                    ]
                )
        ).values(),
    ];


    // ==========================
    // CAMBIAR MARCA
    // ==========================

    function handleBrandChange(
        slug
    ) {

        if (slug === "all") {

            navigate(
                "/catalogo"
            );

            return;

        }


        navigate(
            `/marca/${slug}`
        );

    }


    // ==========================
    // DATOS DE CATEGORÍA
    // ==========================

    const categoriaActual =
        categoria
            ? decodeURIComponent(
                categoria
            )
                .toLowerCase()
                .trim()
            : null;


    const categoriaSeleccionada =
        categoriaActual
            ? productos.find(
                (producto) =>
                    producto.category?.slug
                        ?.toLowerCase()
                        .trim() ===
                    categoriaActual
            )?.category
            : null;


    const categoriaNombre =
        categoriaSeleccionada?.name ||
        categoriaActual;


    // ==========================
    // DATOS DE MARCA
    // ==========================

    const marcaActual =
        marca
            ? decodeURIComponent(
                marca
            )
                .toLowerCase()
                .trim()
            : null;


    const marcaSeleccionada =
        marcaActual
            ? productos.find(
                (producto) =>
                    producto.brand?.slug
                        ?.toLowerCase()
                        .trim() ===
                    marcaActual
            )?.brand
            : null;


    const marcaNombre =
        marcaSeleccionada?.name ||
        marcaActual;


    // ==========================
    // TIPO DE PÁGINA
    // ==========================

    const esBusqueda =
        Boolean(search);


    const esMarca =
        Boolean(marca);


    const esCategoria =
        Boolean(categoria);


    // ==========================
    // SEO
    // ==========================

    let seoTitle;

    let seoDescription;

    let canonicalUrl;


    // --------------------------
    // CATÁLOGO GENERAL
    // --------------------------

    if (
        !esCategoria &&
        !esMarca &&
        !esBusqueda
    ) {

        seoTitle =
            "Zapatillas Jordan, Nike, ASICS y Sneakers | TNIS.PE";


        seoDescription =
            "Descubre nuestra colección de zapatillas Jordan, Nike, ASICS y más en TNIS.PE. Consulta modelos, precios y tallas disponibles y compra online en Perú.";


        canonicalUrl =
            "https://www.tnisperu.com/catalogo";

    }


    // --------------------------
    // CATEGORÍA
    // --------------------------

    else if (esCategoria) {

        seoTitle =
            `Zapatillas ${categoriaNombre} | TNIS.PE`;


        seoDescription =
            `Descubre nuestra colección de zapatillas ${categoriaNombre} en TNIS.PE. Encuentra modelos, precios y tallas disponibles y compra online en Perú.`;


        canonicalUrl =
            `https://www.tnisperu.com/catalogo/${categoriaActual}`;

    }


    // --------------------------
    // MARCA
    // --------------------------

    else if (esMarca) {

        seoTitle =
            `Zapatillas ${marcaNombre} en Perú | TNIS.PE`;


        seoDescription =
            `Descubre nuestra colección de zapatillas ${marcaNombre} en TNIS.PE. Encuentra modelos, precios y tallas disponibles y compra online en Perú.`;


        canonicalUrl =
            `https://www.tnisperu.com/marca/${marcaActual}`;

    }


    // --------------------------
    // BÚSQUEDA
    // --------------------------

    else {

        seoTitle =
            `Resultados para "${search}" | TNIS.PE`;


        seoDescription =
            `Resultados de búsqueda para "${search}" en TNIS.PE.`;


        canonicalUrl =
            "https://www.tnisperu.com/catalogo";

    }


    // ==========================
    // ROBOTS
    // ==========================

    const robotsContent =
        esBusqueda
            ? "noindex, follow"
            : "index, follow";


    // ==========================
    // LOADING
    // ==========================

    if (loading) {

        return <Loading />;

    }


    // ==========================
    // MARCA/CATEGORÍA NO EXISTE
    // ==========================

    if (
        (esMarca && !marcaSeleccionada) ||
        (esCategoria && !categoriaSeleccionada)
    ) {

        return (

            <>

                <Helmet>

                    <title>
                        Página no encontrada | TNIS.PE
                    </title>

                    <meta
                        name="robots"
                        content="noindex, follow"
                    />

                </Helmet>


                <section className="catalogo">

                    <main className="productos">

                        <div className="catalogo-vacio">

                            <h2>
                                No encontramos productos
                            </h2>

                            <p>
                                La marca o categoría
                                que buscas no está
                                disponible actualmente.
                            </p>

                            <Link
                                to="/catalogo"
                                className="catalogo-vacio-btn"
                            >
                                Ver todos los productos
                            </Link>

                        </div>

                    </main>

                </section>

            </>

        );

    }


    // ==========================
    // CATÁLOGO
    // ==========================

    return (

        <>

            {/* ==========================
                SEO
            ========================== */}

            <Helmet>

                <title>
                    {seoTitle}
                </title>


                <meta
                    name="description"
                    content={seoDescription}
                />


                <meta
                    name="robots"
                    content={robotsContent}
                />


                <link
                    rel="canonical"
                    href={canonicalUrl}
                />


                {/* ==========================
                    OPEN GRAPH
                ========================== */}

                <meta
                    property="og:title"
                    content={seoTitle}
                />


                <meta
                    property="og:description"
                    content={seoDescription}
                />


                <meta
                    property="og:url"
                    content={canonicalUrl}
                />


                <meta
                    property="og:type"
                    content="website"
                />


                <meta
                    property="og:site_name"
                    content="TNIS.PE"
                />


                <meta
                    property="og:locale"
                    content="es_PE"
                />


                {/* ==========================
                    TWITTER
                ========================== */}

                <meta
                    name="twitter:card"
                    content="summary"
                />


                <meta
                    name="twitter:title"
                    content={seoTitle}
                />


                <meta
                    name="twitter:description"
                    content={seoDescription}
                />


                {/* ==========================
                    ITEM LIST
                ========================== */}

                {!esBusqueda && (

                    <script
                        type="application/ld+json"
                    >
                        {JSON.stringify({

                            "@context":
                                "https://schema.org",

                            "@type":
                                "ItemList",

                            name:
                                seoTitle,

                            url:
                                canonicalUrl,

                            numberOfItems:
                                productosFiltrados.length,

                            itemListElement:
                                productosFiltrados
                                    .slice(0, 50)
                                    .map(
                                        (
                                            producto,
                                            index
                                        ) => ({

                                            "@type":
                                                "ListItem",

                                            position:
                                                index + 1,

                                            url:
                                                `https://www.tnisperu.com/producto/${producto.slug}`,

                                            name:
                                                producto.name,

                                        })
                                    ),

                        })}
                    </script>

                )}

            </Helmet>


            <section className="catalogo">


                {/* ==========================
                    MARCAS
                ========================== */}

                <BrandTabs
                    brands={marcas}
                    selectedBrand={
                        marca || "all"
                    }
                    onSelect={
                        handleBrandChange
                    }
                />


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

                                {
                                    productosFiltrados.length === 1
                                        ? "producto"
                                        : "productos"
                                }

                            </span>

                        </div>

                    )}


                    {/* ==========================
                        PRODUCTOS
                    ========================== */}

                    <div className="grid">

                        {productosFiltrados.map(
                            (p) => (

                                <Link
                                    key={p.id}
                                    to={`/producto/${p.slug}`}
                                    className="producto-link"
                                >

                                    <article
                                        className="producto"
                                    >


                                        {/* IMAGEN */}

                                        <div className="imagen">

                                            <img
                                                src={
                                                    p.images?.find(
                                                        (img) =>
                                                            img.isPrimary
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

                            )
                        )}

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

                                    No encontramos resultados
                                    para{" "}

                                    <strong>
                                        "{search}"
                                    </strong>

                                </p>

                            ) : (

                                <p>

                                    Actualmente no tenemos
                                    productos disponibles
                                    con este filtro.

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

        </>

    );

}


export default Catalogo;