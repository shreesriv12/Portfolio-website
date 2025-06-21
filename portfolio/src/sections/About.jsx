import React from 'react'
import { useState } from 'react'
import Globe from 'react-globe.gl'; // Assuming you have a Globe component available


const About = () => {
  const [hasCopied, setHasCopied] = useState(false);


    const handleCopy = () => {
      navigator.clipboard.writeText('shreeyasrivastava1124@gmail.com');
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    };

    const Button = ({ name, isBeam, containerClass }) => (
      <button className={`relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-lg ${isBeam ? 'overflow-hidden' : ''} ${containerClass}`}>
        {isBeam && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        )}
        {name}
      </button>
    );

    // Import Globe component (assuming it's available)
    // const Globe = ({ height, width, backgroundColor, backgroundImageOpacity, showAtmosphere, showGraticules, globeImageUrl, bumpImageUrl, labelsData }) => {
    //   // This would be the actual Globe component implementation
    // };

  return (
    <section className='sm:px-10 px-5 my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 h-full'>
            {/* Profile Card */}
            <div className='col-span-1 xl:row-span-3'>
                <div className="group w-full h-full relative">
                    {/* Animated border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    
                    <div className="relative w-full h-full border-2 border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-5 hover:border-purple-500/30 transition-all duration-300">
                        {/* Image placeholder */}
                      <div className="w-full sm:h-[276px] h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700/50">
  <img
    src="/assets/grid1.png"
    alt="Profile"
    className="h-70 w-80  object-cover border border-gray-600"
  />
</div>

                        
                        <div>
                            <p className="text-xl font-semibold mb-3 text-white font-sans bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Hi, I'm Shreeeya Srivastava
                            </p>
                            <p className="text-gray-400 text-base font-sans leading-relaxed">
                                I am developing my skills in both frontend and backend dev, creating dynamic
                                and responsive websites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack Card */}
            <div className='col-span-1 xl:row-span-3'>
                <div className="group w-full h-full relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    
                    <div className='relative w-full h-full border-2 border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-5 hover:border-green-500/30 transition-all duration-300'>
                        {/* Tech stack visual */}
                      <div className="w-full max-h-72 overflow-y-auto bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-lg p-4 border border-gray-700/50 flex flex-wrap gap-3 content-start">
  {[
    'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS',
    'Next.js', 'Zustand', 'Tailwind CSS', 'ShadCN/UI', 'Three.js', 'Leaflet.js',
    'Express.js', 'FastAPI', 'C', 'C++', 'PostgreSQL', 'MongoDB', 'Neo4j',
    'Docker', 'Git', 'GitHub', 'REST APIs', 'JWT', 'WebSockets', 'WebRTC',
    'NumPy', 'Pandas', 'scikit-learn', 'LangChain', 'FAISS', 'SentenceTransformers',
    'Gemini API', 'OpenCV', 'Machine Learning (ML)', 'Deep Learning (DL)',
    'Generative AI (GenAI)', 'Natural Language Processing (NLP)',
    'Computer Vision (CV)', 'Colab', 'VS Code'
  ].map((tech, index) => (
    <div
      key={tech}
      className="px-3 py-1.5 bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30 rounded-full text-green-300 text-sm animate-pulse"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {tech}
    </div>
  ))}
</div>


                        <div>
                            <p className="text-xl font-semibold mb-3 text-white font-sans bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                                Tech Stack
                            </p>
                            <p className="text-gray-400 text-base font-sans leading-relaxed">
                                I am learning to specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
                            </p>
                        </div> 
                    </div>
                </div>
            </div>

            {/* Globe/Location Card */}
            <div className="col-span-1 xl:row-span-4">
                <div className="group w-full h-full relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    
                    <div className="relative w-full h-full border-2 border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-5 hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex justify-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                            />
                        </div>

                        <div>
                            <p className="text-xl font-semibold mb-3 text-white font-sans bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                I'm very flexible with time zone communications & locations
                            </p>
                            <p className="text-gray-400 text-base font-sans leading-relaxed mb-6">
                                I'm based in Lucknow, Uttar Pradesh and open to remote work worldwide.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Passion Card */}
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="group w-full h-full relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    
                    <div className="relative w-full h-full border-2 border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-5 hover:border-orange-500/30 transition-all duration-300">
                        {/* Coding visual */}
                        <div className="w-full sm:h-[266px] h-48 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg p-4 border border-gray-700/50 relative overflow-hidden">
                            <div className="text-orange-300/60 font-mono text-sm leading-relaxed">
                                <div className="animate-typewriter">{'<div className="passion">'}</div>
                                <div className="animate-typewriter ml-4" style={{ animationDelay: '0.5s' }}>{'const coding = "❤️";'}</div>
                                <div className="animate-typewriter ml-4" style={{ animationDelay: '1s' }}>{'return innovation;'}</div>
                                <div className="animate-typewriter" style={{ animationDelay: '1.5s' }}>{'</div>'}</div>
                            </div>
                            <div className="absolute bottom-4 right-4 text-4xl animate-bounce">💡</div>
                        </div>

                        <div>
                            <p className="text-xl font-semibold mb-3 text-white font-sans bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                My Passion for Coding
                            </p>
                            <p className="text-gray-400 text-base font-sans leading-relaxed">
                                I love solving problems and building things through code. Programming isn't just my
                                profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Card */}
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="group w-full h-full relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    
                    <div className="relative w-full h-full border-2 border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-5 hover:border-pink-500/30 transition-all duration-300">
                        {/* Contact visual */}
                        <div className="w-full md:h-[126px] sm:h-[180px] h-32 bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-lg flex items-center justify-center border border-gray-700/50">
                            <div className="text-center">
                                <div className="text-4xl mb-2 animate-pulse">📧</div>
                                <div className="text-pink-300 text-sm">Let's Connect</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-gray-400 text-base font-sans text-center">Contact me</p>
                            <div 
                                className="cursor-pointer flex justify-center items-center gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:bg-gray-800/50" 
                                onClick={handleCopy}
                            >
                                <div className="text-xl">
                                    {hasCopied ? '✅' : '📋'}
                                </div>
                                <p className="lg:text-lg md:text-base text-sm font-medium bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                    shreeyasrivastava1124@gmail.com
                                </p>
                            </div>
                            {hasCopied && (
                                <p className="text-green-400 text-sm text-center animate-fade-in">
                                    Email copied to clipboard! ✨
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            @keyframes typewriter {
                from { opacity: 0; transform: translateX(-10px); }
                to { opacity: 1; transform: translateX(0); }
            }
            
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .animate-typewriter {
                animation: typewriter 0.5s ease-out forwards;
                opacity: 0;
            }
            
            .animate-fade-in {
                animation: fade-in 0.3s ease-out;
            }
        `}</style>
    </section>
  )
}

export default About
