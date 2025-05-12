import React, { useState } from 'react';
import { Wrench } from 'lucide-react';

const BicycleTool = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdjusting, setIsAdjusting] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // State for fade-out effect

  const toggleTool = () => {
    if (isAdjusting) return;
    setIsOpen(!isOpen);

    if (!isOpen) {
      setIsAdjusting(true);
      setTimeout(() => {
        setIsAdjusting(false);
        setIsFadingOut(true); // Trigger fade-out effect
        setTimeout(() => {
          onOpen(); // Notify parent after fade-out completes
        }, 500); // Match the fade-out duration
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`flex justify-center mb-8 ${isFadingOut ? 'opacity-0 transition-opacity duration-500' : ''}`}>
        <div className={`relative ${isAdjusting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'} mx-auto`} onClick={toggleTool}>
          <div className="flex items-center justify-center">
            {/* Tool body */}
            <div className="relative w-48 h-32 overflow-visible mx-auto">
              {/* Main tool body */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-zinc-700 rounded-full flex items-center justify-between px-4 py-2 shadow-md z-10">
                {/* Left bolt */}
                <div className="w-6 h-6 bg-zinc-800 rounded-full border-4 border-zinc-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-zinc-900 rounded-full"></div>
                </div>
                {/* Central oval */}
                <div className="w-28 h-12 bg-zinc-800 rounded-full border-4 border-zinc-500 flex items-center justify-center relative">
                  <div className="w-24 h-10 bg-zinc-700 rounded-full"></div>
                  {/* Logo and product name */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <Wrench className="h-4 w-4 text-zinc-400 mx-1" />
                    <span className="text-xs text-nowrap font-bold text-zinc-300 text-center">
                      BIKE MULTI-TOOL
                    </span>
                  </div>
                </div>
                {/* Right bolt */}
                <div className="w-6 h-6 bg-zinc-800 rounded-full border-2 border-zinc-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-zinc-900 rounded-full"></div>
                </div>
              </div>
              {/* Tools emerging from the central body */}
              {/* Tool 1 - Top center */}
              <div className={`absolute bottom-6 left-1/2 ml-[-1px] h-16 w-2 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-500 z-0
                ${isOpen ? 'rotate-[0deg] translate-y-[-40px]' : 'rotate-0 translate-y-0 opacity-0'}`} style={{
                transitionDelay: '0ms'
              }}>
                <div className="h-4 w-4 bg-zinc-500 absolute top-0 rounded-t-md"></div>
              </div>
              {/* Tool 2 - Top right */}
              <div className={`absolute bottom-6 left-1/2 ml-[15px] h-14 w-2 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-500 
                ${isOpen ? 'rotate-[30deg] translate-y-[-35px] translate-x-[15px]' : 'rotate-0 translate-y-0 translate-x-0 opacity-0'}`} style={{
                transitionDelay: '50ms'
              }}>
                <div className="h-4 w-4 bg-zinc-500 absolute top-0 rounded-t-md"></div>
              </div>
              {/* Tool 3 - Right edge */}
              <div className={`absolute bottom-6 left-1/2 ml-[30px] h-12 w-2 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-500
                ${isOpen ? 'rotate-[90deg] translate-y-[-30px] translate-x-[50px]' : 'rotate-0 translate-y-0 translate-x-0 opacity-0'}`} style={{
                transitionDelay: '100ms'
              }}>
                <div className="h-4 w-4 bg-zinc-500 absolute top-0 rounded-t-md"></div>
              </div>
              {/* Tool 4 - Bottom right */}
              <div className={`absolute bottom-6 left-1/2 ml-[65px] h-10 w-2 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-500 
                ${isOpen ? 'rotate-[150deg] translate-y-[-20px] translate-x-[20px]' : 'rotate-0 translate-y-0 translate-x-0 opacity-0'}`} style={{
                transitionDelay: '150ms'
              }}>
                <div className="h-4 w-4 bg-zinc-500 absolute top-0 rounded-t-md"></div>
              </div>
              {/* Tool 5 - Bottom left */}
              <div className={`absolute bottom-6 left-1/2 ml-[-25px] h-10 w-2 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-500 
                ${isOpen ? 'rotate-[-150deg] translate-y-[-20px] translate-x-[-72px]' : 'rotate-0 translate-y-0 translate-x-0 opacity-0'}`} style={{
                transitionDelay: '200ms'
              }}>
                <div className="h-4 w-4 bg-zinc-500 absolute top-0 rounded-t-md"></div>
              </div>
              {/* Tool 6 - Left edge */}
              <div className={`absolute bottom-6 left-1/2 ml-[-30px] h-12 w-2 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-500 
                ${isOpen ? 'rotate-[-90deg] translate-y-[-30px] translate-x-[-55px]' : 'rotate-0 translate-y-0 translate-x-0 opacity-0'}`} style={{
                transitionDelay: '250ms'
              }}>
                <div className="h-4 w-4 bg-zinc-500 absolute top-0 rounded-t-md"></div>
              </div>
              {/* Tool 7 - Top left */}
              <div className={`absolute bottom-6 left-1/2 ml-[-15px] h-14 w-2 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-500 
                ${isOpen ? 'rotate-[-30deg] translate-y-[-35px] translate-x-[-15px]' : 'rotate-0 translate-y-0 translate-x-0 opacity-0'}`} style={{
                transitionDelay: '300ms'
              }}>
                <div className="h-4 w-4 bg-zinc-500 absolute top-0 rounded-t-md"></div>
              </div>
              {/* Tool 8 - 315 degrees */}
              <div className={`absolute bottom-6 left-1/2 ml-[20px] h-10 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-500 
                ${isOpen ? 'rotate-[315deg] translate-y-[-35px] translate-x-[5px]' : 'rotate-0 translate-y-0 translate-x-0 opacity-0'}`} style={{
                transitionDelay: '350ms'
              }}>
                <div className="h-6 w-5 bg-zinc-500 absolute -right-1 top-0 rounded-t-md"></div>
              </div>
              {/* New Tool - 22.5 degrees */}
              <div className={`absolute bottom-6 left-1/2 ml-[10px] h-12 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-500 
                ${isOpen ? 'rotate-[22.5deg] translate-y-[-35px] translate-x-[3px]' : 'rotate-0 translate-y-0 translate-x-0 opacity-0'}`} style={{
                transitionDelay: '25ms'
              }}>
                <div className="h-5 w-6 bg-zinc-500 absolute -left-1 top-0 rounded-t-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BicycleTool;