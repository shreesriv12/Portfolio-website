import React, { Suspense } from 'react';
import CanvasLoader from '../component/CanvasLoader';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import { HackerRoom } from '../component/HackerRoom';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isSmall=useMediaQuery({maxWidth:440});
    const isTablet=useMediaQuery({minWidth:768,maxWidth:1024});

    const sizes=calculateSizes(isSmall,isMobile,isTablet);
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3'>
        <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
          Hi, I am Shreeya Srivastava <span className='waving-hand'>✌️</span>
        </p>
        <p className='text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal 
          bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>
          ASPIRING WEB AND CP ENTHUSIAST
        </p>
      </div>

      <div className='w-full h-screen absolute inset-0'>
      {/* <Leva/> */}
        <Canvas
          className="w-full h-full"
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 1, 10]} />
             {/* Model */}
             <HackerRoom
              position={sizes.deskPosition} 
              scale={sizes.deskScale}
               rotation={[0,-Math.PI,0]}
                />
          <group>
            <Target position={sizes.targetPosition}/>
          </group>
            {/* Lighting */}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5}  />
            
           
            {/* Controls & Environment */}
            <OrbitControls enableZoom={true} />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
