
import { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import BicycleTool from '../components/BicycleTool';

const Index = () => {
  const [isToolVisible, setIsToolVisible] = useState(true); // State to control visibility
  const eventDate = new Date("June 6, 2025 08:00:00");

  const handleToolOpen = () => {
    setIsToolVisible(false); // Hide the tool immediately after opening
  };

  return (
    <div className="h-screen">
      <div className="header">
        <h1 className="text-5xl">Bike Repair Workshop</h1>
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
