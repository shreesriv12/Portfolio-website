import React, { Suspense, useMemo, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Text, Box, Sphere, Torus } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import * as THREE from 'three';

// Performance-optimized 3D Components
const FloatingCube = ({ position, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Box ref={meshRef} position={position} scale={scale} castShadow>
      <meshStandardMaterial color="#4f46e5" transparent opacity={0.8} />
    </Box>
  );
};

const FloatingSphere = ({ position, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 1.2) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} scale={scale} castShadow>
      <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
    </Sphere>
  );
};

const FloatingTorus = ({ position, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <Torus ref={meshRef} position={position} scale={scale} args={[1, 0.3, 16, 32]} castShadow>
      <meshStandardMaterial color="#f59e0b" transparent opacity={0.8} />
    </Torus>
  );
};

// Optimized Canvas Loader
const CanvasLoader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Enhanced Button Component
const Button = ({ name, isBeam, containerClass, onClick, href }) => {
  const buttonContent = (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 ${containerClass}`}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
      
      {/* Beam Effect */}
      {isBeam && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
      )}
      
      {/* Button Text */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {name}
        <span className="text-lg">→</span>
      </span>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 scale-110"></div>
    </button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

// Particle System Component
const ParticleField = () => {
  const pointsRef = useRef();
  const particlesCount = 100;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.6} />
    </points>
  );
};

// Main Hero Component
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Responsive 3D object positions
  const sizes = useMemo(() => {
    if (isSmall) {
      return {
        cubePosition: [2, 2, 0],
        spherePosition: [-2, 1, 2],
        torusPosition: [0, -1, 1],
        scale: 0.5
      };
    } else if (isMobile) {
      return {
        cubePosition: [3, 2, 0],
        spherePosition: [-3, 1, 2],
        torusPosition: [0, -1, 1],
        scale: 0.7
      };
    } else if (isTablet) {
      return {
        cubePosition: [4, 2, 0],
        spherePosition: [-4, 1, 2],
        torusPosition: [0, -1, 1],
        scale: 0.8
      };
    }
    return {
      cubePosition: [5, 2, 0],
      spherePosition: [-5, 1, 2],
      torusPosition: [0, -1, 1],
      scale: 1
    };
  }, [isSmall, isMobile, isTablet]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900" id="home">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-20 w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-6">
        {/* Greeting */}
        <div className="text-center space-y-2">
          <p className="sm:text-2xl text-lg font-medium text-gray-300 tracking-wide">
            Hello, I'm
          </p>
          <h1 className="sm:text-4xl text-2xl font-bold text-white">
            Shreeya Srivastava
            <span className="inline-block ml-2 animate-bounce">👋</span>
          </h1>
        </div>

        {/* Main Title */}
        <div className="text-center">
          <h2 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              ASPIRING WEB
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              ENTHUSIAST
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-400 sm:text-lg text-base max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with modern technologies and creative design
        </p>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas
          className="w-full h-full"
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          performance={{ min: 0.5, max: 1 }}
          gl={{ 
            antialias: !isMobile,
            powerPreference: isMobile ? "default" : "high-performance",
            alpha: true,
            stencil: false,
            depth: true,
            logarithmicDepthBuffer: true
          }}
          shadows={!isMobile}
        >
          <Suspense fallback={<CanvasLoader />}>
            {/* Camera */}
            <PerspectiveCamera 
              makeDefault 
              position={[0, 0, 10]} 
              fov={isMobile ? 60 : 75}
            />
            
            {/* Controls - Disabled on mobile for performance */}
            {!isMobile && (
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
                autoRotate
                autoRotateSpeed={0.5}
              />
            )}

            {/* 3D Objects */}
            <FloatingCube position={sizes.cubePosition} scale={sizes.scale} />
            <FloatingSphere position={sizes.spherePosition} scale={sizes.scale} />
            <FloatingTorus position={sizes.torusPosition} scale={sizes.scale} />
            
            {/* Particle Field - Only on desktop */}
            {!isMobile && <ParticleField />}

            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={0.8}
              castShadow={!isMobile}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4f46e5" />
            <pointLight position={[10, 10, 10]} intensity={0.3} color="#06b6d4" />
          </Suspense>
        </Canvas>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-10 left-0 right-0 w-full z-30 sm:px-10 px-5">
        <div className="flex justify-center">
          <Button 
            name="Let's Create Together" 
            isBeam 
            containerClass="sm:min-w-80 w-full" 
            href="#about"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-white text-lg">Loading Experience...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;