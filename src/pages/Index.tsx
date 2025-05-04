
import { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import BicycleTool from '../components/BicycleTool';

const Index = () => {
  const [isToolVisible, setIsToolVisible] = useState(true);
  const eventDate = new Date("June 6, 2025 08:00:00");

  const handleToolOpen = () => {
    setIsToolVisible(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#d2f3db] to-[#d3e4fd]">
      <div className="header bg-white/50 backdrop-blur-sm">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl">Bike Mechanics SITW</h1>
        </div>
        <div className="subtitle">JUNE 6 2025</div>
      </div>

      {/* Gradient quote section */}
      <div className="relative w-full py-12 px-6 flex justify-center items-center">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-neutral-800">
            Even Pioneers fade when they stop evolving.
          </h2>
          <div className="mt-4 w-3/4 mx-auto flex justify-end">
            <div className="w-1/2 h-0.5 bg-black flex items-center">
              <div className="w-3 h-3 bg-black transform rotate-45 ml-auto"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 px-4">
        {isToolVisible ? (
          <div className="mt-10">
            <BicycleTool onOpen={handleToolOpen} />
          </div>
        ) : (
          <div className="transition-opacity duration-500">
            <CountdownTimer targetDate={eventDate} /> 
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
