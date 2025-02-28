"use client";

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Aircraft3D from './Aircraft3D'

export default function ThreeScene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 2, 5]} />
      <OrbitControls target={[0, 0, 0]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Aircraft3D />
    </Canvas>
  )
} 