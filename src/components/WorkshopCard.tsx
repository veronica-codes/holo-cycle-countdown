
import React from 'react';

type WorkshopCardProps = {
  title: string;
  imageSrc: string;
  children: React.ReactNode;
};

const WorkshopCard: React.FC<WorkshopCardProps> = ({ title, imageSrc, children }) => {
  return (
    <div>
      <h3 className="workshop-title">{title}</h3>
      
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <div className="md:w-2/5 w-full rounded-lg overflow-hidden shadow-lg relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none z-10"></div>
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
            style={{ filter: 'saturate(1.2) contrast(1.05)' }}
          />
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
