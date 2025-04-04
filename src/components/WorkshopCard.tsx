
import React from 'react';

type WorkshopCardProps = {
  title: string;
  imageSrc: string;
  children: React.ReactNode;
};

const WorkshopCard: React.FC<WorkshopCardProps> = ({
  title,
  imageSrc,
  children
}) => {
  return (
    <div className="workshop-card">
      <h3 className="workshop-title">{title}</h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img 
            src={imageSrc} 
            alt={title} 
            className="rounded-lg object-cover w-full h-48 border border-stone-600/30 shadow-md"
          />
        </div>
        <div className="md:w-2/3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
