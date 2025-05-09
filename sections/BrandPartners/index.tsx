"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Float, useGLTF, Environment } from '@react-three/drei';
import { inView } from 'motion';
import * as THREE from 'three';
import Image from 'next/image';

// Brand logos data
const brands = [
  { name: "Skechers", logo: "/ImageContainer/logoskechers.jpg" },
  { name: "Guess", logo: "/ImageContainer/logoguess.webp" },
  { name: "Calvin Klein", logo: "/ImageContainer/logocalvinklein.png" },
  { name: "Bugatti", logo: "/ImageContainer/logobugatti.webp" },
  { name: "New Balance", logo: "/ImageContainer/logonewbalance.png" },
  { name: "Reebok Fitness", logo: "/ImageContainer/logoreebok.jpg" },
  { name: "Luxottica", logo: "/ImageContainer/logoluxottica.png" },
  { name: "Seven", logo: "/ImageContainer/logoseven.jpg" },
  { name: "Shrey", logo: "/ImageContainer/logoshrey.jpg" },
];

// Create a placeholder for brand logos
const BrandLogo = ({ position, rotation, scale, index }: { position: [number, number, number], rotation?: [number, number, number], scale?: number, index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.1;

      // Rotate when hovered
      if (hovered) {
        meshRef.current.rotation.y += 0.01;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation || [0, 0, 0]}
      scale={hovered ? (scale || 1) * 1.1 : scale || 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 0.1]} />
      <meshStandardMaterial
        color={hovered ? "#b77e47" : "#2e493c"}
        metalness={0.8}
        roughness={0.2}
        emissive={hovered ? "#c9d1be" : "#000000"}
        emissiveIntensity={hovered ? 0.5 : 0}
      />
    </mesh>
  );
};

// 3D Scene component
const BrandScene = () => {
  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      speed={1.5}
      zoom={0.7}
    >
      <Float rotationIntensity={0.4}>
        <group position={[0, 0, 0]}>
          {/* Arrange brand logos in a circular pattern */}
          {Array.from({ length: 9 }).map((_, i) => {
            const angle = (i / 9) * Math.PI * 2;
            const radius = 3;
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;
            return (
              <BrandLogo
                key={i}
                position={[x, 0, z]}
                rotation={[0, -angle, 0]}
                scale={0.8}
                index={i}
              />
            );
          })}

          {/* Center logo */}
          <BrandLogo
            position={[0, 0, 0]}
            scale={1.2}
            index={9}
          />
        </group>
      </Float>
      <Environment preset="city" />
    </PresentationControls>
  );
};

export default function BrandPartners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        // Animation would go here if we were using the animation utility
        return () => {};
      });
    }

    // Auto-rotate through brands
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#2a3530] to-[#2e493c] text-[#c9d1be] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#b77e47]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#c9d1be]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c9d1be] to-[#b77e47]">
            Our Premium Brand Partners
          </span>
        </h2>
        <p className="text-center text-[#c9d1be]/80 mb-16 max-w-3xl mx-auto">
          Gaurik Group has established partnerships with leading global brands, bringing premium products to the Indian market.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 h-[500px]">
            <div className="h-full w-full bg-[#2e493c]/20 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#b77e47]/20">
              <Canvas camera={{ position: [0, 0, 8], fov: 25 }}>
                <BrandScene />
              </Canvas>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-[#2a3530]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2e493c]/50">
              <h3 className="text-2xl font-bold mb-6 text-[#b77e47]">Featured Brands</h3>

              <div className="grid grid-cols-3 gap-4">
                {brands.map((brand, index) => (
                  <div
                    key={brand.name}
                    className={`cursor-pointer transition-all duration-300 p-4 rounded-xl text-center
                      ${activeIndex === index
                        ? 'bg-gradient-to-r from-[#2e493c]/50 to-[#b77e47]/30 shadow-lg shadow-[#b77e47]/20'
                        : 'bg-[#2a3530]/50 hover:bg-[#2a3530]/70'
                      }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="aspect-square w-full bg-[#2e493c]/30 rounded-lg mb-2 flex items-center justify-center border border-[#b77e47]/20 p-2 overflow-hidden">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-sm font-medium text-[#c9d1be]">{brand.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#2e493c]/30 to-[#b77e47]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#b77e47]/30">
              <h3 className="text-xl font-bold mb-3 text-[#b77e47]">Brand Presence</h3>
              <p className="text-[#c9d1be]">
                Our brand partnerships span across multiple categories including footwear, apparel, eyewear, and fitness equipment.
                With 55+ retail stores and a network of 285 dealers, we bring these premium brands to customers across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
