import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, PresentationControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Environment preset="studio" />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#C5A059" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1, 0.4, 128, 32]} />
          <MeshDistortMaterial
            color="#C5A059"
            speed={2}
            distort={0.4}
            radius={1}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </>
  );
}

export const Hero3D = () => {
  return (
    <div className="w-full h-[500px] lg:h-full lg:absolute lg:top-0 lg:right-0 lg:w-1/2 cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
};
