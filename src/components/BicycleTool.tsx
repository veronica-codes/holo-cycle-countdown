
import React, { useState } from 'react';

const BicycleTool = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleTool = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <div 
        className="bg-zinc-800 rounded-md p-2 cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl"
        onClick={toggleTool}
      >
        <div className="flex items-center justify-center">
          <div className="relative h-12 w-48 overflow-hidden">
            {/* Base handle */}
            <div className="absolute bottom-0 left-0 h-5 w-14 bg-zinc-900 rounded-md"></div>
            
            {/* Tools */}
            <div 
              className={`absolute bottom-2 left-6 h-8 w-2 bg-zinc-400 rounded-t-sm transition-all duration-300 origin-bottom transform ${isOpen ? 'rotate-0' : 'rotate-90'}`}
              style={{ transitionDelay: '0ms' }}
            ></div>
            <div 
              className={`absolute bottom-2 left-9 h-7 w-2 bg-zinc-500 rounded-t-sm transition-all duration-300 origin-bottom transform ${isOpen ? 'rotate-15' : 'rotate-90'}`}
              style={{ transitionDelay: '50ms' }}
            ></div>
            <div 
              className={`absolute bottom-2 left-12 h-9 w-2 bg-zinc-400 rounded-t-sm transition-all duration-300 origin-bottom transform ${isOpen ? 'rotate-30' : 'rotate-90'}`}
              style={{ transitionDelay: '100ms' }}
            ></div>
            <div 
              className={`absolute bottom-2 left-15 h-8 w-2 bg-zinc-500 rounded-t-sm transition-all duration-300 origin-bottom transform ${isOpen ? 'rotate-45' : 'rotate-90'}`}
              style={{ transitionDelay: '150ms' }}
            ></div>
            <div 
              className={`absolute bottom-2 left-18 h-10 w-2 bg-zinc-400 rounded-t-sm transition-all duration-300 origin-bottom transform ${isOpen ? 'rotate-60' : 'rotate-90'}`}
              style={{ transitionDelay: '200ms' }}
            ></div>
            <div 
              className={`absolute bottom-2 left-21 h-9 w-2 bg-zinc-500 rounded-t-sm transition-all duration-300 origin-bottom transform ${isOpen ? 'rotate-75' : 'rotate-90'}`}
              style={{ transitionDelay: '250ms' }}
            ></div>
            <div 
              className={`absolute bottom-2 left-24 h-7 w-3 bg-zinc-600 rounded-t-sm transition-all duration-300 origin-bottom transform ${isOpen ? 'rotate-90' : 'rotate-90'}`}
              style={{ transitionDelay: '300ms' }}
            ></div>
            
            {/* Hex wrenches */}
            <div 
              className={`absolute bottom-2 left-30 h-6 w-4 bg-zinc-700 rounded-sm transition-all duration-300 origin-bottom transform ${isOpen ? 'rotate-105' : 'rotate-90'}`}
              style={{ transitionDelay: '350ms' }}
            ></div>
            <div 
              className={`absolute bottom-2 left-35 h-5 w-4 bg-zinc-700 rounded-sm transition-all duration-300 origin-bottom transform ${isOpen ? 'rotate-120' : 'rotate-90'}`} 
              style={{ transitionDelay: '400ms' }}
            ></div>
          </div>
        </div>
        <div className="text-center mt-1 text-xs text-zinc-400">
          {isOpen ? "Click to fold" : "Click to unfold"}
        </div>
      </div>
    </div>
  );
};

export default BicycleTool;
