import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
  onComplete: () => void;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate, onComplete }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        onComplete();
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (isExpired) return null;

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-8 animate-fade-in">
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex flex-col items-center">
          <span className="font-mono text-5xl md:text-7xl font-light tracking-wider text-foreground">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mt-2">
            Heures
          </span>
        </div>
        
        <span className="text-4xl md:text-6xl text-primary font-light animate-pulse">:</span>
        
        <div className="flex flex-col items-center">
          <span className="font-mono text-5xl md:text-7xl font-light tracking-wider text-foreground">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mt-2">
            Minutes
          </span>
        </div>
        
        <span className="text-4xl md:text-6xl text-primary font-light animate-pulse">:</span>
        
        <div className="flex flex-col items-center">
          <span className="font-mono text-5xl md:text-7xl font-light tracking-wider text-foreground">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mt-2">
            Secondes
          </span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
