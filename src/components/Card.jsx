import { useGLTF } from "@react-three/drei";

function Shoe() {
  const { scene } = useGLTF("/models/zapato.glb");

  return (
    <primitive
      object={scene}
      scale={7}
      position={[0, -1, 0]} // 👈 baja el modelo
    />
  );
}

export default Shoe;