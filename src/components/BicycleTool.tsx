
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Wrench } from 'lucide-react';
const BicycleTool = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdjusting, setIsAdjusting] = useState(false);
  const {
    toast
  } = useToast();
  const toggleTool = () => {
    // If currently adjusting, don't allow toggling
    if (isAdjusting) return;
    setIsOpen(!isOpen);

    // Show appropriate toast notification
    if (!isOpen) {
      setIsAdjusting(true);
      toast({
        title: "Adjusting limit screws...",
        description: "Fine-tuning the derailleur adjustment."
      });

      // Simulate adjustment completion after a delay
      setTimeout(() => {
        setIsAdjusting(false);
        toast({
          title: "Adjustment complete!",
          description: "Your bicycle's shifting is now optimized.",
          variant: "default"
        });
      }, 1500);
    } else {
      toast({
        title: "Tools folded",
        description: "Ready for your next adjustment."
      });
    }
  };
  return <div className="flex justify-center mt-8 mb-8 mx-[10px]">
      <div className={`relative rounded-lg p-3 shadow-xl transition-all duration-300 hover:shadow-2xl ${isAdjusting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`} onClick={toggleTool} style={{
      maxWidth: '320px'
    }}>
        <div className="flex items-center justify-center">
          {/* Tool body */}
          <div className="relative h-32 w-full overflow-visible mx-0">
            {/* Main tool body - enlarged oval-shaped with rounded ends */}
            <div className="absolute inset-x-0 bottom-0 h-14 bg-zinc-700 rounded-full flex items-center justify-between py-[17px] my-[27px] mx-[4px] px-[22px]">
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
              <div className={`absolute left-1/2 bottom-6 transform -translate-x-1/2 w-40 h-40 rounded-full border-2 border-zinc-500 transition-opacity duration-300 ${isOpen ? 'opacity-30' : 'opacity-0'}`}></div>
              
              {/* Tool bits - Note the z-index is now set to a lower value so they appear behind the plastic */}
              
              {/* Tool 1 - 0 degrees (top) */}
              <div className={`absolute bottom-6 left-1/2 ml-[-1.5px] h-16 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 z-0
                ${isOpen ? 'translate-y-[-40px]' : 'translate-y-12 opacity-0'}`} style={{
              transitionDelay: '0ms'
            }}>
                <div className="h-6 w-5 bg-zinc-500 absolute -right-1 top-0 rounded-t-md"></div>
              </div>
              
              {/* Tool 2 - 60 degrees */}
              <div className={`absolute bottom-6 left-1/2 ml-[40px] h-14 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 z-0
                ${isOpen ? 'rotate-[30deg] translate-y-[-35px] translate-x-[10px]' : 'rotate-0 translate-y-12 opacity-0'}`} style={{
              transitionDelay: '50ms'
            }}>
                <div className="h-6 w-6 bg-zinc-500 absolute -left-1 top-0 rounded-t-md"></div>
              </div>
              
              {/* Tool 3 - 120 degrees */}
              <div className={`absolute bottom-6 left-1/2 ml-[70px] h-12 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 z-0
                ${isOpen ? 'rotate-[60deg] translate-y-[-20px] translate-x-[20px]' : 'rotate-0 translate-y-12 opacity-0'}`} style={{
              transitionDelay: '100ms'
            }}>
                <div className="h-5 w-8 bg-zinc-500 absolute -right-2 top-0 rounded-md"></div>
              </div>
              
              {/* Tool 4 - 180 degrees */}
              <div className={`absolute bottom-6 left-1/2 ml-[80px] h-10 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 z-0
                ${isOpen ? 'rotate-[90deg] translate-x-[15px]' : 'rotate-0 translate-y-12 opacity-0'}`} style={{
              transitionDelay: '150ms'
            }}>
                <div className="h-6 w-5 bg-zinc-500 absolute -left-1 top-0 rounded-t-md"></div>
              </div>
              
              {/* Tool 5 - 240 degrees */}
              <div className={`absolute bottom-6 left-1/2 ml-[70px] h-12 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 z-0
                ${isOpen ? 'rotate-[120deg] translate-y-[20px] translate-x-[20px]' : 'rotate-0 translate-y-12 opacity-0'}`} style={{
              transitionDelay: '200ms'
            }}>
                <div className="h-5 w-7 bg-zinc-500 absolute -right-2 top-0 rounded-md"></div>
              </div>
              
              {/* Tool 6 - 300 degrees */}
              <div className={`absolute bottom-6 left-1/2 ml-[-40px] h-14 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 z-0
                ${isOpen ? 'rotate-[-30deg] translate-y-[-35px] translate-x-[-10px]' : 'rotate-0 translate-y-12 opacity-0'}`} style={{
              transitionDelay: '250ms'
            }}>
                <div className="h-6 w-6 bg-zinc-500 absolute -right-1 top-0 rounded-t-md"></div>
              </div>
              
              {/* Tool 7 - 240 degrees */}
              <div className={`absolute bottom-6 left-1/2 ml-[-70px] h-12 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 z-0
                ${isOpen ? 'rotate-[-60deg] translate-y-[-20px] translate-x-[-20px]' : 'rotate-0 translate-y-12 opacity-0'}`} style={{
              transitionDelay: '300ms'
            }}>
                <div className="h-5 w-8 bg-zinc-500 absolute -left-2 top-0 rounded-md"></div>
              </div>
              
              {/* Tool 8 - 180 degrees */}
              <div className={`absolute bottom-6 left-1/2 ml-[-80px] h-10 w-3 bg-gradient-to-t from-zinc-600 to-zinc-500 rounded-t-md origin-bottom transform transition-all duration-300 z-0
                ${isOpen ? 'rotate-[-90deg] translate-x-[-15px]' : 'rotate-0 translate-y-12 opacity-0'}`} style={{
              transitionDelay: '350ms'
            }}>
                <div className="h-6 w-5 bg-zinc-500 absolute -right-1 top-0 rounded-t-md"></div>
              </div>
              
              {/* Plastic center piece with higher z-index to appear over the tools */}
              <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 w-16 h-16 bg-zinc-600 rounded-full z-10"></div>
              
              {/* Tool cap/cover that hides in the base to create the illusion of tools emerging */}
              <div className={`absolute left-1/2 bottom-6 transform -translate-x-1/2 w-16 h-6 bg-zinc-600 rounded-full transition-all duration-300 z-20 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
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
    </div>;
};
export default BicycleTool;
