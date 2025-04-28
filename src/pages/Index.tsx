
import { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import BicycleTool from '../components/BicycleTool';
import { Flower } from 'lucide-react';

const Index = () => {
  const [isToolVisible, setIsToolVisible] = useState(true);
  const eventDate = new Date("June 6, 2025 08:00:00");

  const handleToolOpen = () => {
    setIsToolVisible(false);
  };

  return (
    <div className="h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <div className="header bg-gradient-to-r from-pink-50 to-white">
        <div className="flex justify-center items-center gap-3">
          <Flower className="text-pink-400 w-8 h-8" />
          <h1 className="text-5xl">Bike Mechanics X SITW</h1>
          <Flower className="text-pink-400 w-8 h-8" />
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
