import "./GallerySection.css";

const gallery = [
  {
    id: 1,
    title: "Jordan Collection",
    image: "https://cdn-images.farfetch-contents.com/15/05/76/88/15057688_25617121_2048.jpg",
  },
  {
    id: 2,
    title: "Street Style",
    image: "https://cdn-images.farfetch-contents.com/20/25/53/98/20255398_51237620_1000.jpg",
  },
  {
    id: 3,
    title: "Running",
    image: "https://cdn-images.farfetch-contents.com/28/19/57/99/28195799_58273903_1000.jpg",
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