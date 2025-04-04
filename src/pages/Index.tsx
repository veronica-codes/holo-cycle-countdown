
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import HolographicBicycles from '../components/HolographicBicycles';
import BicycleTool from '../components/BicycleTool';
import ChainRepairButton from '../components/ChainRepairButton';

const Index = () => {
  // Set the event date to June, 6 2025
  const eventDate = new Date("June 6, 2025 00:00:00");

  return (
    <div className="holo-container">
      <div className="glitter-overlay"></div>
      <HolographicBicycles />
      <ChainRepairButton />

      <div className="header">
        <h1>Cycling Event</h1>
        <div className="subtitle">JUNE 6-8, 2025</div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="countdown-container p-8 backdrop-blur-sm bg-stone-800/30 border border-stone-600/30 rounded-xl shadow-lg mt-8">
          <CountdownTimer targetDate={eventDate} />
        </div>
        
        <BicycleTool />
      </div>
    </div>
  );
};

export default Index;
