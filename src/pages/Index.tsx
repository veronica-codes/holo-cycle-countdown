import { useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import BicycleTool from "../components/BicycleTool";

const Index = () => {
  const [isToolVisible, setIsToolVisible] = useState(true);
  const eventDate = new Date("June 6, 2025 08:00:00");

  const handleToolOpen = () => {
    setIsToolVisible(false);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-200 via-orange-50 via-green-100 to-orange-300">
      <div className="header bg-white/70 backdrop-blur-sm">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl">gravel mechanics</h1>
        </div>
        <div className="subtitle">JUNE 6 2025 @ LA12 8LL, SITW</div>
      </div>

      <div className="mt-10">
        {isToolVisible && (
          <div className="mt-30">
            <BicycleTool onOpen={handleToolOpen} />
          </div>
        )}

        <div
          className={`${
            isToolVisible ? "hidden opacity-0 pointer-events-none" : ""
          } transition-opacity duration-500`}
        >
          <CountdownTimer targetDate={eventDate} />
        </div>
      </div>

      <div className="footer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320" // Updated viewBox to match full width
          style={{
            width: "100%", // Ensures the SVG spans the full width of the page
            height: "auto", // Maintains the aspect ratio
            transform: "scale(1, -1)", // Flips the SVG vertically
          }}
        >
          <path
            fillOpacity="0.4"
            d="M0,320L120,240L240,320L360,160L480,320L600,80L720,320L840,200L960,320L1080,120L1200,320L1320,160L1440,320L1440,0L1320,0L1200,0L1080,0L960,0L840,0L720,0L600,0L480,0L360,0L240,0L120,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Index;
