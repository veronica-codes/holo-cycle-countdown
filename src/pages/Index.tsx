
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
    <div className="h-screen">
      <div className="header">
        <h1 className="text-5xl">Bike Mechanics X SITW</h1>
        <div className="subtitle">JUNE 6 2025</div>
        <div className="text-lg mt-2 text-gray-600">In memory of Lily</div>
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
