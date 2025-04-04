
import React from 'react';
import { Wrench, Bike } from 'lucide-react';

const BicycleTool = () => {
  return (
    <div className="absolute bottom-8 right-8 sm:right-12 md:right-16 z-10 text-amber-50/70">
      <div className="relative">
        <Bike className="w-12 h-12 md:w-16 md:h-16 animate-bounce opacity-80" />
        <Wrench className="absolute -top-3 -right-3 w-8 h-8 md:w-10 md:h-10 rotate-45 animate-pulse" />
      </div>
    </div>
  );
};

export default BicycleTool;
