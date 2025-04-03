
import React from 'react';

const HolographicBicycles: React.FC = () => {
  return (
    <div className="holo-orbit fixed w-full h-full top-0 left-0 -z-10 pointer-events-none overflow-hidden">
      <div className="orbit-circle absolute rounded-full border border-white/10 w-[600px] h-[600px] top-1/2 left-1/2 animate-rotate-slow"></div>
      <div className="orbit-circle absolute rounded-full border border-white/10 w-[400px] h-[400px] top-1/2 left-1/2 animate-rotate-medium"></div>
      <div className="orbit-circle absolute rounded-full border border-white/10 w-[200px] h-[200px] top-1/2 left-1/2 animate-rotate-fast"></div>
      
      <svg className="bicycle-holo absolute w-20 top-[20%] right-[10%] opacity-60 animate-float" 
        style={{filter: 'drop-shadow(0 0 5px rgba(150, 230, 255, 0.7))'}}
        viewBox="0 0 100 56">
        <path fill="#c5f9ff" d="M63.9,26.4c-2.4,0-4.7,0.6-6.7,1.6l-5.6-9.8h8.9v-4h-12l7.5,13.2c-2.4,2-3.9,5-3.9,8.4c0,6.1,4.9,11,11,11 s11-4.9,11-11S70,26.4,63.9,26.4z M63.9,42.8c-3.9,0-7-3.1-7-7s3.1-7,7-7c3.9,0,7,3.1,7,7S67.7,42.8,63.9,42.8z"/>
        <path fill="#c5f9ff" d="M38.3,30.9c-0.5-1.4-1.2-2.6-2.2-3.7l7.7-11.4l-3.4-2.3l-7.2,10.7c-1.6-0.9-3.5-1.4-5.5-1.4 c-6.1,0-11,4.9-11,11s4.9,11,11,11c6.1,0,11-4.9,11-11C38.7,32.8,38.6,31.8,38.3,30.9z M27.7,42.8c-3.9,0-7-3.1-7-7s3.1-7,7-7 c1.4,0,2.6,0.4,3.7,1.1L23.5,38l3.4,2.3l6.9-10.2c0.5,0.8,0.9,1.7,1.1,2.6c0.1,0.4,0.1,0.8,0.1,1.2C34.7,39.7,31.6,42.8,27.7,42.8z"/>
        <path fill="#c5f9ff" d="M36.3,23.3l-4.9-8.6h11.8v-4H26.6l7.5,13.2L36.3,23.3z"/>
      </svg>
      
      <svg className="bicycle-holo absolute w-16 bottom-[30%] left-[15%] opacity-60 animate-float-delay" 
        style={{filter: 'drop-shadow(0 0 5px rgba(150, 230, 255, 0.7))'}}
        viewBox="0 0 100 56">
        <path fill="#ff99dd" d="M63.9,26.4c-2.4,0-4.7,0.6-6.7,1.6l-5.6-9.8h8.9v-4h-12l7.5,13.2c-2.4,2-3.9,5-3.9,8.4c0,6.1,4.9,11,11,11 s11-4.9,11-11S70,26.4,63.9,26.4z M63.9,42.8c-3.9,0-7-3.1-7-7s3.1-7,7-7c3.9,0,7,3.1,7,7S67.7,42.8,63.9,42.8z"/>
        <path fill="#ff99dd" d="M38.3,30.9c-0.5-1.4-1.2-2.6-2.2-3.7l7.7-11.4l-3.4-2.3l-7.2,10.7c-1.6-0.9-3.5-1.4-5.5-1.4 c-6.1,0-11,4.9-11,11s4.9,11,11,11c6.1,0,11-4.9,11-11C38.7,32.8,38.6,31.8,38.3,30.9z M27.7,42.8c-3.9,0-7-3.1-7-7s3.1-7,7-7 c1.4,0,2.6,0.4,3.7,1.1L23.5,38l3.4,2.3l6.9-10.2c0.5,0.8,0.9,1.7,1.1,2.6c0.1,0.4,0.1,0.8,0.1,1.2C34.7,39.7,31.6,42.8,27.7,42.8z"/>
        <path fill="#ff99dd" d="M36.3,23.3l-4.9-8.6h11.8v-4H26.6l7.5,13.2L36.3,23.3z"/>
      </svg>
    </div>
  );
};

export default HolographicBicycles;
