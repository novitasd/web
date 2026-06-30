import "./StyleCategories.css";

const categories = [
  {
    id: 1,
    name: "Streetwear",
    image: "/styles/streetwear.jpg",
  },
  {
    id: 2,
    name: "Running",
    image: "/styles/running.jpg",
  },
  {
    id: 3,
    name: "Casual",
    image: "/styles/casual.jpg",
  },
  {
    id: 4,
    name: "Retro",
    image: "/styles/retro.jpg",
  },
  {
    id: 5,
    name: "Clásicas",
    image: "/styles/clasicas.jpg",
  },
  {
    id: 6,
    name: "Edición Limitada",
    image: "/styles/limited.jpg",
  },
];

function StyleCategories() {
  return (
    <section className="style-categories">

      <div className="style-header">
        <span>DESCUBRE</span>
        <h2>ENCUENTRA TU ESTILO</h2>
      </div>

      <div className="style-slider">

        {categories.map((category) => (

          <div
            key={category.id}
            className="style-card"
          >

            <div className="style-image">

              <img
                src={category.image}
                alt={category.name}
              />

            </div>

            <h3>{category.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default StyleCategories;