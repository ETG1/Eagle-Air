"use client";

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Aircraft3D() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Add subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1}>
      {/* Basic aircraft shape - replace with actual 3D model later */}
      <group>
        {/* Fuselage */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
          <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Wings */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 0.1, 0.6]} />
          <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Tail */}
        <mesh position={[0, 0.3, -0.9]}>
          <boxGeometry args={[0.8, 0.6, 0.1]} />
          <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </mesh>
  )
} 