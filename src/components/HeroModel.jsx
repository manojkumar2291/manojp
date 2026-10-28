import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

function Mesh() {
  const mesh = useRef();
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.18;
      mesh.current.rotation.x += delta * 0.08;
    }
  });
  return (
    <Sphere ref={mesh} args={[1.85, 24, 24]}>
      <meshStandardMaterial color="#57d9ed" wireframe />
    </Sphere>
  );
}
export default function HeroModel() {
  const container = useRef(null);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    let visible = true;
    const update = () => setRunning(visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(container.current);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <div ref={container} className="model-canvas">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={running ? "always" : "never"}
        camera={{ position: [0, 0, 5] }}
        gl={{ antialias: false, powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Mesh />
      </Canvas>
    </div>
  );
}
