
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Wrench } from 'lucide-react';

const BicycleTool = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdjusting, setIsAdjusting] = useState(false);
  const { toast } = useToast();
  
  const toggleTool = () => {
    // If currently adjusting, don't allow toggling
    if (isAdjusting) return;
    
    setIsOpen(!isOpen);
    
    // Show appropriate toast notification
    if (!isOpen) {
      setIsAdjusting(true);
      toast({
        title: "Adjusting limit screws...",
        description: "Fine-tuning the derailleur adjustment.",
      });
      
      // Simulate adjustment completion after a delay
      setTimeout(() => {
        setIsAdjusting(false);
        toast({
          title: "Adjustment complete!",
          description: "Your bicycle's shifting is now optimized.",
          variant: "default",
        });
      }, 1500);
    } else {
      toast({
        title: "Tools folded",
        description: "Ready for your next adjustment.",
      });
    }
  };

  return (
    <div className="flex justify-center mt-8 mb-8">
      <div 
        className={`relative rounded-lg p-3 shadow-xl transition-all duration-300 hover:shadow-2xl ${isAdjusting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
        onClick={toggleTool}
        style={{ maxWidth: '320px' }}
      >
        <div className="flex items-center justify-center">
          {/* Tool body */}
          <div className="relative h-32 w-full overflow-visible">
            {/* Main tool body - enlarged oval-shaped with rounded ends */}
            <div className="absolute inset-x-0 bottom-0 h-14 bg-zinc-700 rounded-full flex items-center justify-between px-4 mx-0">
              {/* Border around the tool body to create the double-line effect */}
              <div className="absolute inset-x-2 inset-y-1 bg-zinc-800 rounded-full border border-zinc-600"></div>
              
              {/* Left circle */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-zinc-600">
                <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
              </div>
              
              {/* Right circle */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-zinc-600">
                <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
              </div>
            </div>
            
            {/* Enlarged plastic base that connects to the tools */}
            <div className="absolute inset-x-0 bottom-4 w-full">
              {/* Connector ring around the base when tools are open */}
              <div 
                className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full border-2 border-zinc-500 transition-all duration-300 
                ${isOpen ? 'opacity-40' : 'opacity-0 scale-0'}`}
              ></div>
              
              {/* Enlarged plastic base that touches all tools */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-10 bg-zinc-700 rounded-full z-10"></div>
              
              {/* Tool 1 - 0 degrees (top) */}
              <div 
                className={`absolute bottom-6 left-1/2 ml-[-1.5px] h-16 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 
                ${isOpen ? 'translate-y-[-40px]' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: '0ms' }}
              >
                <div className="h-6 w-5 bg-zinc-500 absolute -right-1 top-0 rounded-t-md"></div>
                {/* Connector to base */}
                <div className="absolute bottom-[-3px] left-[-1px] w-5 h-2 bg-zinc-600 rounded-b-sm"></div>
              </div>
              
              {/* Tool 2 - 60 degrees */}
              <div 
                className={`absolute bottom-6 left-1/2 ml-[40px] h-14 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 
                ${isOpen ? 'rotate-[30deg] translate-y-[-35px] translate-x-[10px]' : 'rotate-0 translate-y-12 opacity-0'}`}
                style={{ transitionDelay: '50ms' }}
              >
                <div className="h-6 w-6 bg-zinc-500 absolute -left-1 top-0 rounded-t-md"></div>
                {/* Connector to base */}
                <div className="absolute bottom-[-2px] left-[-1px] w-5 h-2 bg-zinc-600 rounded-b-sm transform rotate-[-30deg]"></div>
              </div>
              
              {/* Tool 3 - 120 degrees */}
              <div 
                className={`absolute bottom-6 left-1/2 ml-[70px] h-12 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 
                ${isOpen ? 'rotate-[60deg] translate-y-[-20px] translate-x-[20px]' : 'rotate-0 translate-y-12 opacity-0'}`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="h-5 w-8 bg-zinc-500 absolute -right-2 top-0 rounded-md"></div>
                {/* Connector to base */}
                <div className="absolute bottom-[-1px] left-[0px] w-5 h-2 bg-zinc-600 rounded-b-sm transform rotate-[-60deg]"></div>
              </div>
              
              {/* Tool 4 - 180 degrees */}
              <div 
                className={`absolute bottom-6 left-1/2 ml-[80px] h-10 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 
                ${isOpen ? 'rotate-[90deg] translate-x-[15px]' : 'rotate-0 translate-y-12 opacity-0'}`}
                style={{ transitionDelay: '150ms' }}
              >
                <div className="h-6 w-5 bg-zinc-500 absolute -left-1 top-0 rounded-t-md"></div>
                {/* Connector to base */}
                <div className="absolute bottom-[0px] left-[0px] w-3 h-2 bg-zinc-600 rounded-b-sm transform rotate-[-90deg]"></div>
              </div>
              
              {/* Tool 5 - 240 degrees */}
              <div 
                className={`absolute bottom-6 left-1/2 ml-[70px] h-12 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 
                ${isOpen ? 'rotate-[120deg] translate-y-[20px] translate-x-[20px]' : 'rotate-0 translate-y-12 opacity-0'}`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="h-5 w-7 bg-zinc-500 absolute -right-2 top-0 rounded-md"></div>
                {/* Connector to base */}
                <div className="absolute bottom-[0px] left-[0px] w-5 h-2 bg-zinc-600 rounded-b-sm transform rotate-[-120deg]"></div>
              </div>
              
              {/* Tool 6 - 300 degrees */}
              <div 
                className={`absolute bottom-6 left-1/2 ml-[-40px] h-14 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 
                ${isOpen ? 'rotate-[-30deg] translate-y-[-35px] translate-x-[-10px]' : 'rotate-0 translate-y-12 opacity-0'}`}
                style={{ transitionDelay: '250ms' }}
              >
                <div className="h-6 w-6 bg-zinc-500 absolute -right-1 top-0 rounded-t-md"></div>
                {/* Connector to base */}
                <div className="absolute bottom-[-2px] right-[-1px] w-5 h-2 bg-zinc-600 rounded-b-sm transform rotate-[30deg]"></div>
              </div>
              
              {/* Tool 7 - 240 degrees */}
              <div 
                className={`absolute bottom-6 left-1/2 ml-[-70px] h-12 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 
                ${isOpen ? 'rotate-[-60deg] translate-y-[-20px] translate-x-[-20px]' : 'rotate-0 translate-y-12 opacity-0'}`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="h-5 w-8 bg-zinc-500 absolute -left-2 top-0 rounded-md"></div>
                {/* Connector to base */}
                <div className="absolute bottom-[-1px] right-[0px] w-5 h-2 bg-zinc-600 rounded-b-sm transform rotate-[60deg]"></div>
              </div>
              
              {/* Tool 8 - 180 degrees */}
              <div 
                className={`absolute bottom-6 left-1/2 ml-[-80px] h-10 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 
                ${isOpen ? 'rotate-[-90deg] translate-x-[-15px]' : 'rotate-0 translate-y-12 opacity-0'}`}
                style={{ transitionDelay: '350ms' }}
              >
                <div className="h-6 w-5 bg-zinc-500 absolute -right-1 top-0 rounded-t-md"></div>
                {/* Connector to base */}
                <div className="absolute bottom-[0px] right-[0px] w-3 h-2 bg-zinc-600 rounded-b-sm transform rotate-[90deg]"></div>
              </div>
              
              {/* Base attachment points - only visible when tools are open */}
              <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-9 rounded-full transition-all duration-500 flex justify-around items-center
                ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                {/* Small attachment points visible when tools are extended */}
                <div className="w-2 h-2 bg-zinc-400 rounded-full transform -translate-y-1"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full transform translate-y-2 translate-x-3"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full transform translate-y-3 translate-x-5"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full transform translate-y-2 translate-x-10"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full transform translate-y-2"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full transform translate-y-3 translate-x-[-5]"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full transform translate-y-2 translate-x-[-3]"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full transform translate-y-2 translate-x-[-10]"></div>
              </div>
              
              {/* Tool cap/cover that hides in the base to create the illusion of tools emerging */}
              <div className="absolute inset-x-0 bottom-2 h-6 bg-zinc-700 rounded-full z-20"></div>
            </div>
          </div>
        </div>
        
        {/* Logo and product name */}
        <div className="flex items-center justify-center mt-2">
          <Wrench className="h-4 w-4 text-zinc-400 mr-1" />
          <span className="text-xs font-bold text-zinc-300">BIKE MULTI-TOOL</span>
        </div>
        
        <div className="text-center mt-2 text-xs font-medium text-zinc-400 bg-zinc-800 rounded py-1 px-2">
          {isAdjusting ? "Adjusting..." : isOpen ? "Limit Screws Adjusted" : "Adjust Limit Screws"}
        </div>
      </div>
    </div>
  );
};

export default BicycleTool;
