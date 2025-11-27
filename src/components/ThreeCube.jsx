import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, MeshDistortMaterial, Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function RotatingCube() {
  const meshRef = useRef()
  const glowRef = useRef()
  const texts = ['Backend', 'Frontend', 'DevOps', 'Database', 'API', 'Cloud']

  useFrame((state) => {
    const t = state.clock.elapsedTime
    meshRef.current.rotation.x = t * 0.2
    meshRef.current.rotation.y = t * 0.3
    glowRef.current.rotation.x = -t * 0.15
    glowRef.current.rotation.y = -t * 0.25
  })

  return (
    <>
      <Sparkles count={100} scale={8} size={2} speed={0.4} color="#ec4899" />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={meshRef}>
          <mesh ref={glowRef}>
            <icosahedronGeometry args={[2.2, 1]} />
            <meshBasicMaterial color="#6366f1" wireframe opacity={0.3} transparent />
          </mesh>
          <mesh>
            <boxGeometry args={[3, 3, 3]} />
            <MeshDistortMaterial
              color="#8b5cf6"
              distort={0.4}
              speed={3}
              roughness={0.2}
              metalness={1}
              emissive="#6366f1"
              emissiveIntensity={0.5}
            />
          </mesh>
          {texts.map((text, i) => {
            const positions = [
              [0, 0, 1.7], [0, 0, -1.7],
              [1.7, 0, 0], [-1.7, 0, 0],
              [0, 1.7, 0], [0, -1.7, 0]
            ]
            return (
              <Text
                key={i}
                position={positions[i]}
                fontSize={0.35}
                color="#f8fafc"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#6366f1"
              >
                {text}
              </Text>
            )
          })}
        </group>
      </Float>
    </>
  )
}

export default function ThreeCube() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
      <RotatingCube />
    </Canvas>
  )
}
