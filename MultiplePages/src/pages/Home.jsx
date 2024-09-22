import React from 'react';

function Home() {
  return (
	<section className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-8">
          <h2 className="text-5xl mt-20 text-white md:text-6xl font-extrabold animate-ping">
            Welcome Anand jha
          </h2>
          <p className="text-xl text-white md:text-2xl max-w-xl mx-auto animate-pulse ">
            Discover a new way to manage your projects effortlessly.
          </p>
          <div className="space-x-4">
            <a href="#get-started" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300 animate-bounce">
              Get Started
            </a>
            <a href="#learn-more" className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 animate-bounce-in">
              Learn More
            </a>
          </div>
        </div>
      </section>
     
    
  );
}

export default Home;
