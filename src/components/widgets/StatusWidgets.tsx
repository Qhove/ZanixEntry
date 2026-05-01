import React, { useState, useEffect } from 'react';

export const StatusWidgets: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [temp, setTemp] = useState<string>('--');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true'
        );
        if (!res.ok) throw new Error('Weather fetch failed');
        const data = await res.json();
        if (data.current_weather) {
          setTemp(Math.round(data.current_weather.temperature).toString());
        }
      } catch (err) {
        console.error('Failed to fetch weather:', err);
        setTemp('--');
      }
    };

    fetchWeather();
    // Update weather every 30 minutes to stay within free tier limits safely
    const weatherTimer = setInterval(fetchWeather, 1800000);
    return () => clearInterval(weatherTimer);
  }, []);

  const timeString = time.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const dateString = time.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });

  return (
    <div className="flex flex-col items-end text-white select-none">
      <div className="text-3xl font-bold tracking-tight">{timeString}</div>
      <div className="text-sm font-medium opacity-70 flex gap-2">
        <span>{dateString}</span>
        <span>•</span>
        <span>{temp}°C</span>
      </div>
    </div>
  );
};
