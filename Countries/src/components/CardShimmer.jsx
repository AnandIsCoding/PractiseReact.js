import React from 'react';

function CardShimmer() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        Array(12).fill(undefined).map((item, index) => (
          <div key={index} className="card bg-base-100 w-80 max-h-96  shadow-xl hover:scale-105 transition-transform">
            <div className="animate-pulse w-full h-48 bg-slate-400 rounded-lg"></div>
            <div className="p-3 space-y-4">
              <div className="animate-pulse w-2/3 h-6  bg-zinc-500 rounded-lg"></div>
              <div className="flex space-x-4">
                <div className="animate-pulse w-1/3 h-3 bg-sky-400 rounded-lg"></div>
                <div className="animate-pulse w-1/3 h-3 bg-sky-300 rounded-lg"></div>
                <div className="animate-pulse w-1/3 h-3 bg-sky-300 rounded-lg"></div>
              </div>
              <div className="space-y-2">
                <div className="animate-pulse w-3/4 h-3 bg-slate-400"></div>
                <div className="animate-pulse w-full h-3 bg-[#e4eae4]"></div>
                <div className="animate-pulse w-2/3 h-3 bg-slate-300"></div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default CardShimmer;
