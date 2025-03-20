import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Button from '../component/Button';

const Earth = () => {
  const { scene } = useGLTF('/models/earth.glb'); // Make sure the path is correct
  return <primitive object={scene} scale={1.5} />;
};

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('shreeyasrivastava1124@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="sm:px-10 px-5 my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* Grid 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-gray-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Hi, I’m Shreeeya Srivastava</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I am developing my skills in both frontend and backend dev, creating dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-gray-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Tech Stack</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I am learning to specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
              </p>
            </div>
          </div>
        </div>

        {/* Earth Grid */}
        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-black-300 bg-gray-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-[326px] flex justify-center items-center">
              <Canvas>
                <OrbitControls autoRotate autoRotateSpeed={0.5} />
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Earth />
              </Canvas>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">I’m very flexible with time zone communications & locations</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I&apos;m based in Lucknow, Uttar Pradesh and open to remote work worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" id="contact" />
            </div>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-gray-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">My Passion for Coding</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I love solving problems and building things through code. Programming isn&apos;t just my profession—it&apos;s my passion. I enjoy exploring new technologies and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 4 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-black-300 bg-gray-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="text-[#afb0b6] text-base font-generalsans text-center">Contact me</p>
              <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">shreeyasrivastava1124@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
