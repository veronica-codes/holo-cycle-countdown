
import React from 'react';

const HolographicBicycles: React.FC = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 -z-10 pointer-events-none overflow-hidden">
      <div className="orbit-circle absolute rounded-full border border-stone-600/5 w-[600px] h-[600px] top-1/2 left-1/2 animate-rotate-slow"></div>
      <div className="orbit-circle absolute rounded-full border border-stone-600/5 w-[400px] h-[400px] top-1/2 left-1/2 animate-rotate-medium"></div>
      <div className="orbit-circle absolute rounded-full border border-stone-600/5 w-[200px] h-[200px] top-1/2 left-1/2 animate-rotate-fast"></div>
      
      <div className="absolute w-20 top-[20%] right-[10%] opacity-60 animate-float">
        <div className="h-20 w-20 rounded-full bg-peak-green/10 flex items-center justify-center"></div>
      </div>
      
      <div className="absolute w-16 bottom-[30%] left-[15%] opacity-60 animate-float-delay">
        <div className="h-16 w-16 rounded-full bg-peak-grass/10 flex items-center justify-center"></div>
      </div>
      
      <div className="absolute w-24 bottom-[10%] right-[25%] opacity-40 animate-float">
        <div className="h-24 w-24 bg-stone-400/5 rounded-md flex items-center justify-center"></div>
      </div>
      
      <div className="absolute w-32 top-[15%] left-[25%] opacity-30 animate-float-delay">
        <div className="h-32 w-32 bg-stone-500/5 rounded-md flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default HolographicBicycles;
