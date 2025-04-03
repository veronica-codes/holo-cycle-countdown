
import React, { useRef, useState } from 'react';

type HolographicCardProps = {
  title?: string;
  children: React.ReactNode;
};

const HolographicCard: React.FC<HolographicCardProps> = ({ title, children }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const angleX = (x - centerX) / 20;
    const angleY = (centerY - y) / 20;
    
    setTransform(`perspective(1000px) rotateX(${angleY}deg) rotateY(${angleX}deg) translateZ(10px)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0) rotateY(0) translateZ(0)');
  };

  return (
    <div 
      ref={cardRef}
      className="holo-card"
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {title && <h2 className="text-white font-light tracking-wide text-2xl text-center mb-4" style={{ textShadow: '0 0 5px rgba(150, 230, 255, 0.7)' }}>{title}</h2>}
      {children}
    </div>
  );
};

export default HolographicCard;
