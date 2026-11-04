// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   Float,
//   Icosahedron,
//   MeshDistortMaterial,
//   Environment,
// } from "@react-three/drei";
// import { useRef, Suspense } from "react";
// import * as THREE from "three";

// function Orb() {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
//       meshRef.current.rotation.x =
//         Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
//     }
//   });

//   return (
//     <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
//       <Icosahedron ref={meshRef} args={[1.4, 64]}>
//         <MeshDistortMaterial
//           color="#8b5cf6"
//           emissive="#4c1d95"
//           emissiveIntensity={0.35}
//           metalness={0.85}
//           roughness={0.18}
//           distort={0.28}
//           speed={1.8}
//         />
//       </Icosahedron>
//     </Float>
//   );
// }

// function Scene() {
//   return (
//     <>
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
//       <directionalLight
//         position={[-3, -2, 2]}
//         intensity={0.4}
//         color="#8b5cf6"
//       />
//       <Orb />
//       <Environment preset="city" />
//     </>
//   );
// }

// export default function HeroCanvas() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 5], fov: 45 }}
//       dpr={[1, 2]}
//       gl={{ antialias: true, alpha: true }}
//       style={{ background: "transparent" }}
//     >
//       <Suspense fallback={null}>
//         <Scene />
//       </Suspense>
//     </Canvas>
//   );
// }

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html, Text } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const TECH_ITEMS = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Next.js", icon: "/icons/next.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "vscode", icon: "/icons/vscode.svg" },
];

const ORBIT_RADIUS = 2.05;

// Technology icons

function OrbitingIcon({
  item,
  index,
}: {
  item: (typeof TECH_ITEMS)[number];
  index: number;
}) {
  const angle = (index / TECH_ITEMS.length) * Math.PI * 2;

  const x = Math.sin(angle) * ORBIT_RADIUS;
  const y = Math.cos(angle) * ORBIT_RADIUS;

  return (
    <group position={[x, y, 0]}>
      <Html center sprite distanceFactor={8}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/30 bg-neutral-950/95 shadow-[0_0_20px_rgba(139,92,246,0.2)] backdrop-blur-md">
          <img
            src={item.icon}
            alt={item.name}
            title={item.name}
            width={26}
            height={26}
            loading="eager"
            decoding="async"
            draggable={false}
            className="h-[26px] w-[26px] object-contain"
          />
        </div>
      </Html>
    </group>
  );
}

// Center typography

function DeveloperCore() {
  return (
    <group position={[0, 0, 0.2]}>
      <Text
        position={[0, 0.34, 0]}
        fontSize={0.26}
        letterSpacing={0.08}
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
      >
        DESIGN
      </Text>

      <Text
        position={[0, 0, 0]}
        fontSize={0.17}
        anchorX="center"
        anchorY="middle"
        color="#a78bfa"
      >
        • BUILD •
      </Text>

      <Text
        position={[0, -0.34, 0]}
        fontSize={0.26}
        letterSpacing={0.08}
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
      >
        DEPLOY
      </Text>
    </group>
  );
}

// Main scene

function TechOrbitScene() {
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <>
      <DeveloperCore />

      <group ref={orbitRef}>
        {TECH_ITEMS.map((item, index) => (
          <OrbitingIcon key={item.name} item={item} index={index} />
        ))}
      </group>
    </>
  );
}

// Canvas

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 45,
        near: 0.1,
        far: 100,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />

        <directionalLight
          position={[4, 5, 4]}
          intensity={1.2}
          color="#ffffff"
        />

        <directionalLight
          position={[-4, -2, 3]}
          intensity={0.6}
          color="#8b5cf6"
        />

        <pointLight position={[0, 0, 3]} intensity={0.5} color="#6366f1" />

        <TechOrbitScene />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
