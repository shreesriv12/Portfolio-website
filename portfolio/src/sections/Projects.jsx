import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../component/CanvasLoader';
import DemoComputer from '../component/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });

    setTimeout(() => setIsAnimating(false), 500);
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];



  return (
    <section className="sm:px-10 px-5 my-20" id="work">
      {/* Enhanced Header */}
      <div className="relative mb-16">
        <h2 className="sm:text-5xl text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
          My Work
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg">Showcasing my latest projects and innovations</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-8 w-full">
        {/* Enhanced Project Info Card */}
        <div className="group relative">
          {/* Animated border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-1000 animate-pulse"></div>
          
          <div className="relative flex flex-col gap-6 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 shadow-2xl hover:border-purple-500/30 transition-all duration-500">
            
            {/* Spotlight Background */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-2xl">
              <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl opacity-30" />
            </div>

            {/* Logo Section */}
            <div className="relative z-10">
              <div 
                className="inline-flex p-4 backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
                style={currentProject.logoStyle}
              >
                <img className="w-12 h-12 shadow-sm" src={currentProject.logo} alt="logo" />
              </div>
            </div>

            {/* Project Content */}
            <div className={`relative z-10 flex flex-col gap-4 text-white transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animatedText">
                {currentProject.title}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed animatedText">
                {currentProject.desc}
              </p>
              
              <p className="text-gray-400 leading-relaxed animatedText">
                {currentProject.subdesc}
              </p>
            </div>

            {/* Enhanced Tags & Live Site */}
            <div className="relative z-10 flex items-center justify-between flex-wrap gap-6 pt-4 border-t border-gray-800/50">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div 
                    key={index} 
                    className="group/tag relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                    title={tag.name}
                  >
                    <img src={tag.path} alt={tag.name} className="w-6 h-6" />
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {tag.name}
                    </div>
                  </div>
                ))}
              </div>

              <a
                className="group/link flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>Check Live Site</span>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Enhanced Navigation */}
            <div className="relative z-10 flex justify-between items-center pt-6 border-t border-gray-800/50">
              <button 
                className="group/nav w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50"
                onClick={() => handleNavigation('previous')}
                disabled={isAnimating}
              >
                <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4 group-hover/nav:animate-pulse" />
              </button>

              {/* Project Counter */}
              <div className="flex items-center gap-2">
                {myProjects.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === selectedProjectIndex 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button 
                className="group/nav w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50"
                onClick={() => handleNavigation('next')}
                disabled={isAnimating}
              >
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4 group-hover/nav:animate-pulse" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced 3D Canvas Container */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-1000 animate-pulse"></div>
          
          <div className="relative border-2 border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm rounded-2xl h-96 md:h-full overflow-hidden hover:border-blue-500/30 transition-all duration-300">
            {/* 3D Canvas */}
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
            
            {/* Overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
              3D Preview
            </div>
          </div>
        </div>
      </div>

      {/* Additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.4); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
