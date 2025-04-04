
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
          <div className="relative h-24 w-full overflow-visible">
            {/* Main tool body - oval with two circles */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-zinc-700 rounded-full flex items-center justify-between px-8 mx-6">
              {/* Left circle */}
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-zinc-600">
                <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
              </div>
              
              {/* Right circle */}
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-zinc-600">
                <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
              </div>
            </div>
            
            {/* Tools extending from the oval base */}
            <div className="absolute inset-x-0 bottom-4">
              {/* Metal lines that are only visible when tool is open */}
              {isOpen && (
                <>
                  {/* Metal line details */}
                  <div className="absolute bottom-2 left-1/2 ml-[-40px] h-1 w-12 bg-zinc-400 rounded transform translate-y-[-8px] translate-x-[-12px] rotate-[-45deg]"></div>
                  <div className="absolute bottom-2 left-1/2 ml-[40px] h-1 w-12 bg-zinc-400 rounded transform translate-y-[-8px] translate-x-[12px] rotate-[45deg]"></div>
                  <div className="absolute bottom-2 left-1/2 ml-[-100px] h-1 w-12 bg-zinc-400 rounded transform translate-y-[-4px] rotate-[-25deg]"></div>
                  <div className="absolute bottom-2 left-1/2 ml-[100px] h-1 w-12 bg-zinc-400 rounded transform translate-y-[-4px] rotate-[25deg]"></div>
                </>
              )}
              
              {/* Top tools */}
              <div 
                className={`absolute bottom-2 left-1/2 ml-[-40px] h-12 w-3 bg-zinc-500 rounded-t-md transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-[-90deg]' : 'rotate-0'}`}
                style={{ transitionDelay: '0ms' }}
              ></div>
              <div 
                className={`absolute bottom-2 left-1/2 ml-[40px] h-12 w-3 bg-zinc-500 rounded-t-md transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-90deg' : 'rotate-0'}`}
                style={{ transitionDelay: '50ms' }}
              ></div>
              
              {/* Left angled tools */}
              <div 
                className={`absolute bottom-2 left-1/2 ml-[-65px] h-10 w-3 bg-zinc-400 rounded-t-md transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-[-45deg]' : 'rotate-0'}`}
                style={{ transitionDelay: '100ms' }}
              ></div>
              <div 
                className={`absolute bottom-2 left-1/2 ml-[-90px] h-8 w-3 bg-zinc-500 rounded-t-md transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-[-20deg]' : 'rotate-0'}`}
                style={{ transitionDelay: '150ms' }}
              ></div>
              
              {/* Right angled tools */}
              <div 
                className={`absolute bottom-2 left-1/2 ml-[65px] h-10 w-3 bg-zinc-400 rounded-t-md transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-45deg' : 'rotate-0'}`}
                style={{ transitionDelay: '200ms' }}
              ></div>
              <div 
                className={`absolute bottom-2 left-1/2 ml-[90px] h-8 w-3 bg-zinc-500 rounded-t-md transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-20deg' : 'rotate-0'}`}
                style={{ transitionDelay: '250ms' }}
              ></div>
              
              {/* Far left tool */}
              <div 
                className={`absolute bottom-2 left-1/2 ml-[-115px] h-6 w-8 bg-zinc-600 rounded-t-md transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-[-10deg]' : 'rotate-0'}`}
                style={{ transitionDelay: '300ms' }}
              ></div>
              
              {/* Far right tool */}
              <div 
                className={`absolute bottom-2 left-1/2 ml-[115px] h-6 w-8 bg-zinc-600 rounded-t-md transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-10deg' : 'rotate-0'}`}
                style={{ transitionDelay: '350ms' }}
              ></div>
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
