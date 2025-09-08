import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  onCountdownComplete?: () => void;
}

export function CountdownTimer({ targetDate, onCountdownComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onCountdownComplete?.();
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onCountdownComplete]);

  return (
    <div className="flex justify-center space-x-6 text-center" data-testid="countdown-timer">
      <div>
        <div className="countdown-digit font-heading font-bold text-4xl md:text-5xl" data-testid="countdown-days">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <div className="text-muted-foreground text-sm uppercase tracking-wider">Days</div>
      </div>
      <div>
        <div className="countdown-digit font-heading font-bold text-4xl md:text-5xl" data-testid="countdown-hours">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-muted-foreground text-sm uppercase tracking-wider">Hours</div>
      </div>
      <div>
        <div className="countdown-digit font-heading font-bold text-4xl md:text-5xl" data-testid="countdown-minutes">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-muted-foreground text-sm uppercase tracking-wider">Minutes</div>
      </div>
      <div>
        <div className="countdown-digit font-heading font-bold text-4xl md:text-5xl" data-testid="countdown-seconds">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-muted-foreground text-sm uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  );
}
