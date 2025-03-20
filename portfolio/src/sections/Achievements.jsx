import { achievementslist } from '../constants/index.js';

const Achievements = () => {
  return (
    <section className="sm:px-10 px-5 my-20">
      <h3 className="sm:text-4xl text-3xl font-semibold text-white 
      relative inline-block before:absolute before:inset-0 before:blur-lg before:bg-blue-500 before:opacity-50 before:z-[-1]">
        My Achievements
      </h3>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {achievementslist.map((item) => (
          <div 
            key={`review-${item.id}`} 
            className="rounded-lg md:p-10 p-5 col-span-1 bg-black-300 bg-opacity-50 border border-gray-700 shadow-lg"
          >
            <div>
              <p className="text-white font-light">{item.review}</p>

              <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7">
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-white md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
