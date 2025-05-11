
import { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import BicycleTool from '../components/BicycleTool';

const Index = () => {
  const [isToolVisible, setIsToolVisible] = useState(false); // Changed initial state to false
  const eventDate = new Date("June 6, 2025 08:00:00");

  const handleToolOpen = () => {
    setIsToolVisible(true); // Changed to set to true when tool opens
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-200 via-yellow-200 via-green-200 via-blue-200 to-purple-200">
      <div className="header bg-white/50 backdrop-blur-sm p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-bold">Bike Mechanics SITW</h1>
        </div>
        <div className="subtitle">JUNE 6 2025</div>
      </div>

      <div className="container mx-auto mt-10 px-4">
        {!isToolVisible ? (
          <div className="mt-10">
            <CountdownTimer targetDate={eventDate} />
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
