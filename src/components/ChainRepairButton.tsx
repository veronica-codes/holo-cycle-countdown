
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ChainRepairButton = () => {
  const [isRepairing, setIsRepairing] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const { toast } = useToast();

  const handleRepair = () => {
    // Already fixed, reset it
    if (isFixed) {
      setIsFixed(false);
      toast({
        title: "Chain loosened",
        description: "The bike chain needs repair again.",
      });
      return;
    }

    // Start repair simulation
    setIsRepairing(true);
    toast({
      title: "Repairing chain...",
      description: "Hold on, fixing the chain now!",
    });

    // Simulate repair time
    setTimeout(() => {
      setIsRepairing(false);
      setIsFixed(true);
      toast({
        title: "Chain fixed!",
        description: "The bike is ready to ride.",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <div className="fixed bottom-24 right-8 sm:right-12 md:right-16 z-10 flex flex-col items-center">
      <Button
        onClick={handleRepair}
        disabled={isRepairing}
        variant={isFixed ? "default" : "destructive"}
        size="lg"
        className={`relative overflow-hidden transition-all duration-300 ${
          isRepairing ? 'animate-pulse' : ''
        } ${isFixed ? 'bg-green-600 hover:bg-green-700' : ''}`}
      >
        {isRepairing ? (
          "Fixing Chain..."
        ) : isFixed ? (
          "Chain Fixed!"
        ) : (
          "Fix Bike Chain"
        )}
        
        {isRepairing && (
          <div className="absolute bottom-0 left-0 h-1 bg-amber-400 animate-[progress_2s_ease-in-out_forwards]" style={{width: '0%'}} />
        )}
      </Button>
      
      {isFixed && (
        <div className="mt-2 text-xs text-amber-50/70 font-medium animate-fade-in">
          Click again to reset
        </div>
      )}
    </div>
  );
};

export default ChainRepairButton;
