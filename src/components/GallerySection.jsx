import "./GallerySection.css";

const gallery = [
  {
    id: 1,
    title: "Jordan Collection",
    image: "https://i.pinimg.com/1200x/02/02/c6/0202c6b33542551e612e8cfaeacb1cc7.jpg",
  },
  {
    id: 2,
    title: "Street Style",
    image: "https://i.pinimg.com/1200x/ab/63/f8/ab63f8e54442be2c8bc88bd7837acb56.jpg",
  },
  {
    id: 3,
    title: "Running",
    image: "https://i.pinimg.com/vwebpf/1200x/b4/5f/84/b45f84cf75019db3280a51086854c9fd.webp",
  },
];

function GallerySection() {
  return (
    <section className="gallery">
s
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