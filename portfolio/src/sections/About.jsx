import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import Button from '../component/Button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText('shreeyasrivastava1124@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  // Auto-rotation and focus effect for the globe
  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current;
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5; // Adjust rotation speed

      // Focus on Lucknow
      globe.pointOfView({ lat: 26.8467, lng: 80.9462, altitude: 2 }, 1000);
    }
  }, []);

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

        {/* Globe Grid */}
        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-black-300 bg-gray-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}  // Attach ref here
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                
                labelsData={[
                  { lat: 26.8467, lng: 80.9462, text: 'Lucknow, India', color: 'white', size: 10 },
                ]}
              />
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
