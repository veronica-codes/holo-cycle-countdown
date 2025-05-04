
import { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import BicycleTool from '../components/BicycleTool';

const Index = () => {
  const [isToolVisible, setIsToolVisible] = useState(false);
  const eventDate = new Date("June 6, 2025 08:00:00");

  const handleToolOpen = () => {
    setIsToolVisible(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#E2FCE2] via-[#E5F3F0] to-[#D3E4FD]">
      <div className="header bg-white/50 backdrop-blur-sm p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-bold">Bike Mechanics SITW</h1>
        </div>
        <div className="subtitle text-center text-lg font-medium">JUNE 6 2025</div>
      </div>

      <div className="container mx-auto mt-10 px-4">
        {!isToolVisible ? (
          <div className="mt-10 opacity-100 transition-opacity duration-500">
            <CountdownTimer targetDate={eventDate} />
            <div className="flex justify-center mt-8">
              <button 
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                onClick={handleToolOpen}
              >
                Open Bicycle Tool
              </button>
            </div>
          </div>
        ) : (
          <div className="transition-opacity duration-500">
            <BicycleTool onOpen={handleToolOpen} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
