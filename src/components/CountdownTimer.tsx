import React, { useState, useEffect } from 'react';

type CountdownProps = {
  targetDate: Date;
};

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown flex flex-wrap justify-center gap-8 mx-auto mt-20">
      <div className="countdown-item">
        <div className='bike_container'>
          <div className="bike__wheel_d">
            <div className="wheel-hub"></div>
            <div className="spoke spoke-1"></div>
            <div className="spoke spoke-2"></div>
            <div className="spoke spoke-3"></div>
            <div className="spoke spoke-4"></div>
            <div className="spoke spoke-5"></div>
            <div className="spoke spoke-6"></div>
            <div className="spoke spoke-7"></div>
            <div className="spoke spoke-8"></div>
            <div className="spoke spoke-9"></div>
            <div className="spoke spoke-10"></div>
            <div className="spoke spoke-11"></div>
            <div className="spoke spoke-12"></div>
            <div className="spoke spoke-13"></div>
            <div className="spoke spoke-14"></div>
            <div className="spoke spoke-15"></div>
            <div className="spoke spoke-16"></div>
            <div className="spoke spoke-17"></div>
            <div className="spoke spoke-18"></div>
            <div className="spoke spoke-19"></div>
            <div className="spoke spoke-20"></div>
            <div className="spoke spoke-21"></div>
            <div className="spoke spoke-22"></div>
            <div className="spoke spoke-23"></div>
            <div className="spoke spoke-24"></div>
            <div className="spoke spoke-25"></div>
            <div className="spoke spoke-26"></div>
            <div className="spoke spoke-27"></div>
            <div className="spoke spoke-28"></div>
            <div className="spoke spoke-29"></div>
            <div className="spoke spoke-30"></div>
            <div className="spoke spoke-31"></div>
            <div className="spoke spoke-32"></div>
            <div className="spoke spoke-33"></div>
            <div className="spoke spoke-34"></div>
            <div className="spoke spoke-35"></div>
            <div className="spoke spoke-36"></div>
          </div>
        </div>
        <div className="countdown-value  ">
          {timeLeft.days}d
        </div>
      </div>
      <div className="countdown-item">
      <div className='bike_container'>
          <div className="bike__wheel_h">
            <div className="wheel-hub"></div>
            <div className="spoke spoke-1"></div>
            <div className="spoke spoke-2"></div>
            <div className="spoke spoke-3"></div>
            <div className="spoke spoke-4"></div>
            <div className="spoke spoke-5"></div>
            <div className="spoke spoke-6"></div>
            <div className="spoke spoke-7"></div>
            <div className="spoke spoke-8"></div>
            <div className="spoke spoke-9"></div>
            <div className="spoke spoke-10"></div>
            <div className="spoke spoke-11"></div>
            <div className="spoke spoke-12"></div>
            <div className="spoke spoke-13"></div>
            <div className="spoke spoke-14"></div>
            <div className="spoke spoke-15"></div>
            <div className="spoke spoke-16"></div>
            <div className="spoke spoke-17"></div>
            <div className="spoke spoke-18"></div>
            <div className="spoke spoke-19"></div>
            <div className="spoke spoke-20"></div>
            <div className="spoke spoke-21"></div>
            <div className="spoke spoke-22"></div>
            <div className="spoke spoke-23"></div>
            <div className="spoke spoke-24"></div>
            <div className="spoke spoke-25"></div>
            <div className="spoke spoke-26"></div>
            <div className="spoke spoke-27"></div>
            <div className="spoke spoke-28"></div>
            <div className="spoke spoke-29"></div>
            <div className="spoke spoke-30"></div>
            <div className="spoke spoke-31"></div>
            <div className="spoke spoke-32"></div>
            <div className="spoke spoke-33"></div>
            <div className="spoke spoke-34"></div>
            <div className="spoke spoke-35"></div>
            <div className="spoke spoke-36"></div>
          </div>
        </div>
        <div className="countdown-value">
          {timeLeft.hours}h
        </div>
      </div>
      <div className="countdown-item">
      <div className='bike_container'>
          <div className="bike__wheel_m">
            <div className="wheel-hub"></div>
            <div className="spoke spoke-1"></div>
            <div className="spoke spoke-2"></div>
            <div className="spoke spoke-3"></div>
            <div className="spoke spoke-4"></div>
            <div className="spoke spoke-5"></div>
            <div className="spoke spoke-6"></div>
            <div className="spoke spoke-7"></div>
            <div className="spoke spoke-8"></div>
            <div className="spoke spoke-9"></div>
            <div className="spoke spoke-10"></div>
            <div className="spoke spoke-11"></div>
            <div className="spoke spoke-12"></div>
            <div className="spoke spoke-13"></div>
            <div className="spoke spoke-14"></div>
            <div className="spoke spoke-15"></div>
            <div className="spoke spoke-16"></div>
            <div className="spoke spoke-17"></div>
            <div className="spoke spoke-18"></div>
            <div className="spoke spoke-19"></div>
            <div className="spoke spoke-20"></div>
            <div className="spoke spoke-21"></div>
            <div className="spoke spoke-22"></div>
            <div className="spoke spoke-23"></div>
            <div className="spoke spoke-24"></div>
            <div className="spoke spoke-25"></div>
            <div className="spoke spoke-26"></div>
            <div className="spoke spoke-27"></div>
            <div className="spoke spoke-28"></div>
            <div className="spoke spoke-29"></div>
            <div className="spoke spoke-30"></div>
            <div className="spoke spoke-31"></div>
            <div className="spoke spoke-32"></div>
            <div className="spoke spoke-33"></div>
            <div className="spoke spoke-34"></div>
            <div className="spoke spoke-35"></div>
            <div className="spoke spoke-36"></div>
          </div>
        </div>
        <div className="countdown-value">
          {timeLeft.minutes}m
        </div>
      </div>
      <div className="countdown-item relative">
      <div className='bike_container'>
          <div className="bike__wheel_s">
            <div className="wheel-hub"></div>
            <div className="spoke spoke-1"></div>
            <div className="spoke spoke-2"></div>
            <div className="spoke spoke-3"></div>
            <div className="spoke spoke-4"></div>
            <div className="spoke spoke-5"></div>
            <div className="spoke spoke-6"></div>
            <div className="spoke spoke-7"></div>
            <div className="spoke spoke-8"></div>
            <div className="spoke spoke-9"></div>
            <div className="spoke spoke-10"></div>
            <div className="spoke spoke-11"></div>
            <div className="spoke spoke-12"></div>
            <div className="spoke spoke-13"></div>
            <div className="spoke spoke-14"></div>
            <div className="spoke spoke-15"></div>
            <div className="spoke spoke-16"></div>
            <div className="spoke spoke-17"></div>
            <div className="spoke spoke-18"></div>
            <div className="spoke spoke-19"></div>
            <div className="spoke spoke-20"></div>
            <div className="spoke spoke-21"></div>
            <div className="spoke spoke-22"></div>
            <div className="spoke spoke-23"></div>
            <div className="spoke spoke-24"></div>
            <div className="spoke spoke-25"></div>
            <div className="spoke spoke-26"></div>
            <div className="spoke spoke-27"></div>
            <div className="spoke spoke-28"></div>
            <div className="spoke spoke-29"></div>
            <div className="spoke spoke-30"></div>
            <div className="spoke spoke-31"></div>
            <div className="spoke spoke-32"></div>
            <div className="spoke spoke-33"></div>
            <div className="spoke spoke-34"></div>
            <div className="spoke spoke-35"></div>
            <div className="spoke spoke-36"></div>
          </div>
        </div>
        <div className="countdown-value">
          {timeLeft.seconds}s
        </div>
      </div>
      {timeLeft.isExpired && (
        <div className="mt-6 text-xl text-center w-full">The event is happening now!</div>
      )}
    </div>
  );
};

export default CountdownTimer;
