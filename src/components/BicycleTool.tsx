
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
        className={`relative bg-zinc-900 rounded-lg p-3 shadow-xl transition-all duration-300 hover:shadow-2xl ${isAdjusting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
        onClick={toggleTool}
        style={{ maxWidth: '280px' }}
      >
        <div className="flex items-center justify-center">
          {/* Tool body */}
          <div className="relative h-20 w-full overflow-hidden">
            {/* Main tool body */}
            <div className="absolute inset-x-0 bottom-0 h-8 bg-zinc-800 rounded-md flex items-center justify-end px-2">
              <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-zinc-600"></div>
              </div>
            </div>
            
            {/* Tool elements with improved realistic look */}
            <div className="absolute bottom-6 left-4 right-4 flex justify-center">
              {/* Hex tools */}
              <div 
                className={`absolute bottom-0 left-4 h-10 w-3 bg-zinc-400 rounded-sm transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-15' : 'rotate-90'} shadow-md`}
                style={{ transitionDelay: '0ms' }}
              ></div>
              <div 
                className={`absolute bottom-0 left-10 h-12 w-3 bg-zinc-500 rounded-sm transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-30' : 'rotate-90'} shadow-md`}
                style={{ transitionDelay: '50ms' }}
              ></div>
              <div 
                className={`absolute bottom-0 left-16 h-14 w-3 bg-zinc-400 rounded-sm transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-45' : 'rotate-90'} shadow-md`}
                style={{ transitionDelay: '100ms' }}
              ></div>
              <div 
                className={`absolute bottom-0 left-22 h-12 w-3 bg-zinc-500 rounded-sm transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-60' : 'rotate-90'} shadow-md`}
                style={{ transitionDelay: '150ms' }}
              ></div>
              <div 
                className={`absolute bottom-0 left-28 h-10 w-3 bg-zinc-400 rounded-sm transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-75' : 'rotate-90'} shadow-md`}
                style={{ transitionDelay: '200ms' }}
              ></div>
              
              {/* Wrench tools */}
              <div 
                className={`absolute bottom-0 right-28 h-9 w-4 bg-zinc-600 rounded-sm transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-105' : 'rotate-90'} shadow-md`}
                style={{ transitionDelay: '250ms' }}
              >
                <div className="absolute top-0 left-0 right-0 h-3 bg-zinc-500 rounded-sm"></div>
              </div>
              <div 
                className={`absolute bottom-0 right-22 h-11 w-4 bg-zinc-600 rounded-sm transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-120' : 'rotate-90'} shadow-md`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="absolute top-0 left-0 right-0 h-3 bg-zinc-500 rounded-sm"></div>
              </div>
              <div 
                className={`absolute bottom-0 right-16 h-10 w-4 bg-zinc-600 rounded-sm transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-135' : 'rotate-90'} shadow-md`}
                style={{ transitionDelay: '350ms' }}
              >
                <div className="absolute top-0 left-0 right-0 h-3 bg-zinc-500 rounded-sm"></div>
              </div>
              <div 
                className={`absolute bottom-0 right-10 h-8 w-4 bg-zinc-600 rounded-sm transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-150' : 'rotate-90'} shadow-md`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="absolute top-0 left-0 right-0 h-3 bg-zinc-500 rounded-sm"></div>
              </div>
              <div 
                className={`absolute bottom-0 right-4 h-7 w-4 bg-zinc-600 rounded-sm transform origin-bottom transition-all duration-300 ${isOpen ? 'rotate-165' : 'rotate-90'} shadow-md`}
                style={{ transitionDelay: '450ms' }}
              >
                <div className="absolute top-0 left-0 right-0 h-3 bg-zinc-500 rounded-sm"></div>
              </div>
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
