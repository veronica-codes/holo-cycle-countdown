
import React, { useState } from 'react';
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type WorkshopCardProps = {
  title: string;
  imageSrc: string;
  children: React.ReactNode;
};

const WorkshopCard: React.FC<WorkshopCardProps> = ({ title, imageSrc, children }) => {
  const [isBooking, setIsBooking] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [workshopType, setWorkshopType] = useState('mechanics');

  const handleBookWorkshop = () => {
    if (isBooking) {
      if (!name || !email) {
        toast.error("Please fill out all required fields");
        return;
      }
      
      // Process the booking
      toast.success(`Workshop booked successfully for ${name}!`, {
        description: `You've registered for the ${workshopType === 'mechanics' ? 'Mechanics School' : 'Gravel Skills School'}.`,
      });
      
      // Reset form state
      setIsBooking(false);
      setName('');
      setEmail('');
      setWorkshopType('mechanics');
    } else {
      setIsBooking(true);
    }
  };
  
  return (
    <div>
      <h3 className="workshop-title">{title}</h3>
      
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <div className="md:w-2/5 w-full rounded-lg overflow-hidden shadow-lg relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none z-10"></div>
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
            style={{ filter: 'saturate(1.2) contrast(1.05)' }}
          />
        </div>
        <div className="flex-1">
          {children}
          
          {isBooking ? (
            <div className="space-y-4 mt-6 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <h4 className="text-lg font-semibold text-white/90">Book Your Workshop</h4>
              
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="workshop-type">Workshop Type</Label>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="mechanics"
                      name="workshop-type"
                      value="mechanics"
                      checked={workshopType === 'mechanics'}
                      onChange={() => setWorkshopType('mechanics')}
                      className="mr-2"
                    />
                    <label htmlFor="mechanics">Mechanics School</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="gravel"
                      name="workshop-type"
                      value="gravel"
                      checked={workshopType === 'gravel'}
                      onChange={() => setWorkshopType('gravel')}
                      className="mr-2"
                    />
                    <label htmlFor="gravel">Gravel Skills</label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <button 
                  onClick={() => setIsBooking(false)}
                  className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleBookWorkshop}
                  className="holo-btn"
                >
                  Complete Booking
                </button>
              </div>
            </div>
          ) : (
            <button 
              onClick={handleBookWorkshop}
              className="holo-btn"
            >
              Book Workshop
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
