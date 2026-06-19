import { useState, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Float,
  useGLTF,
} from "@react-three/drei";

import "./Product3D.css";

function ShoeModel({ color }) {
  const { scene } = useGLTF("/models/zapato.glb");

  const model = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    model.traverse((child) => {
      if (!child.isMesh) return;

      const name = child.name;

      if (name.includes("Box")) return;

      child.material = child.material.clone();

      if (child.material.map) {
        child.material.map = null;
      }

      if (name.includes("Shoe_L_MAT") || name.includes("Shoe_R_MAT")) {
        child.material.color.set(color);
      }

      else if (name.includes("Sole_L_MAT") || name.includes("Sole_R_MAT")) {
        child.material.color.set("#111111");
      }

      else if (name.includes("Laces_L_MAT") || name.includes("Laces_R_MAT")) {
        child.material.color.set("#ffffff");
      }
    });
  }, [model, color]);

  return (
    <primitive
      object={model}
      scale={2.8}   // 👈 MÁS GRANDE
      position={[0, -0.2, 0]} // 👈 MÁS CENTRADO
    />
  );
}

export default function Product3D({ product }) {
  const [color, setColor] = useState("#ef4444");
  const [size, setSize] = useState(42);

  return (
    <div className="product3d-container">

      {/* 🧠 LADO IZQUIERDO (3D) */}
      <div className="canvas-wrapper">
        <Canvas camera={{ position: [0, 0.2, 2.5], fov: 38 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={3} />

          <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
            <ShoeModel color={color} />
          </Float>

          <ContactShadows
            position={[0, -1.3, 0]}
            opacity={0.6}
            blur={2.5}
            scale={12}
          />

          <Environment preset="city" />

          <OrbitControls
            autoRotate
            autoRotateSpeed={2}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* 🧠 LADO DERECHO (INFO) */}
      <div className="product3d-info">

        <h1 className="product3d-title">{product.name}</h1>
        <p className="product3d-price">${product.price}</p>

        <p className="product3d-desc">
          Zapatillas premium diseñadas para máximo confort, estilo urbano y
          rendimiento diario.
        </p>

        {/* 🎨 COLORES */}
        <div className="section">
          <h3>Color</h3>
          <div className="product3d-colors">
            <button onClick={() => setColor("#111827")} className="color-btn color-black" />
            <button onClick={() => setColor("#ef4444")} className="color-btn color-red" />
            <button onClick={() => setColor("#2563eb")} className="color-btn color-blue" />
            <button onClick={() => setColor("#ffffff")} className="color-btn color-white" />
          </div>
        </div>

        {/* 👟 TALLAS */}
        <div className="section">
          <h3>Talla</h3>
          <div className="sizes">
            {[38, 39, 40, 41, 42, 43, 44].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`size-btn ${size === s ? "active" : ""}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button className="buy-btn">
          Comprar ahora
        </button>

      </div>
    </div>
  );
}