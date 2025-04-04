
import React from 'react';
import { Bike, Mountain } from 'lucide-react';

const HolographicBicycles: React.FC = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 -z-10 pointer-events-none overflow-hidden">
      <div className="orbit-circle absolute rounded-full border border-stone-600/10 w-[600px] h-[600px] top-1/2 left-1/2 animate-rotate-slow"></div>
      <div className="orbit-circle absolute rounded-full border border-stone-600/10 w-[400px] h-[400px] top-1/2 left-1/2 animate-rotate-medium"></div>
      <div className="orbit-circle absolute rounded-full border border-stone-600/10 w-[200px] h-[200px] top-1/2 left-1/2 animate-rotate-fast"></div>
      
      <div className="absolute w-20 top-[20%] right-[10%] text-peak-green opacity-60 animate-float">
        <Bike size={80} strokeWidth={1} />
      </div>
      
      <div className="absolute w-16 bottom-[30%] left-[15%] text-peak-grass opacity-60 animate-float-delay">
        <Bike size={64} strokeWidth={1} />
      </div>
      
      <div className="absolute w-24 bottom-[10%] right-[25%] text-stone-400 opacity-40 animate-float">
        <Mountain size={96} strokeWidth={1} />
      </div>
      
      <div className="absolute w-32 top-[15%] left-[25%] text-stone-500 opacity-30 animate-float-delay">
        <Mountain size={128} strokeWidth={1} />
      </div>
    </div>
  );
};

export default HolographicBicycles;
