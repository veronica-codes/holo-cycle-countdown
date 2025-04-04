
import React from 'react';

const BicycleTool = () => {
  return (
    <div className="absolute bottom-8 right-8 sm:right-12 md:right-16 z-10 text-amber-50/70">
      <div className="relative">
        <div className="w-12 h-12 md:w-16 md:h-16 animate-bounce opacity-80 rounded-full bg-amber-50/20 flex items-center justify-center">
          <span className="text-xs font-bold">BIKE</span>
        </div>
      </div>
    </div>
  );
};

export default BicycleTool;
