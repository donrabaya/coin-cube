"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import styles from "./style.module.scss";

import { OrbitControls } from "@react-three/drei";

export default function Cube() {
  return (
    <div className={styles.main}>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[100, 120, 300]} />
        <Mesh />
      </Canvas>
    </div>
  );
}

function Mesh() {
  const mesh = useRef(null);
  


  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.3;
    mesh.current.rotation.y += delta * 0.3;
    mesh.current.rotation.z += delta * 0.3;
  });

  const texture_1 = useLoader(TextureLoader, "assets/coin1.png");
  const texture_2 = useLoader(TextureLoader, "assets/coin2.png");
  const texture_3 = useLoader(TextureLoader, "assets/coin3.png");
  const texture_4 = useLoader(TextureLoader, "assets/coin4.png");
  const texture_5 = useLoader(TextureLoader, "assets/coin5.png");
  const texture_6 = useLoader(TextureLoader, "assets/coin6.png");

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
}
