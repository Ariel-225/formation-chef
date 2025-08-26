import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-09-01T00:00:00+00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center mt-8">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="card-warm text-center min-w-16">
          <div className="text-2xl md:text-3xl font-bold text-gradient">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-muted-foreground capitalize">
            {key === 'days' ? 'Jours' : 
             key === 'hours' ? 'Heures' : 
             key === 'minutes' ? 'Minutes' : 'Secondes'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;