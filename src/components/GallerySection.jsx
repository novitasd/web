import "./GallerySection.css";

const gallery = [
  {
    id: 1,
    title: "Jordan Collection",
    image: "/gallery/jordan.jpg",
  },
  {
    id: 2,
    title: "Street Style",
    image: "/gallery/street.jpg",
  },
  {
    id: 3,
    title: "Running",
    image: "/gallery/running.jpg",
  },
  {
    id: 4,
    title: "Lifestyle",
    image: "/gallery/lifestyle.jpg",
  },
];

function GallerySection() {
  return (
    <section className="gallery">

      <div className="gallery-header">

        <span>STREET GALLERY</span>

        <h2>
          Inspiración para tu
          <br />
          próximo outfit.
        </h2>

      </div>

      <div className="gallery-grid">

        {gallery.map((item) => (

          <article
            className="gallery-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">

              <h3>{item.title}</h3>

              <button>
                Explorar →
              </button>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default GallerySection;