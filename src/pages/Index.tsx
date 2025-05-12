
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
    <div className="h-screen bg-gradient-to-br from-purple-100 via-pink-50 via-orange-50 via-yellow-50 via-green-50 to-blue-100">
      <div className="header bg-white/50 backdrop-blur-sm">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl">Bike Mechanics X SITW</h1>
        </div>
        <div className="subtitle">JUNE 6 2025</div>
      </div>

      <div className="mt-10">
        {isToolVisible && (
          <div className="mt-30">
            <BicycleTool onOpen={handleToolOpen} />
          </div>
        )}

        <div className={`${isToolVisible ? 'hidden opacity-0 pointer-events-none' : ''} transition-opacity duration-500`}>
           <CountdownTimer targetDate={eventDate} /> 
        </div>
      </div>
    </div>
  );
};

export default Index;
