import { achievementslist } from '../constants/index.js';

const Achievements = () => {
  return (
    <section className="sm:px-10 px-5 my-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="sm:text-4xl text-3xl font-semibold text-white mb-4">
          My Achievements
        </h3>
        <p className="text-white-600 text-lg mb-12 max-w-2xl">
          A collection of milestones and accomplishments that showcase my journey and growth in the field.
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-12">
          {achievementslist.map((item, index) => (
            <div 
              key={`achievement-${item.id}`} 
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-black-200/30 to-black-300/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Achievement Icon/Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                        Achievement #{index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievement Description */}
                <div className="mb-6">
                  <p className="text-white text-lg leading-relaxed font-light">
                    {item.review}
                  </p>
                </div>

                {/* Achievement Details */}
                <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {item.name?.charAt(0) || 'A'}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-white text-base">
                        {item.name}
                      </p>
                      <p className="text-white-600 text-sm font-light">
                        {item.position}
                      </p>
                    </div>
                  </div>

                  {/* Date or additional info */}
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white-600 text-sm">
                      {item.date || '2024'}
                    </span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default Achievements;
