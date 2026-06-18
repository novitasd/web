import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Shoe from "./Card";

import "./ShoeViewer.css";

function ShoeViewer() {
  return (
    <div className="viewer-full">
      
      {/* IZQUIERDA: 3D */}
      <div className="viewer-3d">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} />

          <Shoe />

 <OrbitControls
  enablePan={false}
  minDistance={5}
  maxDistance={7.5}
  enableDamping
  dampingFactor={0.05}
  autoRotate
  autoRotateSpeed={1.5}
/>
        </Canvas>
      </div>

      {/* DERECHA: TEXTO */}
      <div className="viewer-text">
        <h1>Zapatilla PK</h1>
        <p>
          Este es un modelo 3D interactivo donde puedes rotar y hacer zoom.
        </p>

        <button>Comprar ahora</button>
      </div>

    </div>
  );
}

export default ShoeViewer;