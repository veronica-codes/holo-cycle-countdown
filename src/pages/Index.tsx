
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import HolographicCard from '../components/HolographicCard';
import WorkshopCard from '../components/WorkshopCard';
import HolographicBicycles from '../components/HolographicBicycles';

const Index = () => {
  // Set the event date to June, 6 2025
  const eventDate = new Date("June 6, 2025 00:00:00");

  return (
    <div className="holo-container">
      <div className="glitter-overlay"></div>
      <HolographicBicycles />

      <div className="header">
        <h1>Cycling Event</h1>
        <div className="subtitle">JUNE 6-8, 2025</div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <HolographicCard title="Countdown to the Event">
          <CountdownTimer targetDate={eventDate} />
        </HolographicCard>

        <HolographicCard>
          <WorkshopCard 
            title="Friday Skills Workshops - June 6, 2025" 
            imageSrc="/placeholder.svg"
          >
            <div className="workshop-highlight">
              <p><strong>Optional Full-Day Workshops (9:00 AM - 4:00 PM)</strong></p>
              <p>Build your confidence with our specialty workshops led by SITW coaches and mechanics:</p>
              <ul className="list-disc pl-5 my-2">
                <li><strong>Mechanics School</strong> - Learn essential bike maintenance and repair skills</li>
                <li><strong>Gravel Skills School</strong> - Master off-road riding techniques</li>
              </ul>
              <p><strong>Limited spots available!</strong> Maximum ratio of 1 tutor to 8 riders ensures personalized instruction.</p>
            </div>
            <p className="my-4">These workshops are perfect for riders who want to gain independence and confidence in their off-road adventures.</p>
          </WorkshopCard>
        </HolographicCard>
      </div>
    </div>
  );
};

export default Index;
