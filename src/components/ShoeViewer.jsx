import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Shoe from "./Card";
import "./ShoeViewer.css";

function ShoeViewer() {
  return (
    <div className="viewer-full">

      {/* IZQUIERDA: TEXTO */}
      <div className="viewer-text">

        <span className="viewer-subtitle">
          EXPLORE EN 3D
        </span>

        <h1>
          DESCUBRE CADA DETALLE.
          <br />
          DESDE TODOS LOS ÁNGULOS.
        </h1>

        <p>
          Explora nuestros modelos en 3D y conoce cada detalle
          antes de realizar tu compra.
        </p>

        <button>
          VER MODELO EN 3D →
        </button>

        <h2 className="background3d">
          3D
        </h2>

      </div>

      {/* DERECHA: MODELO 3D */}
      <div className="viewer-3d">

        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>

          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} />

          <Shoe />

          <OrbitControls
            enablePan={false}
            minDistance={6}
            maxDistance={5}
            enableDamping
          dampingFactor={0.05}
            autoRotate
            autoRotateSpeed={1.5}
          />

        </Canvas>

      </div>

    </div>
  );
}

export default ShoeViewer;  