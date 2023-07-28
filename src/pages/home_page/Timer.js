import React, { useEffect, useState } from "react";

const Timer = ({ days, hours }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + days);
    targetDate.setHours(targetDate.getHours() + hours);

    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const daysLeft = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutesLeft = Math.floor((timeRemaining / 1000 / 60) % 60);
        const secondsLeft = Math.floor((timeRemaining / 1000) % 60);

        setTimeLeft({ days: daysLeft, hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours]);

  return (
    <div className="giveaway-card__timer">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
};

export default Timer;

